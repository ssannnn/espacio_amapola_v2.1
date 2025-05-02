# Espacio Amapola Landing Page

A modern and accessible landing page for **Espacio Amapola**, a maternal-infant support service. This site showcases service offerings (*Prenatal*, *Couples Sessions*, *Postpartum*), real testimonials, an About Me section with the lead professional, an FAQ, and a direct contact form via WhatsApp.

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
    - [Running in Development](#running-in-development)
    - [Build \& Production](#build--production)
  - [License](#license)
  - [Credits](#credits)

---

## Description

Espacio Amapola is a center offering guidance and care for the maternity journey:

- **Prenatal**: Techniques and tools to prepare for pregnancy and birth.
- **Couples Sessions**: Joint workshops to support the growing family.
- **Postpartum**: Advice on breastfeeding, weaning, and maternal recovery.

The landing page is designed to convey warmth and trust, inviting visitors to explore services and get in touch quickly.

---

## Key Features

- **Dynamic Sections**: Home, Services, Testimonials, About, FAQ, Contact.
- **Interactive Hero**: Parallax effect and cursor tracking with Framer Motion.
- **Testimonials Slider**: Responsive carousel showcasing real feedback.
- **Contact Form**: Client-side validation with simulated submission flow.
- **WhatsApp Button**: One-click access to chat with the specialist.
- **Sticky Navigation**: Smooth scrolling and style adjustments on scroll.
- **Light/Dark Mode**: Toggleable theme support via CSS classes.

---

## Style Decisions

- **Color Palette**

  - Neutral backgrounds: `bg-neutral-50` / `bg-white`
  - Primary accent (main orange): `#FFA500` (`bg-orange-500` / `text-orange-500`)
  - Soft accents: pastel peach and apricot tones
  - Text colors: `text-gray-900` (headings) / `text-gray-700` (body)

- **Typography**

  - Google Fonts:
    - Headings: “Sour Gummy”
    - Body text: “Inter”
  - System font stack fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

- **Images**

  - WebP format for hero and service graphics
  - `next/image` for lazy-loading and responsive support

- **Animations**

  - Framer Motion for parallax, fade-ins, and hover states
  - Tailwind CSS Animate for simple transitions

- **Accessibility**

  - High-contrast focus styles
  - ARIA labels on interactive elements
  - Full keyboard navigation support

---

## Technologies & Tools

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (+ tailwindcss-animate)
- **UI Components**:
  - [shadcn/ui](https://ui.shadcn.com)
  - [Radix UI](https://www.radix-ui.com)
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Charts**: Recharts (optional)
- **Utilities**: clsx, tailwind-merge
- **Lint & Format**: ESLint, Prettier
- **Deployment Options**: Vercel, Docker, DigitalOcean

---

## Project Structure

```
.
├── .env.example          # Example environment variables
├── app/                  # Next.js App Router: layout & pages
│   ├── layout.tsx
│   ├── page.tsx
│   └── sections.ts       # Definitions for homepage sections
├── components/           
│   ├── landing/          # Section components (Hero, Services, etc.)
│   └── ui/               # Design system components (Buttons, Inputs…)
├── public/               # Static assets (images, icons, etc.)
├── styles/               # Global CSS (globals.css)
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── README.md             # ← You are here
```

---

## Getting Started

### Prerequisites

- Node.js ≥ v18
- npm ≥ 7 or Yarn

### Installation

```bash
git clone https://github.com/your-username/espacio-amapola-landing.git
cd espacio-amapola-landing
npm install
# or
yarn install
```

### Environment Variables

Copy the example file and fill in:

```bash
cp .env.example .env
```

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: WhatsApp contact number
- `NEXT_PUBLIC_INSTAGRAM_URL`: Instagram profile link

### Running in Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Credits

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Recharts](https://recharts.org)
- Original design inspiration by [Espacio Amapola](https://espacio-amapola-v2-1.vercel.app/)
