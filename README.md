**React Animation Challenge**

Small Next.js app showcasing a custom CSS animation sequence: a star icon animates in with motion/rotation/glow, a top border and twin arcs fill in, the layout shifts, “ELEVATE” fades in, then the whole sequence vanishes. Built with modern Next.js, React, and Tailwind CSS utilities plus a few hand-rolled keyframes and clip-path tricks.

**Tech Stack**
- **Framework:** Next.js 15 (App Router)
- **UI:** React 19
- **Styles:** Tailwind CSS v4 via `@tailwindcss/postcss`
- **Build/Lint:** Next toolchain + ESLint flat config

**Getting Started**
- **Prerequisite:** Node.js 18.18+ (or 20+ recommended)
- **Install:** `npm install`
- **Dev server:** `npm run dev` then open `http://localhost:3000`

**Scripts**
- `dev`: Start Next.js in development
- `build`: Create production build
- `start`: Run production server
- `lint`: Run ESLint

**Project Structure**
- `app/page.js`: Renders the sequence (`StarSVG`, `AnimatedArc`, and “ELEVATE”).
- `app/layout.js`: App Router layout shell and global setup.
- `app/globals.css`: Tailwind import plus custom keyframes/utilities.
- `app/components/StartSVG.jsx`: Star composed from 4 clipped quadrants.
- `app/components/AnimatedArc.jsx`: Two tiles filling to draw mirrored arcs with an SVG outline.
- `public/`: Static assets.
- `next.config.mjs`, `postcss.config.mjs`, `eslint.config.mjs`: Tooling configuration.

**Animation Notes**
- **Keyframes:** `growX` (left-to-right fill), `growY` (bottom-to-top fill), `star-move-rotate-scale`, `star-glow-seq`, `shift-down`, `fade-in-up`, `vanish-all`.
- **Utilities:** `.star-wrapper` drives motion + glow; `.shift-down-seq` offsets the stack; `.elevate-text` fades/slides in; `.sequence-root` fades everything out.
- **Timeline:** Star animates ~1.8s, glow at 1.8–2.8s, container shift at 2.8–3.4s, “ELEVATE” appears at ~3.4s, sequence vanishes around 4.4s.
- **Techniques:** `clip-path: ellipse(...)` creates the star/arcs; an SVG overlay draws the top border and arc strokes.

**Customization**
- **Timing:** Adjust delays/durations in `app/globals.css` to speed up or stagger elements.
- **Sizing:** Tweak fixed sizes (e.g., `110px`) in components to scale the star/arc.
- **Styling:** Replace the black/white palette or update text/content in `app/page.js`.

**Deploy**
- **Production build:** `npm run build` then `npm start`.
- **Vercel:** This app is Next.js-native and deploys seamlessly to Vercel.
