# SR Herbal Products — Next.js Ecommerce Website

Premium herbal tea brand website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🌿 Features

- **5 Pages**: Home, Product Details, About Us, FAQ, Contact
- **Framer Motion** animations — fade-ins, hover effects, floating leaves
- **Fully Responsive** — mobile-first design
- **SEO Optimised** — metadata, OpenGraph tags
- **TypeScript** throughout
- **Reusable Components** — FadeIn, FAQAccordion, Stars, ProductCard, etc.
- Dark green + gold premium colour theme
- WhatsApp floating button
- Toast notifications for cart actions

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, WhatsApp btn)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + CSS variables
│   ├── loading.tsx         # Loading state
│   ├── not-found.tsx       # 404 page
│   ├── product/
│   │   └── page.tsx        # Product detail page
│   ├── about/
│   │   └── page.tsx        # About Us page
│   ├── faq/
│   │   └── page.tsx        # FAQ page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Fixed top navigation
│   ├── Footer.tsx          # Site footer
│   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│   ├── FadeIn.tsx          # Framer Motion fade-in wrapper
│   ├── FAQAccordion.tsx    # Animated FAQ accordion
│   ├── Stars.tsx           # Star rating display
│   ├── SectionTag.tsx      # Section label badge
│   ├── PageHero.tsx        # Reusable page hero banner
│   ├── ProductCard.tsx     # Product listing card
│   ├── BenefitCard.tsx     # Benefit feature card
│   └── TestimonialCard.tsx # Customer review card
└── lib/
    └── data.ts             # All site data/constants
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## 🎨 Colour Palette

| Token         | Hex       | Usage                    |
|---------------|-----------|--------------------------|
| green-dark    | `#0d2818` | Primary background, nav  |
| green-mid     | `#1a4a2e` | Hero gradient            |
| green-light   | `#2d7a4f` | Accents, borders         |
| green-pale    | `#e8f5ee` | Section backgrounds      |
| green-mist    | `#c8e6d4` | Card borders             |
| gold          | `#c9a84c` | Primary CTA buttons      |
| gold-light    | `#e8c97a` | Hover states, headings   |
| cream         | `#faf7f0` | Page background          |

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## 🌐 Deployment

Deploy instantly to **Vercel**:

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.
