# KaizenSpark Tech - Modern Website

A stunning, modern website built with Next.js 14, inspired by Gong.io's bold design language. Features AI-powered solutions showcase, custom animations, and a comprehensive multi-step contact form.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and React
- **Beautiful UI**: Tailwind CSS with custom design system inspired by Gong.io
- **Smooth Animations**: Framer Motion for delightful user interactions
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Built-in SEO best practices and meta tags
- **Performance**: Optimized for Core Web Vitals
- **Multi-step Form**: Advanced contact form with validation using React Hook Form and Zod

## 🎨 Design System

### Color Palette
- **Primary Colors**: Deep Navy backgrounds with Electric Indigo accents
- **Accent Colors**: Innovation Orange, Tech Cyan, Premium Purple
- **Neutrals**: Carefully selected grays for perfect readability

### Typography
- **Font Family**: Inter (Google Fonts)
- **Scales**: From eyebrow text (12px) to hero headlines (72px)
- **Weights**: 400-900 for various hierarchy levels

## 📦 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kaizenspark-tech
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
kaizenspark-tech/
├── app/                          # Next.js App Router pages
│   ├── about/                   # About page
│   ├── case-studies/            # Case study pages
│   ├── contact/                 # Contact page with multi-step form
│   ├── services/                # Service pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/
│   ├── sections/                # Page sections
│   │   ├── CaseStudySpotlight.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Industries.tsx
│   │   ├── Navigation.tsx
│   │   ├── Services.tsx
│   │   ├── SocialProof.tsx
│   │   ├── TechnologyStack.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyChooseUs.tsx
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Section.tsx
│       └── SectionHeader.tsx
├── lib/
│   ├── constants.ts             # Site configuration and data
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
├── next.config.js
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json
```

## 🎯 Key Pages

### Homepage
- Hero section with animated gradient effects
- Social proof with animated counters
- Services showcase with hover effects
- Featured case study spotlight
- Technology stack carousel
- Why choose us section
- Industries we serve
- Testimonials carousel
- CTA section

### Services Pages
- Custom Software Development
- AI/ML Solutions
- Web Development
- Mobile App Development
- Cloud Solutions
- Digital Transformation

Each service page includes:
- Comprehensive overview
- Development process
- Technologies used
- Case studies
- FAQ section
- CTA

### About Page
- Mission and vision
- Core values
- Team members
- Why partner with us

### Contact Page
- Multi-step form with validation
- Service selection
- Project details
- Budget and timeline
- Contact information
- Success confirmation

### Case Study Page Template
- Project overview
- Challenge description
- Solution approach
- Results and metrics
- Client testimonial
- Related case studies

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    950: '#0A0E27',
    900: '#1A1F3A',
    600: '#4F46E5',
    500: '#6366F1',
  },
  // ... more colors
}
```

### Content
Update site configuration in `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Company Name",
  tagline: "Your Tagline",
  // ... more configuration
};
```

### Components
All components are modular and can be easily customized or replaced.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables (if any)
4. Deploy!

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js:

- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)
- [Railway](https://railway.app/)

## 📈 Performance

The site is optimized for Core Web Vitals:

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Total Blocking Time**: < 200ms
- **Cumulative Layout Shift**: < 0.1

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Meta Tags

Update metadata in each page's `metadata` export:

```typescript
export const metadata = {
  title: "Your Page Title",
  description: "Your page description",
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from [Gong.io](https://www.gong.io/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Support

For questions or support, please contact:
- Email: hello@kaizenspark.tech
- Website: [kaizenspark.tech](https://kaizenspark.tech)

---

Built with ❤️ using Next.js 14 and Tailwind CSS

