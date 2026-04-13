# Red Studio - Landing Page Implementation

This project is a pixel-perfect implementation of the Red Studio landing page, featuring a high-contrast editorial design, responsive layouts, and smooth interactions.

## 📁 Image Placeholders & Swapping

All images are currently served via Unsplash. To use your own assets, replace the URLs in the component files.

### Mappings

| Component | Placeholder Name | Current File Location |
|-----------|------------------|-----------------------|
| `FeatureImage.tsx` | `placeholder-hero.jpg` | `const HERO_IMAGE` variable |
| `WorkGrid.tsx` | `work-001.jpg` | `const IMAGES` object key `work-001.jpg` |
| `WorkGrid.tsx` | `work-002.jpg` | `const IMAGES` object key `work-002.jpg` |
| ... | ... | ... |
| `Insights.tsx` | `insight-001.jpg` | `const INSIGHT_IMAGES` array index 0 |

To swap an image, simply update the URL string in the respective constant.

## 📐 Spacing System

The design uses a strict spacing system based on the provided specifications.

- **Max Content Width**: `1200px`
- **Navbar Height**: `72px`
- **Section Padding**:
  - Hero Top: `48px`
  - Work Top: `48px`
  - Services Top/Bottom: `56px`
  - Insights Top: `56px`
  - Footer Top/Bottom: `48px`
- **Gutters**:
  - Work Grid: `32px` (Desktop), `20px` (Tablet)
  - Insights Grid: `28px`

## 🔠 Typography Scale

**Font Families:**
- **Serif**: `Playfair Display` (Headings, Logo)
- **Sans-serif**: `Inter` (Body, Nav, UI)

**Desktop Sizes:**
- **Hero Heading**: `140px` / `0.85` line-height
- **Footer Signature**: `96px` / `0.9` line-height
- **Section Headings (Services)**: `44px` / `1.05` line-height
- **CTA Heading**: `26px`
- **Nav Links**: `13px` / `0.08em` tracking
- **Body Text**: `15px` / `1.6` line-height
- **Labels**: `12px` / `0.14em` tracking

## 📱 Responsive Breakpoints

- **Mobile (<768px)**:
  - Nav collapses to hamburger.
  - Hero heading scales to ~48-56px.
  - Grids become single column.
- **Tablet (<1024px)**:
  - Work grid columns collapse to vertical stack.
  - Hero heading scales to 90px.

## ✨ Interactions

- **Scroll Reveal**: Images fade in and slide up (`translateY(12px) -> 0`) over 420ms.
- **Parallax**: Hero image moves up 12px over the first 20% of scroll.
- **Hover States**:
  - Buttons lift (`-3px`) and shadow.
  - Links underline or invert colors.
  - Images scale slightly (`1.05x`) on hover.
