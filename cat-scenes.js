/* Original, articulated pencil cats. Decorative only; no application data access. */
(() => {
  const CatInkDefs = {
    template: `<svg class="cat-ink-defs" aria-hidden="true" focusable="false"><defs>
      <filter id="cat-pencil" x="-8%" y="-8%" width="116%" height="116%"><feTurbulence type="fractalNoise" baseFrequency=".025 .065" numOctaves="2" seed="12" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale=".55" xChannelSelector="R" yChannelSelector="G"/></filter>
      <pattern id="cat-pigment" patternUnits="userSpaceOnUse" width="7" height="9"><path d="M1 2l2 1m2 3 1-1M1 8l1-2" stroke="#796a55" stroke-width=".6" opacity=".16"/></pattern>
    </defs></svg>`
  };
  const DiaryCat = {
    props: { pose: { default: 'loaf' }, coat: { default: 'ginger' }, moving: Boolean },
    template: `<svg :class="['diary-cat', 'coat-' + coat, { 'cat-moving': moving }]" :viewBox="pose === 'climb' ? '0 0 120 240' : '0 0 240 160'" fill="none" aria-hidden="true" focusable="false">
      <g class="pencil-lines">
        <g v-if="pose === 'walk'" class="cat-gait">
          <g transform="translate(65 83)"><g class="cat-tail walking-tail"><path class="cat-outline" d="M5 9C-13 5-25-11-34-26c-8-14-8-24-4-25 5-2 3 11 10 20C-17-16-7-13 8-10"/><path class="cat-stripes" d="M-32-28l6-3m5 16 7-5"/></g></g>
          <g transform="translate(79 99)"><g class="cat-leg rear far-leg"><path class="cat-outline" d="M-8-2c-5 14 2 26-4 37l-8 12c-2 4 4 6 8 3L0 34 7 4"/></g></g>
          <g transform="translate(157 101)"><g class="cat-leg front far-leg"><path class="cat-outline" d="M-6-3c-1 17 10 25 12 34l-1 12c0 6 10 5 10 0l-1-15L8-4"/></g></g>
          <path class="cat-outline" d="M59 72c16-18 47-16 76-12l27 3c10-11 22-16 35-9l7 19c-4 17-18 35-37 37-22 1-38-4-58-2-17 4-31 6-42 0-13-7-17-21-8-36Z"/>
          <path class="cat-patch" d="M72 67c14-6 31-6 43-4 6 11 3 20-9 23-12 3-31 2-39-3Z"/>
          <path class="cat-patch" d="M128 66l27 3-5 19-21-2Z"/>
          <path class="cat-stripes" d="m77 64 1 15m10-17 3 16m9-16 2 12m34-7-2 14m12-12-3 13"/>
          <g transform="translate(75 103)"><g class="cat-leg rear near-leg"><path class="cat-outline" d="M-9-5c-3 13 4 20 2 28l-9 20c-2 6 10 6 11 1L7 23l3-21"/><path class="cat-pencil-detail" d="m-8 43 1 4m4-6 1 4"/></g></g>
          <g transform="translate(161 103)"><g class="cat-leg front near-leg"><path class="cat-outline" d="M-6-2c3 9 4 19 2 29l-2 17c0 5 11 6 12 0l2-18 1-28"/><path class="cat-pencil-detail" d="m-2 43 1 4m4-4 1 3"/></g></g>
          <g class="walking-head">
            <path class="cat-outline" d="m164 69 1-32 18 16c6-1 12 0 17 4l20-14-6 32c3 8-1 18-10 22-12 6-30 1-35-10Z"/>
            <path class="cat-ear" d="m168 44 2 18 9-7m24 8 12-13-3 19"/>
            <path class="cat-patch" d="m173 58 8-3 3 14-7 5Z"/>
            <g class="cat-eyes"><path d="m181 77 3-1m16 0 3 1"/></g>
            <path class="cat-nose" d="m190 83 5 0-2 3Z"/><path class="cat-face" d="m193 86-1 4-4 1m4-1 4 2m-18-8-15-2m15 7-16 2m43-5 16-3m-15 8 16 2"/>
          </g>
        </g>
        <g v-else-if="pose === 'stretch'" class="stretching-cat">
          <path class="cat-outline" d="M166 83c29-9 45-32 49-54 2-9 9-8 8 1-2 29-24 55-51 64"/>
          <path class="cat-outline" d="M51 109c25-4 39-18 63-43 12-13 29-13 42-3 12 11 16 24 20 45l19 27c5 7-3 11-9 5l-27-25-11-19c-9 15-30 27-53 29l-49 13c-10 2-13-5-4-9l38-15-42 10c-8 1-12-6-3-10Z"/>
          <path class="cat-patch" d="M96 92c25-29 43-36 53-24l7 21-21 12-27 10Z"/>
          <path class="cat-stripes" d="m116 78 7 14m3-23 7 15m7-18 7 12m28 29-7 4m14 5-7 5"/>
          <path class="cat-outline" d="m43 113-9-31 24 15 23-18-3 31c-2 18-25 26-35 3Z"/>
          <path class="cat-ear" d="m39 89 9 16 6-6m10 1 12-13-2 19"/>
          <path class="cat-face" d="m45 113 7 3m10 0 7-4m-13 9 4 1m-16-3-18 1m19 4-16 5m40-9 17-1"/>
        </g>
        <g v-else-if="pose === 'reach'">
          <g class="sitting-tail"><path class="cat-outline" d="M96 133c-31 12-61 6-62-14-1-7 7-8 8-1 5 15 26 16 50 4"/></g>
          <path class="cat-outline" d="M98 76c-18 15-29 41-25 56 3 14 24 15 39 9l28 1c9-1 9-10-1-11l-13-2 3-41 27-31c5-6-2-12-8-7l-30 26Z"/>
          <path class="cat-patch" d="M93 88c-21 21-21 45-9 48 15-3 20-23 18-40Z"/>
          <path class="cat-stripes" d="m88 103 12 4m-16 5 12 4m-15 5 10 4"/>
          <path class="cat-outline" d="m96 84-14-29 24 9 20-20 3 29c11 18-10 30-26 21Z"/>
          <path class="cat-ear" d="m88 61 11 16 6-8m11-6 7-11 1 17"/>
          <path class="cat-face" d="m109 82 4-2m9-1 3 1m-5 8 4-1m-19 4-17 3m19 1-15 8m34-13 14-6"/>
          <path class="cat-outline" d="M108 101c15 2 27-7 34-15 6-6 13 0 7 7-11 16-23 20-39 19"/>
        </g>
        <g v-else-if="pose === 'back'">
          <path class="cat-outline" d="M126 132c21 19 52 16 64 1 5-6-2-12-7-6-12 10-35 11-50-2"/>
          <path class="cat-outline" d="M91 65c-8 23-18 45-15 61 1 17 26 22 48 18 21-3 26-15 18-31l-15-49Z"/>
          <path class="cat-patch" d="M96 73c-14 25-16 42-10 54 10 13 32 8 36-4 4-15-6-32-6-50Z"/>
          <path class="cat-stripes" d="m89 94 24 1m-27 9 28 2m-29 9 31 2m-28 8 25 2"/>
          <path class="cat-outline" d="m83 63-4-34 23 19 13 0 23-20-3 35c0 22-49 25-52 0Z"/>
          <path class="cat-patch" d="m84 59 16-8 16 0 16 9c-4 26-43 25-48-1Z"/>
          <path class="cat-pencil-detail" d="m99 55 1 13m10-15 0 16m10-15-2 12m-37 0-17-1m18 8-17 4m70-11 17-3m-17 11 17 3"/>
        </g>
        <g v-else-if="pose === 'climb'">
          <g class="cat-tail climbing-tail"><path class="cat-outline" d="M58 175c-21 18-28 24-34 19-8-7 7-15 3-19-5-5-21 13-13 25 14 19 33 2 55-15"/></g>
          <path class="cat-outline" d="M51 86c-16 23-20 61-10 87l-8 28c-1 7 9 10 12 4l15-21 15 19c5 5 12-1 8-6l-11-28c12-27 13-52 6-71Z"/>
          <path class="cat-patch" d="M48 103c-8 23-9 47-2 60 11-7 15-24 13-39Z"/>
          <path class="cat-stripes" d="m43 123 12 3m-13 11 13 2m-12 11 10 2"/>
          <path class="cat-outline" d="M45 108c-6-13-7-36-2-47l13-23c4-7 13-2 8 4L56 65l5 29m12 8c8-17 6-39 12-53l11-17c4-6 13-1 8 5L94 59l-3 52"/>
          <path class="cat-outline" d="m41 81-8-27 19 10c8-3 15-1 20 2l19-12-3 31c-1 14-12 23-26 21-13-1-21-11-21-25Z"/>
          <path class="cat-ear" d="m39 62 6 13 4-7m25 5 10-10-1 14"/>
          <g class="cat-eyes"><path d="m49 83 3-2m19 1 3 2"/></g><path class="cat-nose" d="m60 89 5 0-2 3Z"/>
          <path class="cat-face" d="m62 93-3 4m4-4 3 3m-19-7-16-2m16 8-16 2m44-7 14-2m-14 8 15 3"/>
          <path class="cat-pencil-detail" d="m52 40 4 2m41-8 4 3m-64 166 5 2m33-3 4-3"/>
        </g>
        <g v-else-if="pose === 'peek'">
          <path class="cat-outline" d="M78 126c-10-21-9-50-4-63L68 26l31 25c16-5 30-5 44 0l28-25-4 39c10 25 8 40-5 62"/>
          <path class="cat-ear" d="m75 36 5 30 14-13m52 3 18-20-3 29"/>
          <path class="cat-patch" d="M73 64c14-12 24-12 32-11 5 14 2 28-11 36l-22-5Z"/>
          <path class="cat-patch second-patch" d="M132 52c15-1 25 1 34 14l-6 20-21-9Z"/>
          <g class="cat-eyes"><path d="M93 87q5-5 9 0m33 0q5-5 9 0"/></g>
          <path class="cat-nose" d="m116 99 7 0-4 4Z"/><path class="cat-face" d="m119 104-4 6m4-6 5 6m-32-11-23-3m24 9-25 4m77-11 23-3m-23 10 24 5"/>
          <path class="cat-outline" d="M77 115c-14-5-19 2-17 13l4 16c3 11 20 9 21-1l1-17c0-6-3-10-9-11Zm85 0c14-5 19 2 17 13l-4 16c-3 11-20 9-21-1l-1-17c0-6 3-10 9-11Z"/>
          <path class="cat-pencil-detail" d="m68 139 1 7m7-7 1 7m87-7-1 7m8-7-1 7"/>
        </g>
        <g v-else-if="pose === 'sit'">
          <g class="cat-tail sitting-tail"><path class="cat-outline" d="M132 129c33 9 44 2 47-10 1-7 9-7 9 0-1 25-29 34-61 20"/></g>
          <path class="cat-outline" d="M92 66c-5 13-8 26-13 44-13 29 0 35 22 34l37 1c14-1 20-9 15-19-11-19-13-42-17-59Z"/>
          <path class="cat-patch" d="M87 93c-8 18-14 34-5 41l15-3 6-35Z"/><path class="cat-stripes" d="m87 96 10 4m-13 7 11 4m-15 8 10 4"/>
          <path class="cat-outline" d="m86 66-5-37 24 18c9-3 16-2 24 0l23-18-5 37c4 19-9 35-28 35-21 0-34-13-33-35Z"/>
          <path class="cat-ear" d="m86 37 5 23 10-10m31 0 15-13-4 24"/>
          <path class="cat-patch" d="m88 61 18-12 8 10-14 20-12-4Z"/>
          <g class="cat-eyes"><path d="m101 72 4 1m23 0 4-1"/></g><path class="cat-nose" d="m114 82 6 0-3 3Z"/>
          <path class="cat-face" d="m117 86-4 5m4-5 4 5m-23-9-20-2m20 8-20 3m55-9 21-3m-21 8 21 4"/>
          <path class="cat-face" d="m108 102-3 30q-7 11 6 12m17-42 3 29q8 11-4 13m-17-5v5m18-5v5"/>
        </g>
        <g v-else class="sleeping-body">
          <path class="cat-outline" d="M43 112c-9-16 1-37 18-47 22-14 55-13 76-3 20 8 39 30 36 49-4 19-29 27-61 24-31 3-57-3-69-23Z"/>
          <path class="cat-patch" d="M60 68c16-10 37-13 53-8l-5 16-29 10-25-4Z"/>
          <path class="cat-stripes" d="m65 68 7 14m4-18 8 14m6-17 8 13"/>
          <path class="cat-outline" d="m137 94 6-31 20 17c9-2 17-1 23 2l22-12-9 32c1 17-12 25-31 22-16-2-27-11-31-30Z"/>
          <path class="cat-ear" d="m147 73-3 21 13-10m33 3 12-10-7 19"/>
          <path class="cat-patch second-patch" d="m155 85 10-3 12 3-5 16-15-2Z"/>
          <path class="cat-face" d="m151 105q6 5 11 0m16 3q5 5 10 0m-18 5 3 2-3 2m-16-2-19-2m19 7-20 4m55-8 18 2m-20 4 17 5"/>
          <path class="cat-outline" d="M60 113c24 8 41 10 64 3 9-3 15 3 9 9-11 10-52 17-80 3-12-6-10-13-3-16 3-1 6 0 10 1Z"/>
          <path class="cat-stripes" d="m62 115-2 13m13-11-2 15m16-13-1 13"/>
          <path class="cat-pencil-detail" d="M43 101q-5-10 3-20m49-23 10-1m-39 77 11 2"/>
        </g>
      </g>
    </svg>`
  };
  const DiaryObject = {
    props: { kind: { default: 'flowers' } },
    template: `<svg class="diary-object" viewBox="0 0 100 120" aria-hidden="true" focusable="false"><g class="pencil-lines object-lines">
      <g v-if="kind === 'flowers'"><path class="object-blue" d="M41 78c-1 13-17 17-13 30 8 5 37 5 44 0 3-13-16-19-14-30Z"/><path d="m50 80-4-40m6 42 18-32m-24 32L30 53m23 25 6-49"/><path class="object-leaf" d="M44 66q-20 0-18-12 14 0 18 12Zm12 6q2-17 14-14-1 13-14 14Z"/><g class="object-flower"><circle cx="44" cy="36" r="4"/><circle cx="38" cy="42" r="3"/><circle cx="51" cy="43" r="3"/><circle cx="59" cy="28" r="4"/><circle cx="68" cy="45" r="4"/><circle cx="77" cy="49" r="3"/><circle cx="28" cy="48" r="4"/><circle cx="23" cy="40" r="3"/></g></g>
      <g v-else-if="kind === 'books'"><path class="object-green" d="m12 84 68-5 2 12-69 6Z"/><path class="object-rose" d="m20 98 71 2-1 12-71-2Z"/><path d="m18 89 58-4m-52 21 60 1"/><path class="object-gold" d="m43 70 5-37 12 2-4 36Z"/><path d="m48 33 8-13 4 15m-13 6 7 1"/></g>
      <g v-else-if="kind === 'plant'"><path class="object-gold" d="m28 82 44 0-6 31H34Z"/><path d="M50 83V26m0 37L32 48m18 3 19-15"/><path class="object-leaf" d="M48 40q-22-10-15-23 17 2 15 23Zm5 11q0-24 21-22 2 17-21 22ZM43 67Q18 65 22 47q19-1 21 20Z"/></g>
      <g v-else-if="kind === 'fish'"><path class="object-blue" d="M20 73q25-29 49-3l17-14-1 33-17-13q-27 23-48-3Z"/><path d="m38 58-2 29m13-31 0 31m12-25 0 20"/><circle cx="27" cy="71" r="1"/><path class="object-thread" d="M20 74C-4 94 5 35 20 44"/></g>
      <g v-else-if="kind === 'cup'"><path class="object-blue" d="m28 63 37 1-3 42q-16 8-31-1Z"/><path d="M65 71q26-2 17 20l-18 5m-24-33-8-40m16 40 6-49m5 50 17-40m-43-2 4-1m18-7 4 1m14 9 4 2"/></g>
      <g v-else-if="kind === 'yarn'"><circle class="object-rose" cx="48" cy="84" r="22"/><path d="M33 69q15 4 29 32M28 78q20-3 33 23M39 65q-2 26 23 31M51 63q-18 30 6 42M68 93c29 32 24-36 30-13"/></g>
      <g v-else><path class="object-gold" d="m14 80 74-2-6 31-63 1Z"/><path d="m22 87 55-2m-55 10 53-2m-48-12 2 26m11-27 1 27m12-29v28m12-28-1 27"/></g>
    </g></svg>`
  };
  const DiaryVignette = {
    components: { DiaryCat, DiaryObject },
    props: { scene: { default: 'dashboard' } },
    template: `<svg :class="['diary-vignette', 'vignette-' + scene]" viewBox="0 0 360 150" aria-hidden="true" focusable="false">
      <path class="vignette-rule" d="M12 137c102-2 203 2 336-1"/>
      <template v-if="scene === 'patients'"><diary-cat x="12" y="12" width="176" height="124" pose="reach"/><diary-object x="148" y="22" width="82" height="112" kind="flowers"/><g transform="translate(350 0) scale(-1 1)"><diary-cat x="5" y="19" width="164" height="116" pose="sit" coat="grey"/></g></template>
      <template v-else-if="scene === 'lab'"><diary-object x="253" y="24" width="65" height="103" kind="plant"/><diary-cat x="73" y="-1" width="168" height="112" pose="peek" coat="calico"/><g class="object-lines pencil-lines"><path class="object-gold" d="m100 89 105 0-3 44-98 1Z"/><path class="object-gold" d="m100 89-21 13 24 13 15-24m87-2 22 10-21 17-20-26"/><path d="m151 92-1 41m-29-12 14 0m-11 4 11 0"/></g></template>
      <template v-else-if="scene === 'billing'"><diary-object x="210" y="20" width="93" height="119" kind="books"/><diary-cat x="57" y="22" width="181" height="112" pose="back" coat="grey"/><diary-object x="24" y="69" width="51" height="67" kind="cup"/></template>
      <template v-else-if="scene === 'followups'"><g class="object-lines pencil-lines"><path class="object-rose" d="M26 116q67-9 129 0l-8 17-113 0Z"/><path class="object-green" d="M163 116q64-9 124 0l-9 17-106 0Z"/></g><diary-cat x="10" y="30" width="165" height="99" pose="loaf" coat="grey"/><diary-cat x="148" y="28" width="166" height="100" pose="loaf"/><diary-object x="293" y="32" width="62" height="97" kind="flowers"/></template>
      <template v-else-if="scene === 'pipeline'"><diary-object x="1" y="47" width="89" height="83" kind="fish"/><g transform="translate(320 0) scale(-1 1)"><diary-cat x="24" y="20" width="230" height="118" pose="stretch" coat="calico"/></g></template>
      <template v-else-if="scene === 'settings'"><diary-object x="225" y="32" width="77" height="100" kind="cup"/><diary-object x="18" y="24" width="87" height="111" kind="books"/><diary-cat x="85" y="16" width="179" height="119" pose="reach" coat="calico"/></template>
      <template v-else><g class="object-lines pencil-lines"><path class="object-gold" d="m173 97 139-1 0 7-139 1Z"/><path d="m181 104-4 31m124-32 5 32"/></g><diary-cat x="168" y="7" width="149" height="99" pose="loaf" coat="calico"/><diary-cat x="24" y="23" width="168" height="111" pose="sit"/><diary-object x="300" y="13" width="43" height="88" kind="flowers"/></template>
    </svg>`
  };
  const CatPlayground = {
    components: { DiaryCat },
    template: `<svg class="cat-playground" viewBox="0 0 620 500" aria-hidden="true" focusable="false">
      <g class="room-lines pencil-lines">
        <path class="room-wash" d="M295 80q17-21 80-21l169 8q14 65-6 140l-232 7Z"/>
        <path d="m327 72 213 2-2 174-210-1Z"/><path d="m335 81 93 1-1 76-92-1Zm101 1 95 1-1 75-94 0ZM335 166l92 1-1 72-92-1Zm101 1 94 0-1 72-93 0Z"/>
        <path d="m315 251 237 1m-218 8 201 1"/>
        <path class="curtain" d="M322 69c-11 58-18 101-42 155l38 3c22-57 23-110 19-158m196 4c4 63 12 112 31 150l-30 4c-14-59-16-105-13-154"/>
        <path class="pencil-faint" d="m304 218 18-88m233 82-20-78"/>
        <path class="sun-disc" d="M483 104c11-4 26 3 27 14 2 13-10 24-22 23-12-1-20-9-19-20 0-8 6-14 14-17Z"/>
        <path class="pencil-faint" d="m350 199 18-16 16 14 15-19 21 23m27 6 18-13 17 10 18-15 24 18"/>
        <path d="m58 346 62 1 5 52-56 0Zm6 7 54 1"/>
        <path class="plant-stem" d="M95 348c4-36-6-65-9-82m10 63c16-8 28-20 34-36m-36 30c-23-9-31-21-32-39m32 19c14-13 15-30 11-44"/>
        <path class="plant-leaf" d="M86 273c-22-4-24-16-19-25 16 2 22 11 19 25Zm20 4c-7-20 0-30 10-32 7 17 1 27-10 32Zm17 32c-1-18 10-25 21-22-2 16-11 22-21 22Zm-48 6c-17-1-26-12-23-23 19 1 25 9 23 23Z"/>
        <path class="room-book" d="m439 367 72-3 2 12-73 3Zm8 13 76 1-1 13-77-2Z"/>
        <path class="pencil-faint" d="m447 370 57-2m-54 18 66 1"/>
        <path d="M31 400c152 2 214-2 326 0 93 2 168-2 238 1"/>
        <path class="rug" d="M158 415c32-13 229-12 268 1l20 30c-51 12-257 11-309-1Z"/>
        <path class="pencil-faint" d="m155 437 271 2m-267-15 255 3m-272 26-4 5m15-4-3 5m16-4-2 5m247-5 3 5m12-6 4 5m9-8 5 5"/>
      </g>
      <g class="basket-swing">
        <path class="basket-cord" d="M178 14 122 145m56-131 47 131"/>
        <ellipse class="basket-back" cx="174" cy="153" rx="62" ry="32"/>
        <diary-cat x="116" y="90" width="115" height="80" pose="loaf" coat="calico"/>
        <path class="basket-front" d="M112 150q62 32 125-1c-4 40-116 49-125 1Z"/>
        <path class="basket-weave" d="M120 161q57 28 108 0m-98 12q40 14 91-1m-81-13 5 22m8-19 4 21m9-19 2 21m11-21v20m11-22-2 20m14-23-3 19m15-23-4 19"/>
      </g>
      <g class="play-yarn"><circle cx="0" cy="0" r="9"/><path d="M-6-5q14 2 12 10M-5 6q11-2 10-11M-3-7q-3 9 5 14M9 2q18 5 29-2"/></g>
      <g class="runner-track runner-ginger"><g class="runner-facing"><diary-cat width="148" height="99" pose="walk" coat="ginger" moving/></g></g>
      <g class="runner-track runner-grey"><g class="runner-facing"><diary-cat width="127" height="85" pose="walk" coat="grey" moving/></g></g>
      <g class="room-butterfly"><path d="M0 0c-17-13-19 7-2 5C-15 17 2 21 2 5 16 19 20 3 4 3 21-7 4-15 2 0"/><path d="m1 1 1 9"/></g>
    </svg>`
  };
  window.ClinicCatScenes = { CatInkDefs, DiaryCat, DiaryObject, DiaryVignette, CatPlayground };
})();
