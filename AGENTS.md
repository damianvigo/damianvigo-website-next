# AGENTS.md

## Developer Commands
- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

## Tech Stack
- Next.js 12 (Pages Router)
- React 18
- Styled Components
- Mongoose (MongoDB)
- Next-PWA

## Architecture Notes
- **Database**: Uses MongoDB via Mongoose. Connection logic is in `lib/dbConnect.js`.
- **Models**: Defined in `models/` (e.g., `Posts.js`, `Proyect.js`).
- **API Routes**: Located in `pages/api/`.
- **Components**:
  - UI components in `components/`.
  - Layouts in `components/layouts/`.
  - Shared UI utilities in `utils/`.
- **State/Context**: Theme management is handled via `context/ThemeContext.js`.
- **PWA**: Configured in `next.config.js` using `next-pwa`.
