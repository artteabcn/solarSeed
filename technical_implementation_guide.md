# Technical Implementation Guide: Solar Khanom Platform

This document provides the architectural mapping and technical specifications for transitioning the Solar Khanom designs into your **Astro + Tailwind CSS + Cloudflare** stack.

## 1. Project Structure (Astro)

For a clean, modular deployment, organize your components to match the design hierarchy:

```text
src/
├── components/
│   ├── ui/                # Atomic Tailwind components (Buttons, Cards, Badges)
│   ├── landing/           # Section-specific components
│   │   ├── Hero.astro
│   │   ├── KPIs.astro
│   │   ├── Calculator.astro
│   │   └── Timeline.astro
│   └── shared/
│       ├── Header.astro
│       └── Footer.astro
├── layouts/
│   └── Layout.astro       # Global layout with SEO and Fonts
└── pages/
    ├── index.astro        # English (Default)
    ├── th/index.astro     # Thai
    ├── fr/index.astro     # French
    └── de/index.astro     # German
```

## 2. Tailwind Configuration (`tailwind.config.mjs`)

Apply these design tokens to ensure visual fidelity with the Emerald/Gold institutional brand:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E8E5A',    // Institutional Emerald
        secondary: '#D4AF37',  // Gold Accent
        charcoal: '#333333',   // Typography base
        surface: '#F9F9F9',    // Backgrounds
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
```

## 3. Localization Strategy (i18n)

Since you are using **Astro**, implement localized routing:

- Use `src/pages/[lang]/index.astro` for dynamic routes or static subdirectories.
- Store content in `src/content/translations/` as JSON or YAML files to separate copy from logic.
- **Header Navigation**: Pass the `currentLang` prop to the `LanguageSelector` component to manage state across pages.

## 4. Backend Integration (Cloudflare Stack)

- **Workers & D1**: Use for the Investment Calculator's live data and the upcoming Shareholder Portal's auth flow.
- **R2 Storage**: Host the **Investment Memorandum (PDF)** and future financial reports.
- **GitHub Action**: Configure your repo to auto-deploy to Cloudflare Pages on every `push` to the `main` branch.

## 5. Web Assets Checklist

Ensure the following assets from the canvas are placed in your `public/` directory:
- `favicon.png` -> `{{DATA:IMAGE:IMAGE_7}}`
- `apple-touch-icon.png` -> `{{DATA:IMAGE:IMAGE_5}}`
- `manifest.json` -> `{{DATA:DOCUMENT:DOCUMENT_10}}`
