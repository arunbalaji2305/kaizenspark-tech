# Quick Start Guide - KaizenSpark Tech Website

## 🎯 What You Have

A complete, production-ready website with:

✅ **Homepage** with 9 sections (Hero, Social Proof, Services, Case Study, Tech Stack, Why Choose Us, Industries, Testimonials, CTA)  
✅ **About Page** with mission, vision, values, team, and stats  
✅ **Contact Page** with multi-step form and validation  
✅ **Service Page Template** (Custom Software Development)  
✅ **Case Study Page Template** (TechFlow success story)  
✅ **Responsive Navigation** with mobile menu  
✅ **Comprehensive Footer** with newsletter signup  
✅ **Beautiful Animations** using Framer Motion  
✅ **Dark Theme** with gradient accents  
✅ **SEO Optimized** with proper meta tags  

## 🚀 Start Development Server

The server is already running! Open your browser to:

**http://localhost:3000**

If it's not running, start it with:
```bash
npm run dev
```

## 📝 Quick Customization Checklist

### 1. Update Site Information (5 minutes)

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Company Name",           // Change this
  tagline: "Your Tagline",              // Change this
  description: "Your description",      // Change this
  url: "https://yoursite.com",         // Change this
  email: "hello@yoursite.com",         // Change this
  phone: "+1 (555) 123-4567",          // Change this
  address: "Your Address",              // Change this
  social: {
    twitter: "https://twitter.com/you",    // Update
    linkedin: "https://linkedin.com/you",  // Update
    github: "https://github.com/you",      // Update
    facebook: "https://facebook.com/you",  // Update
  },
};
```

### 2. Customize Services (10 minutes)

Edit the `SERVICES` array in `lib/constants.ts`:

- Update titles, descriptions, features
- Add/remove services as needed
- Update icons if desired

### 3. Update Testimonials (5 minutes)

Edit the `TESTIMONIALS` array in `lib/constants.ts`:

- Replace with your real client testimonials
- Update names, companies, quotes
- Add more testimonials (4+ recommended)

### 4. Customize Colors (Optional)

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    950: '#0A0E27',  // Dark background
    900: '#1A1F3A',  // Section backgrounds
    600: '#4F46E5',  // Primary CTA color
    500: '#6366F1',  // Primary hover color
  },
  accent: {
    cyan: '#06B6D4',    // Accent color
    purple: '#A855F7',   // Second accent
    orange: '#FF6B35',   // Third accent
  },
}
```

### 5. Add Your Logo

Replace the "K" logo in Navigation:

1. Add your logo to `public/logo.svg`
2. Edit `components/sections/Navigation.tsx`:

```tsx
// Replace this:
<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-purple rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-xl">K</span>
</div>

// With this:
<Image src="/logo.svg" alt="Logo" width={40} height={40} />
```

### 6. Update Hero Section (5 minutes)

Edit `components/sections/Hero.tsx`:

- Change the headline
- Update the subheadline
- Modify CTA button text
- Update trust bar company names

### 7. Add Real Images (Optional)

Add images to `public/` directory and update references:

- Team photos
- Project screenshots
- Case study images
- Client logos
- Technology logos

## 📄 Page Locations

| Page | File Location |
|------|--------------|
| Homepage | `app/page.tsx` |
| About | `app/about/page.tsx` |
| Contact | `app/contact/page.tsx` |
| Service Example | `app/services/custom-software/page.tsx` |
| Case Study Example | `app/case-studies/techflow/page.tsx` |

## 🎨 Component Locations

| Component | File Location |
|-----------|--------------|
| Navigation | `components/sections/Navigation.tsx` |
| Hero | `components/sections/Hero.tsx` |
| Services | `components/sections/Services.tsx` |
| Footer | `components/sections/Footer.tsx` |
| Testimonials | `components/sections/Testimonials.tsx` |
| Button | `components/ui/Button.tsx` |
| Card | `components/ui/Card.tsx` |

## 🛠️ Common Tasks

### Add a New Service Page

1. Copy `app/services/custom-software/page.tsx`
2. Rename to `app/services/your-service/page.tsx`
3. Update content (title, description, features)
4. Add link in navigation or services section

### Add a New Case Study

1. Copy `app/case-studies/techflow/page.tsx`
2. Rename to `app/case-studies/your-client/page.tsx`
3. Update all content with real data
4. Add to case studies listing page

### Change Navigation Links

Edit `lib/constants.ts`:

```typescript
export const NAVIGATION_LINKS = [
  { name: "Services", href: "/services", megaMenu: true },
  { name: "Your New Link", href: "/your-page" },  // Add here
  // ... more links
];
```

### Update Footer Links

Edit `components/sections/Footer.tsx`:

Look for the `footerLinks` object and modify as needed.

### Modify Contact Form

Edit `app/contact/page.tsx`:

- Update form steps
- Change field labels
- Modify validation rules
- Update budget/timeline options

## 🎭 Animation Tips

All animations use Framer Motion. Common patterns:

### Fade Up on Scroll
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

### Hover Scale
```tsx
<motion.div whileHover={{ scale: 1.05 }}>
  Your content
</motion.div>
```

### Stagger Children
```tsx
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
>
  {items.map(item => (
    <motion.div variants={item}>...</motion.div>
  ))}
</motion.div>
```

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is busy:
```bash
# Kill the process
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Changes Not Showing

1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear `.next` cache: `rm -rf .next` then `npm run dev`
3. Check console for errors: `F12` → Console tab

### Build Errors

```bash
# Check for errors
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Check for linting errors
npm run lint
```

### Form Not Working

1. Check browser console for errors
2. Verify Zod validation schema
3. Test with valid data first
4. Check form submission handler

## 📱 Testing Checklist

### Desktop
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if on Mac)
- [ ] Edge (latest)

### Mobile
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)

### Features to Test
- [ ] Navigation (all links work)
- [ ] Mobile menu (opens/closes)
- [ ] Hero animations
- [ ] Service cards (hover effects)
- [ ] Testimonials carousel
- [ ] Contact form (all steps)
- [ ] Form validation
- [ ] Footer links
- [ ] Social icons
- [ ] Smooth scrolling
- [ ] Page transitions

## 🚀 Ready to Deploy?

See `DEPLOYMENT.md` for complete deployment guide.

**Quick Deploy to Vercel:**

1. Push to GitHub
2. Connect repository on vercel.com
3. Deploy (automatic!)
4. Your site is live! 🎉

## 💡 Pro Tips

1. **Use the browser DevTools** (F12) to inspect elements and test responsive design
2. **Test on real mobile devices** not just browser emulation
3. **Check PageSpeed Insights** regularly: https://pagespeed.web.dev/
4. **Monitor Core Web Vitals** in Vercel Analytics
5. **Update content regularly** to keep the site fresh
6. **Gather real testimonials** from clients as you work with them
7. **Add real project images** to make case studies more compelling
8. **Keep dependencies updated**: `npm outdated` and `npm update`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [React Hook Form Guide](https://react-hook-form.com/get-started)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🎉 You're Ready!

Your website is fully functional and ready to customize. Take it step by step:

1. ✅ Start with updating site information
2. ✅ Customize colors and branding
3. ✅ Add real content and images
4. ✅ Test thoroughly
5. ✅ Deploy to production

**Need help?** Check the README.md for detailed documentation!

---

Built with ❤️ using Next.js 14, Tailwind CSS, and Framer Motion

