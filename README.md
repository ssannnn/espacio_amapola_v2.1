# Espacio Amapola Landing Page

A modern, responsive, and accessible landing page for **Espacio Amapola**, specializing in maternal-infant support. Visitors can explore service offerings (Prenatal, Couples Sessions, Postpartum), read authentic testimonials, learn about the lead professional, browse FAQs, and get in touch via WhatsApp.

---

## Table of Contents

- [Espacio Amapola Landing Page](#espacio-amapola-landing-page)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Key Features](#key-features)
  - [Style Decisions](#style-decisions)
  - [Technologies \& Tools](#technologies--tools)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Development](#development)
    - [Build \& Production](#build--production)
  - [License](#license)
  - [Credits](#credits)

---

## Description

Espacio Amapola accompanies families through every stage of the maternity journey:

- **Prenatal**: Preparatory techniques and support for expectant parents.  
- **Couples Sessions**: Joint workshops fostering connection and confidence.  
- **Postpartum**: Guidance on breastfeeding, newborn care, and maternal recovery.  

This landing page is crafted to convey warmth and trust, guiding users seamlessly to relevant information and contact options.

---

## Key Features

- **Hero Section**: Parallax background and scroll-driven animations via Framer Motion.  
- **Services Overview**: Summary cards linking to detailed `/services` pages.  
- **Testimonials Slider**: Swipeable carousel with quotes, ratings, and avatars.  
- **FAQ Accordion**: Collapsible Q&A powered by Radix UI.  
- **Sticky Navigation**: Smooth scroll, active-link highlighting, and mobile menu.  
- **Theme Toggle**: Light/dark mode with system-preference detection.  
- **Scroll-to-Top**: Quick-return button appearing after scroll.  
- **Contact Section**: Form with validation plus one-click WhatsApp button.  
- **Footer**: Social links and quick navigation.

---

## Style Decisions

- **Design Tokens**: Defined as CSS variables in `globals.css` (`--background`, `--foreground`, `--primary`, `--secondary`, etc.).  
- **Color Usage**: Utility-first via Tailwind classes (`bg-primary`, `text-foreground`, etc.).  
- **Typography**:  
  - **Display**: Sour Gummy (Next.js Google Font)  
  - **Body**: Inter with system-font fallback  
- **Layout & Spacing**: Centered container with `2rem` padding at breakpoints (see `tailwind.config.ts`).  
- **Borders & Shadows**: Configured via CSS variables (`--radius`, `--shadow-sm`, etc.).  
- **Images**: All media via Next.js `<Image>` for optimization and lazy-loading.

---

## Technologies & Tools

- **Framework**: [Next.js](https://nextjs.org/) 13 (App Router in `src/app`)  
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (+ `tailwindcss-animate`)  
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/), [`lucide-react`](https://github.com/lucide-icons/lucide) icons  
- **Animations**: [Framer Motion](https://www.framer.com/motion/)  
- **Utilities**: `clsx`, `tailwind-merge`  
- **Lint & Format**: ESLint, Prettier, `knip` (unused-code detection)  
- **Images**: Next.js `<Image>` optimization  
- **Deployment**: Vercel, Docker, DigitalOcean (optional)

---

## Project Structure

```
.
├── .env.example
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── package.json
└── src/
    ├── app/
    │   ├── head.tsx
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── sections.ts
    │   └── services/
    │       └── page.tsx
    ├── components/
    │   ├── landing/          # Hero, Services, Testimonials, etc.
    │   ├── ui/               # Button, Input, Accordion, etc.
    │   └── providers/        # ThemeProvider, etc.
    ├── hooks/                # Custom React hooks
    ├── lib/                  # Utility functions, motion presets
    ├── styles/
    │   └── globals.css
    └── fonts/
        └── fonts.ts
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18  
- [pnpm](https://pnpm.io/) ≥ 7  

### Installation

```bash
git clone https://github.com/your-username/espacio-amapola-landing.git
cd espacio-amapola-landing
pnpm install
```

### Environment Variables

```bash
cp .env.example .env
```

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: WhatsApp contact number  
- `NEXT_PUBLIC_INSTAGRAM_URL`: Instagram profile URL  

### Development

```bash
pnpm dev
```

Open <http://localhost:3000> in your browser.

### Build & Production

```bash
pnpm build
pnpm start
```

---

## License

MIT License. See [LICENSE](LICENSE).

---

## Credits

- [Next.js](https://nextjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Radix UI](https://www.radix-ui.com/)  
- [`lucide-react`](https://github.com/lucide-icons/lucide)  
- [Framer Motion](https://www.framer.com/motion/)  
