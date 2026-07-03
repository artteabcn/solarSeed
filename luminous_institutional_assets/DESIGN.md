---
name: Luminous Institutional Assets
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#3e4941'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#6e7a70'
  outline-variant: '#bdcabe'
  surface-tint: '#006d41'
  primary: '#006a40'
  on-primary: '#ffffff'
  primary-container: '#0d8552'
  on-primary-container: '#f6fff5'
  inverse-primary: '#74db9f'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e1'
  on-secondary-container: '#656464'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#90f7ba'
  primary-fixed-dim: '#74db9f'
  on-primary-fixed: '#002110'
  on-primary-fixed-variant: '#005230'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

This design system is engineered for a premium infrastructure investment fund, specifically targeting high-net-worth individuals and institutional investors in the renewable energy sector. The brand personality is **authoritative, sustainable, and sophisticated**.

The design style follows **Modern Minimalism** with a focus on **Precision Typography** and **Tonal Depth**. To ensure an institutional feel, the UI avoids trendy "app-like" flourishes, opting instead for a layout that feels like a high-end financial report or a physical architectural portfolio.

**Core Principles:**
- **Clarity over Decoration:** Every element must serve a functional purpose in communicating data or value.
- **Architectural Balance:** High use of whitespace to create a sense of scale and stability, echoing the physical presence of solar infrastructure.
- **Understated Luxury:** Premium status is conveyed through generous margins, refined type scales, and the deliberate use of the primary and accent colors against a vast white canvas.

## Colors

The palette is rooted in a **High-Contrast Institutional** foundation. The background is a clean, absolute white to maximize legibility and professional "breathing room."

- **Emerald Green (#1E8E5A):** Used as the primary signal of sustainability and growth. It should be applied to primary actions, success states, and key data visualizations.
- **Charcoal (#333333):** The primary color for all body text and headings. It provides a softer, more sophisticated contrast than pure black.
- **Gold (#D4AF37):** A decorative accent used sparingly for high-level highlights, "Premium" or "VIP" indicators, and refined iconography. It should never be used for primary interactions.
- **Neutral (#F9F9F9):** A soft gray used for subtle surface differentiation in cards or section backgrounds to prevent visual fatigue.

## Typography

We use **Manrope** for its modern, geometric construction and exceptional legibility across European and Southeast Asian scripts (supporting English, French, German, and Thai). It provides a technical yet approachable feel.

**Application Rules:**
- **Headlines:** Use tighter letter-spacing for large displays to maintain a cohesive, "locked-in" architectural look.
- **Body Text:** Standard weight (400) is used for all descriptive text. Ensure paragraph spacing is generous (at least 1.5x font size).
- **Labels:** Small labels and eyebrow headers should use the `label-caps` style to provide a clear hierarchical distinction without needing additional color.
- **Multi-language:** When rendering Thai, ensure the line-height is increased by 10% to accommodate tall glyphs without clipping.

## Layout & Spacing

This design system utilizes a **Fixed Grid System** for desktop and a **Fluid Grid** for mobile. The layout is based on an 8px spacing scale, ensuring mathematical harmony between elements.

- **Desktop (1280px+):** A 12-column grid with 32px gutters. Content is centered with wide 64px margins to emphasize exclusivity.
- **Tablet:** A 6-column grid with 24px gutters.
- **Mobile:** A 2-column grid with 16px gutters and 20px side margins.

**Alignment:**
All data-heavy views should utilize a "left-aligned" narrative structure. Avoid center-aligning body text; reserve center alignment only for hero headlines or splash screens.

## Elevation & Depth

To maintain a "Premium Institutional" feel, depth is conveyed through **Soft Ambient Shadows** rather than stark borders or heavy gradients.

- **Surface Level 0 (Background):** Pure White (#FFFFFF).
- **Surface Level 1 (Cards):** White background with a very soft, diffused shadow: `0px 4px 20px rgba(51, 51, 51, 0.04)`.
- **Surface Level 2 (Hover/Active):** Slightly deeper shadow to imply interactivity: `0px 12px 32px rgba(51, 51, 51, 0.08)`.

Transitions between levels should be subtle. Use **Tonal Layers** (light gray #F9F9F9 backgrounds) to define content areas like sidebars or footers without adding the "weight" of a shadow.

## Shapes

The shape language is defined as **Rounded**, but specifically executed with large-scale corner radii to feel friendly yet substantial.

- **Standard Components:** Buttons and input fields use a 0.5rem (8px) radius.
- **Container Elements:** Cards and featured sections use **2xl** (1.5rem / 24px) roundedness to create a contemporary, "designed" look that distinguishes the interface from legacy banking software.
- **Iconography:** Use a 1.5pt stroke weight with slightly rounded terminals to match the font's geometry.

## Components

### Buttons
- **Primary:** Solid Emerald Green (#1E8E5A) with white text. No border.
- **Secondary:** Transparent background with Charcoal (#333333) border (1px) and text.
- **Tertiary/Ghost:** Text-only in Emerald Green, used for less prominent actions or navigation.

### Cards
- Always use the **rounded-xl (1.5rem)** radius.
- Background must be white with the Level 1 Ambient Shadow.
- Padding should be generous: 32px for desktop, 24px for mobile.

### Input Fields
- Understated style. A simple 1px border in a light neutral gray (#E0E0E0).
- Focus state: Border changes to Emerald Green (#1E8E5A) with a soft green outer glow (2px).

### Chips & Tags
- Used for investment status (e.g., "Active," "Pending").
- Use a light tint of the status color for the background (e.g., 10% opacity Emerald) and the full-strength color for the text.

### Data Visualization
- Line charts and progress bars must use the Primary Emerald color.
- Use Gold (#D4AF37) exclusively for "Projected Returns" or "Milestone" markers to highlight value.