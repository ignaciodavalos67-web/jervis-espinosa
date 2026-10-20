# Redesign notes

## Audit
- Next.js 14 App Router, React 18, TypeScript, Tailwind 3, GSAP + ScrollTrigger, Lucide.
- Single home route: presentation, navigation, firm, eight practice areas, promise, contact, footer.
- Existing fonts retained: Cormorant Garamond, Plus Jakarta Sans, Manrope.
- Existing palette retained: petroleum #234B50, ivory #F5F3ED, sky #BEDCE7, midnight #102D46 and existing shades.
- Existing assets only: two logo variants and Quito aerial MP4 (62,218,225 bytes).
- Original contact form is a local confirmation interaction; no delivery service exists.
- Original privacy and terms labels do not link to legal pages.

## Direction and implementation
- Immediate editorial hero with the existing video and logo, readable headline, entrance choreography, subtle scroll depth and pause control.
- Fixed navigation and native modal dialog: keyboard focus containment, Escape, close button, destination close, scroll lock and original destinations.
- Reference menu glyph retained on desktop and mobile.
- Firm narrative, unboxed pillars, sticky practice introduction, animated accordion, full-width promise and underlined contact fields.
- All original business content, eight practice descriptions and service lists, contact information and form behavior retained.
- Motion: power3.out, 0.9-second reveals, 1-second hero entrance, 0.13-second stagger; short CSS hover transitions. Transform/opacity for reveals, one grid transition for accordion. GSAP contexts and matchMedia cleaned up on unmount.
- Reduced-motion users receive static content, no autoplay and no decorative transitions. Mobile removes sticky content columns and simplifies composition.
- No new dependencies or external visual assets.

## Remaining limitations
- Contact submission remains local and does not deliver messages.
- Phone numbers and legal labels are inherited; verify business details before publication.
- Original video remains large; a properly encoded derivative should be prepared before production.
- Browser visual QA and measured Core Web Vitals require a connected browser.

## Validation
- TypeScript: passed after final edits.
- ESLint: passed with no warnings or errors after final edits.
- Next.js production build: passed; static home route, 154 kB first-load JavaScript. A dialog cleanup warning from that build was fixed and rechecked with lint and TypeScript.
- Static content inspection: all eight practice areas and five associated form labels present.
- Browser provider unavailable in this session; responsive screenshots, runtime interaction checks and performance measurements remain unverified.

## Creative direction revision
- Primary petroleum is now #154F55, explicitly requested in the revision. Video overlays use this color and #0D3236; original footage is unchanged.
- Native sticky intro lasts 260svh desktop / 240svh mobile. One scrubbed GSAP timeline controls book expansion, original logo mask reveal, a centered hold, movement into the header slot, curtain fade and hero reveal. No wheel interception or React scroll-state updates for choreography.
- Only PNG brand files exist. The book uses the already approved menu glyph; its cover expands before a masked reveal of the original logo. This is a coordinated transition, not a true vector morph of supplied artwork.
- A single fixed brand element remains in the measured header logo slot. The header has a placeholder rather than a second logo image. Refresh invalidates geometry, including viewport changes. Reduced motion bypasses the sequence and pauses video. No-JavaScript fallback exposes normal content/navigation.
- Firm section and contact form use petroleum backgrounds; practice section remains neutral. Scroll progress draws the firm rule and practice grid. Interactive practice rows, pillar feedback, promise geometry and form focus treatments complete the section rhythm.
- Production build uses the standard .next output required by the Vercel setup; development uses .next-dev so local build checks do not overwrite live development chunks.
- Build, lint and type checks passed. Local HTTP checks confirm home HTML and every linked CSS/JS asset return 200.
- Browser inventory is empty. Bidirectional visual playback, exact rendered alignment, mobile screenshots and performance metrics remain unverified in a browser.
