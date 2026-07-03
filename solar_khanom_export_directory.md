# Solar Khanom - Complete Export Directory

This document centralizes all generated assets and code for the Solar Khanom project. Use this structure to populate your local development environment and GitHub repository.

## 1. Project Structure & Configuration

### Root Directory
- **`package.json`**: Standard Astro project configuration.
- **`tailwind.config.mjs`**: [Astro/Tailwind Tokens]({{DATA:DOCUMENT:DOCUMENT_23}})
- **`astro.config.mjs`**: Use the standard Cloudflare adapter.

### `/public` - Static Assets
- **`favicon.png`**: [Brand Favicon]({{DATA:IMAGE:IMAGE_21}})
- **`apple-touch-icon.png`**: [Mobile Touch Icon]({{DATA:IMAGE:IMAGE_15}})
- **`manifest.json`**: [Web App Manifest]({{DATA:DOCUMENT:DOCUMENT_25}})

### `/src/components` - UI Components
- **`Hero.astro`**: [Dynamic Hero Section]({{DATA:DOCUMENT:DOCUMENT_20}})
- **`KPICards.astro`**: [Institutional Metrics]({{DATA:DOCUMENT:DOCUMENT_13}})
- **`Timeline.astro`**: [Project Roadmap]({{DATA:DOCUMENT:DOCUMENT_14}})
- **`Header.astro`**: Use navigation links from {{DATA:COMPONENTS:COMPONENTS_9}}
- **`Footer.astro`**: Use legal disclaimer for Thai Online Solutions Co., Ltd. from {{DATA:COMPONENTS:COMPONENTS_9}}

### `/src/pages` - Routes
- **`index.astro`**: The main landing page integrating the components above.

## 2. Technical Implementation Guide
Refer to the [Technical Implementation Guide]({{DATA:DOCUMENT:DOCUMENT_23}}) for details on localization (i18n) and backend integration with Cloudflare Workers and D1.

## 3. Legal & Brand Identity
- **Legal Entity**: Thai Online Solutions Co., Ltd.
- **Registration**: 0105563001234
- **Primary Color**: #1E8E5A (Emerald)
- **Accent Color**: #D4AF37 (Gold)
- **Typography**: Manrope (Sans-serif)
