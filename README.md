# Lumina - Landing Page

Landing page for a modern application built with Next.js and React. This project is designed as a promotional page for a UI/UX product called `Lumina`, featuring animations, interactive components, and an advanced visual background using Three.js.

## 🚀 Overview

This app works as a static landing page with demo content, including:

- Hero section with animated title and striking visual background.
- Top navigation with internal section links.
- Features section with interactive cards.
- Visual playground with draggable button and code preview.
- Footer with resource links and platform status.

## 📁 Main structure

- `src/app/page.tsx` - Main page that renders the `LandingPage` component.
- `src/app/layout.tsx` - Global layout that includes `Navbar` and global styles.
- `src/app/globals.css` - Base styles using Tailwind CSS and the `shadcn` theme.
- `src/components/LandingPage.tsx` - Main landing component, hero, and page sections.
- `src/components/Navbar.tsx` - Navigation bar with internal links.
- `src/components/Playground.tsx` - Playground interface with drag-and-drop and code preview.
- `src/components/PixelSnow.tsx` - Custom animated background built with Three.js.
- `src/components/Footer.tsx` - Footer with links and product details.

## 📦 Dependencies

### Production dependencies

- `next` `16.2.9` - React framework for routing and rendering.
- `react` `19.2.4` - Main UI library.
- `react-dom` `19.2.4` - Browser rendering support.
- `framer-motion` `12.42.0` - Smooth animations for interactive components.
- `three` `0.185.0` - 3D engine for the animated `PixelSnow` background.
- `lucide-react` `1.21.0` - Lightweight vector icons.
- `class-variance-authority` `0.7.1` - CSS variant management.
- `clsx` `2.1.1` - Conditional class name composition.
- `radix-ui` `1.6.0` - Accessible UI primitives.
- `shadcn` `4.11.0` - Tailwind utility and component styles.
- `tailwind-merge` `3.6.0` - Merge Tailwind classes without duplicates.

### Development dependencies

- `typescript` `^5` - Static typing support.
- `tailwindcss` `^4` - Utility-first CSS framework.
- `@tailwindcss/postcss` `^4` - Tailwind integration for PostCSS.
- `eslint` `^9` - Code linting for JavaScript and TypeScript.
- `eslint-config-next` `16.2.9` - Next.js recommended linting rules.
- `@types/node` `^20` - TypeScript definitions for Node.js.
- `@types/react` `^19` - TypeScript definitions for React.
- `@types/react-dom` `^19` - TypeScript definitions for React DOM.
- `@types/three` `^0.185.0` - TypeScript definitions for Three.js.

## ⚙️ Prerequisites

Make sure you have installed:

- Node.js `18` or higher.
- npm `10` or higher.

> You can also use `pnpm` or `yarn` if preferred, but this README uses `npm` commands.

## 🚧 Installation

From the project root, run:

```bash
npm install
```

This installs all dependencies defined in `package.json`.

## 🧪 Available scripts

- `npm run dev` - Start the development server at `http://localhost:3000`.
- `npm run build` - Build the app for production.
- `npm run start` - Start Next.js using the built version.
- `npm run lint` - Run ESLint to check for code issues.

## ▶️ Running the project

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local development server:

   ```bash
   npm run dev
   ```

3. Open your browser at:

   ```
   http://localhost:3000
   ```

## 📦 Build and deploy

To prepare the app for production:

```bash
npm run build
```

Then start the production server with:

```bash
npm run start
```

If you deploy to Vercel, this project is ready for deployment as a standard Next.js app.

## 🔧 Important project details

- The main page content is built in `src/components/LandingPage.tsx`.
- `src/components/PixelSnow.tsx` contains a custom shader and renders the animated background.
- `src/components/Playground.tsx` is interactive and uses `framer-motion` for drag-and-drop animations.
- `src/app/layout.tsx` defines the page `metadata` and includes `Navbar` on every route.
- The project does not require environment variables to function as a landing page.

## 💡 Recommendations

- Run `npm run lint` before building.
- If you add new dependencies, make sure they are compatible with React 19 and Next.js 16.
- To edit the main landing content, open:
  - `src/components/LandingPage.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`

## 📌 License

This project does not include a specific license in the repository. If you want to share it publicly, add a `LICENSE` file with your preferred license.
