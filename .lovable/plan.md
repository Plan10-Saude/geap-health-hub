

## Problem

The logos card in "Por que contratar..." is invisible because both the section background AND the card background are `#F0F5FF` — they blend together, making the card look white. Additionally, the logos use `mixBlendMode: 'screen'` which washes out the colors on light backgrounds.

## Solution — 2 changes in `src/pages/Index.tsx`

### 1. Card background: change to `bg-white`
Since the section already has a `#F0F5FF` background, the card needs a contrasting color. Change the card div (line 491) from `bg-[#F0F5FF]` to `bg-white`. This mirrors the pattern in #beneficios where the section is `bg-white` and the card is `bg-[#F0F5FF]` — always contrasting.

### 2. Logo blend mode: change from `'screen'` to `'multiply'`
On both logos (lines 498 and 509), change `mixBlendMode: 'screen'` to `mixBlendMode: 'multiply'`. This displays logos in their original colors on light backgrounds, matching how the GEAP logo is rendered in the #beneficios card.

### Result
- Card visually distinct with white background against the blue-tinted section
- Both logos displayed in their original colors
- Consistent visual pattern across both sections (card always contrasts with section)

