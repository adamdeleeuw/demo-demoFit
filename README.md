# DemoFit — Boutique Fitness Studio Landing Page
*A full-stack SaaS landing template built in days to demo rapid Next.js/TypeScript delivery.*

[![Live Demo](https://img.shields.io/badge/live-demo-brightgreen)](https://demo-demo-fit.vercel.app/) 
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 1. Why I Built It
Modern fitness studios need a digital presence that **inspires, converts, and feels world-class**—without agency overhead. DemoFit proves you can launch a beautiful, accessible, and high-performance site in record time, ready for real users and scalable for future growth.

## 2. Thought Process & Design
- **User flow:** Land → see the energy → skim classes/instructors → trust the brand → book or contact (≤ 90 s).
- **Design priorities:** Bold, energetic palette; clean, modern UI; zero layout shift; seamless mobile/desktop experience.
- **AI leverage:** Used shadcn/ui and Vercel v0 for scaffolding, then hand-crafted layouts, TypeScript contracts, and accessibility.

## 3. Tech Stack & Architecture
| Layer         | Details                                                      |
|--------------|--------------------------------------------------------------|
| **Framework**| Next.js 15 (App Router) • React 18 • TypeScript              |
| **Styling**  | Tailwind CSS • shadcn/ui • Lucide icons                      |
| **Infra**    | Deployed on Vercel; static assets in `/public`               |
| **CI/Dev**   | GitHub + Vercel for auto-deploy; ESLint & TypeScript checks  |

## 4. Core Features
| Feature                | Impact                                                      |
|-----------------------|------------------------------------------------------------|
| 🏠 **Hero Section**    | Instantly communicates brand energy and value              |
| 📅 **Class Schedule**  | Responsive, easy-to-skim, mobile-first                     |
| 🧑‍🏫 **Instructors**    | Team spotlight with photos and bios                        |
| 📞 **Contact Form**    | Accessible, client-side validated, ready for integration   |
| 📱 **Mobile First**    | Fully responsive, touch-friendly navigation                |
| 🎨 **Brand Palette**   | Energetic gold/amber accents, clean modern typography      |
| ♿ **Accessibility**    | Semantic HTML, ARIA labels                |

## 5. Quick Start (Local)
```bash
git clone https://github.com/adamdeleeuw/demo-demoFit.git
cd demofit-landing
npm install
npm run dev # http://localhost:3000
```

## 6. Future Improvements 📈
- Add booking/payment integration (Stripe, Calendly)
- Static props caching for class/instructor data
- Incremental Static Regeneration for instant content updates
- Cypress e2e for full nav + form flow
- SEO meta auto-generation from content
- Cloudinary CDN for on-the-fly image transforms
- PWA manifest + offline class schedules

## 7. What I Learned 🧠
- 🚀 **SEO-First Development:** Leveraged Next.js’s built-in features for high Lighthouse scores and web performance.
- 🛠️ **Modern Frontend Stack:** Built scalable UI with React, Tailwind, and shadcn/ui, focusing on accessibility and rapid iteration.
- 🧩 **Component-Driven Architecture:** Practiced modular design for easy expansion and code reuse.
- 🤝 **Collaboration & Version Control:** Used Git and GitHub for source control and CI/CD with Vercel.

## 8. License

This project is for demonstration purposes only.

## About Me

I’m Adam de Leeuw, a Computer Engineering student at UBC. I build product-quality demos and production apps fast by blending low-overhead tech with AI tooling, then document the process for teammates and clients.

[Connect with me on LinkedIn](https://www.linkedin.com/in/adamjdl/)