This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This repository is a Next.js 14 App Router application. Its project root contains
`package.json` and `next.config.mjs`; the routes live in `src/app`.

- Build: `npm run build` (`next build`), generating the real production output in `.next`.
- Serve that production build locally: `npm start` (`next start`).
- Develop: `npm run dev`; only the development server uses `.next-dev` to avoid
  overwriting production output.

In Vercel Project Settings, verify:

- **Framework Preset:** Next.js.
- **Root Directory:** repository root (the folder containing `package.json`), not `src` or `src/app`.
- **Build Command:** framework default, or `npm run build` if overridden.
- **Output Directory:** disable Override and use the Next.js default. Remove any
  previous `.next-production`, `public`, `out`, or `dist` override.
- **Install Command:** automatic npm detection, or `npm ci` if an override is needed.

No `vercel.json` override or static-export configuration is required. The former
production `distDir: ".next-production"` caused output to be written somewhere
other than the `.next` directory expected by the failing deployment. Do not create
an empty `.next` directory or commit generated output to work around that error.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
