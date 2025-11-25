# Copilot instructions for this repo

**Overview**
- **Purpose:** This is a Next.js + TypeScript starter/dashboard (`src/` + `app/`) with many ready-made UI components (MUI) and integrations (Firebase, Supabase, Amplify, Auth0).
- **Project shape:** main app code lives under `src/` with feature folders: `app/` (Next app-router), `actions/` (data loaders / SSR helpers), `lib/` (API clients), `components/` (UI pieces), and `/_mock` (seed/mock data).

**How to run (important commands)**
- **Dev:** `yarn dev` or `npm run dev` (starts Next on port `8082` with Turbopack).
- **Build:** `yarn build` then `yarn start` (or `npm run build` / `npm run start`).
- **Lint:** `npm run lint` and auto-fix with `npm run lint:fix`.
- **Format:** `npm run fm:check` and `npm run fm:fix`.
- **Type-check / Watch:** `npm run tsc:dev` or `npm run tsc:watch`.
- **Clean:** `npm run clean` (note: uses `rm -rf`; may fail on native Windows PowerShell—use WSL or `rimraf` if needed).

**Environment & config**
- `src/global-config.ts` centralizes runtime toggles and env vars. Key env names:
  - `NEXT_PUBLIC_SERVER_URL`, `NEXT_PUBLIC_ASSETS_DIR`
  - `NEXT_PUBLIC_FIREBASE_*`, `NEXT_PUBLIC_SUPABASE_*`, `NEXT_PUBLIC_AUTH0_*`, `NEXT_PUBLIC_AWS_AMPLIFY_*`
- Auth mode is switchable via `CONFIG.auth.method` (`'jwt'|'amplify'|'firebase'|'supabase'|'auth0'`)—change this to exercise different auth flows.

**Routing & navigation**
- Canonical routes live in `src/routes/paths.ts`. Use these helpers when adding links (e.g. `paths.product.details(id)` or `paths.post.details(title)`).
- The main navigation structure is defined in `src/layouts/nav-config-main.tsx` — update it when adding top-level pages.

**Data fetching & integrations**
- Shared HTTP client: `src/lib/axios.ts` (exported `fetcher`, `endpoints`). Use `fetcher` consistent with existing code.
- Third-party clients: `src/lib/firebase.ts`, `src/lib/supabase.ts`, `src/lib/axios.ts` and `src/lib/*` contain integration patterns and interceptors — follow those patterns for new backends.
- Data-layer helpers live in `src/actions/*`. There are SSR variants (e.g. `blog-ssr.ts`, `product-ssr.ts`) — check those when implementing server-rendered pages.

**Conventions & patterns to follow**
- Use `paths` helpers rather than hard-coded strings for routes and route generation.
- Place shared UI under `src/components/*` and small feature logic under `src/actions/*`.
- Mock/sample data lives in `src/_mock` and is used across demos — update mocks when altering demo pages.
- Keep `src/global-config.ts` as the single source of runtime flags (auth method, server URL, static export, etc.).

**Libraries & runtime notes**
- UI: `@mui/material` (+ `@mui/lab`, `@mui/x-data-grid`), `@iconify/react` for icons, `tiptap` for rich text, `fullcalendar`, `framer-motion`.
- Next: configured via `next.config.ts` and uses Turbopack in dev; Node >= 20 is required and the repo expects `yarn@1.22.22`.

**When changing routes or adding pages**
- Update `src/routes/paths.ts` for canonical route helpers.
- Add/adjust navigation in `src/layouts/nav-config-main.tsx` and any layout files under `src/layouts/`.
- If the page uses server data, check `src/actions/*` and add SSR helper variants matching existing naming patterns (`*-ssr.ts`).

**Windows gotchas**
- Some npm scripts use Unix tooling (`rm -rf`). On native Windows PowerShell these may fail — run in WSL or replace with cross-platform tools (`rimraf`).

**Quick examples**
- Use axios fetcher: `import { fetcher, endpoints } from 'src/lib/axios'; const posts = await fetcher(endpoints.post.list);`
- Use a route helper: `import { paths } from 'src/routes/paths'; <Link href={paths.product.details('123')}>Product</Link>`

If anything here is unclear or you want examples expanded (component patterns, specific actions, or CI expectations), tell me which sections to expand and I'll iterate.
