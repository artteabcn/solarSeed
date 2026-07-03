# Solar Khanom Deployment Manifest

## 1. Project Repository Structure
Push the following structure to your GitHub repository for seamless Cloudflare Pages deployment:

```text
/
├── public/                # Static assets
│   ├── favicon.png        # {{DATA:IMAGE:IMAGE_21}}
│   ├── apple-touch-icon.png # {{DATA:IMAGE:IMAGE_15}}
│   └── manifest.json      # {{DATA:DOCUMENT:DOCUMENT_25}}
├── src/
│   ├── components/        # Astro Components
│   │   ├── Hero.astro     # {{DATA:DOCUMENT:DOCUMENT_20}}
│   │   ├── KPICards.astro # {{DATA:DOCUMENT:DOCUMENT_13}}
│   │   └── Timeline.astro # {{DATA:DOCUMENT:DOCUMENT_14}}
│   ├── layouts/
│   │   └── MainLayout.astro
│   └── pages/             # Routes
│       └── index.astro    # Landing Page
├── tailwind.config.mjs    # Design Tokens
└── package.json           # Dependencies
```

## 2. Cloudflare Pages Configuration
1. **Framework Preset**: Astro
2. **Build Command**: `npm run build`
3. **Build Output Directory**: `dist`
4. **Environment Variables**:
   - `PUBLIC_SITE_URL`: Your production domain
   - `THAI_ONLINE_SOLUTIONS_REG`: 0105563001234

## 3. Brand Consistency
The deployment uses the **Luminous Institutional Assets** design system:
- **Primary Emerald**: `#1E8E5A`
- **Accent Gold**: `#D4AF37`
- **Typography**: Manrope (Sans-serif)
- **Legal Entity**: Thai Online Solutions Co., Ltd.