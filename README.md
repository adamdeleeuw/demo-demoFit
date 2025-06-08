# DemoFit Landing Page

A professional, responsive landing page for a boutique fitness studio built with Next.js 15, React 18, and Tailwind CSS.

Link: (vercel link)

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern Tech Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Performance Optimized**: Image optimization, lazy loading, and Core Web Vitals focused
- **SEO Ready**: Comprehensive meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic markup
- **Professional UI**: Clean design with smooth animations and hover effects

## 🏗️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/demofit-landing.git
    cd demofit-landing
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Manual Deployment

1. Build the project:
    ```bash
    npm run build
    ```

2. Start the production server:
    ```bash
    npm start
    ```

## 📁 Project Structure

```text
demofit-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
├── public/
│   └── images/
├── lib/
├── next.config.mjs
├── tailwind.config.js
└── package.json
```

## 🎨 Customization

### Colors
The primary color scheme uses amber/gold accents. Update the colors in `tailwind.config.js` and `app/globals.css`.

### Content
Update the content in `app/page.tsx` to match your studio's information:
- Studio name and branding
- Class schedules
- Instructor information
- Contact details
- Social media links

### Images
Replace the images in the `public/images/` directory:
- `studio.jpg` - Hero background image
- `sarah.jpg` - Instructor photo
- `emma.jpg` - Instructor photo  
- `mike.jpg` - Instructor photo

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Image optimization with Next.js Image component
- Lazy loading for improved performance

## 📄 License

This project is for demonstration purposes only.

## Deployment

- Connect your GitHub repo to Vercel and deploy from there with zero configuration.