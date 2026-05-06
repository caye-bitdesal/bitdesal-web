# Bitdesal Website (Astro + Tailwind)

Production website implementation based on the **Figma Make** source of truth. The goal is to replicate layout, spacing, and visual design from Figma while showcasing interaction behavior clearly.

## Architecture

- **Framework**: Astro `6.2.2+`
- **Styling**: Tailwind CSS (Tailwind v4 via `@tailwindcss/vite`)
- **Layout shell**: `src/layouts/Layout.astro`
  - Renders `Header` + `Footer` around the page `<slot />`
  - Boots the client-side i18n runtime and persists language in `localStorage`
- **UI components**: `src/components/`
  - `src/components/Header.astro` (nav + language switcher)
  - `src/components/Footer.astro`
- **Pages**: `src/pages/`
  - `index.astro` (Home)
  - `services.astro`
  - `methodology.astro`
  - `prices.astro`
  - `about.astro`
  - `blog.astro`
  - `contact.astro`
  - `404.astro`

## Styling & tokens

- **Global CSS entry**: `src/styles/index.css`
- **Design tokens**: `src/styles/theme.css`
  - Uses CSS variables from Figma Make and Tailwind v4 `@theme inline` mappings.
  - Enables Tailwind classes like `bg-background`, `text-foreground`, `text-primary`, `border-border`, etc.

## i18n (language switching)

This project mirrors the Figma Make behavior:

- **Source-of-truth copy**: `src/i18n/make-translations.ts` (downloaded from Figma Make)
- **App translation dictionary**: `src/i18n/translations.ts`
  - Imports Make translations and merges `nav`, `footer`, and `notFound` strings.
- **Runtime**: `src/layouts/Layout.astro`
  - Reads initial language from `?lang=`, then `localStorage`, falling back to `en`
  - Updates any element with:
    - `data-i18n-key="some.nested.key"` (text content)
    - `data-i18n-attr="placeholder"` (attributes such as placeholders)

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Repo hygiene

Generated folders like `node_modules/`, `node_modules/.vite/`, `.astro/`, and `dist/` are ignored via `.gitignore` and should not be committed.
