/* Shared, dependency-free synchronization helpers; also exercised by node:test. */
(function (root) {
  'use strict';
  const fields = {
    clinic_settings: 'id',
    user_settings: 'id userId',
    patients: 'id name chartNo gender age phone lineId leadStatus pipelineStage consultCategory doctor leadDoctors specialNotes chiefComplaint projectTotal paidAmount medicalAlerts drugAllergies systemicDiseases toothStatusMap treatments',
    appointments: 'id patientId patientName patientPhone category date time chair doctor duration status t3Date reminderDone treatmentCategories treatmentItems notes',
    lab_orders: 'id patientName chartNo labName itemType toothPositions shade sentDate expectedDate status isUrgent notes',
    followups: 'id patientName patientPhone surgeryDate careType dueDate doctor status callRecords notes'
  };
  const snake = key => key.replace(/[A-Z]/g, c => '_' + c.toLowerCase());
  const clone = value => JSON.parse(JSON.stringify(value));
  const canonical = value => Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(k => [k, canonical(value[k])])) : value;
  const matches = (expected, actual) => Object.entries(expected).every(([key,value]) =>
    JSON.stringify(canonical(value)) === JSON.stringify(canonical(actual[key])));
  function encode(table, item) {
    const known = fields[table].split(' ');
    return { ...Object.fromEntries(known.filter(k => item[k] !== undefined)
      .map(k => [snake(k), k === 'id' || k === 'patientId' ? String(item[k] ?? '') : clone(item[k])])),
      record_data: Object.fromEntries(Object.entries(item).filter(([k, v]) => !known.includes(k) && v !== undefined).map(([k,v]) => [k,clone(v)])) };
  }
  function decode(table, row) {
    return { ...clone(row.record_data || {}), ...Object.fromEntries(fields[table].split(' ').filter(k => row[snake(k)] !== undefined)
      .map(k => [k, clone(row[snake(k)])])) };
  }
  function diff(table, before, after) {
    const old = new Map(before.map(item => [String(item.id), encode(table, item)]));
    const changes = [];
    for (const item of after) {
      const row = encode(table, item), id = String(item.id);
      if (JSON.stringify(old.get(id)) !== JSON.stringify(row)) changes.push({ table, id, row });
      old.delete(id);
    }
    for (const id of old.keys()) changes.push({ table, id, row: null });
    return changes;
  }
  async function readAll(client, table) {
    const rows = [];
    for (let offset = 0; ; offset += 500) {
      const { data, error } = await client.from(table).select('*').order('id').range(offset, offset + 499);
      if (error) throw error;
      rows.push(...data);
      if (data.length < 500) return rows;
    }
  }
  const api = { fields, encode, decode, diff, readAll, clone, matches };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ClinicSync = api;
})(globalThis);
