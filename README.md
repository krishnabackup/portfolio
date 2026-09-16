# Jordan Ellis — Portfolio

A dark, glassmorphism/neon developer portfolio built with **React + Vite + Tailwind CSS v4 + Framer Motion**.

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## Deploying

`npm run build` outputs a static site in `dist/`. Drag that folder onto
[Netlify](https://app.netlify.com/drop), or connect the repo to
[Vercel](https://vercel.com/new) / GitHub Pages — no extra config needed.

## What to customize

Almost everything you need to change lives in **one file**:

```
src/data/content.js
```

That includes your name, role, bio, stats, skills, projects, experience,
email, socials, and the hero terminal/headline text. You shouldn't need to
touch component files just to update content.

A few things live outside that file:

| What | Where |
|---|---|
| Résumé link | `profile.resumeUrl` in `content.js` — point it at a PDF in `public/` |
| Project screenshots | `src/components/ProjectMockup.jsx` currently renders CSS-drawn placeholder graphics. Swap in real `<img>` screenshots once you have them, or drop images into `public/` and reference them. |
| Colors / fonts | `src/index.css` — the `@theme` block at the top defines the `ink` (background), `mist` (muted text), `violet`, and `cyan` design tokens, plus the font stacks. |
| Favicon / meta tags | `index.html` |

## Structure

```
src/
  components/       UI components, one per section
    ui/             small shared primitives (SectionHeading)
  data/content.js    all editable copy
  hooks/            useFinePointer (disables cursor/magnetic effects on touch)
  App.jsx           assembles the page
  index.css         Tailwind + design tokens + a handful of bespoke classes
```

## Notes on the animations

- Everything respects `prefers-reduced-motion` — animations are skipped and
  content just appears, no motion.
- The custom cursor and magnetic contact link are disabled on touch devices.
- The hero terminal typing effect and the experience-timeline progress line
  are hand-rolled (no animation library needed for those); everything else
  uses Framer Motion (`whileInView`, `useScroll`, `useInView`).
