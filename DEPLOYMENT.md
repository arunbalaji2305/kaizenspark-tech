# Deployment Guide - KaizenSpark Tech Website

This guide will help you deploy your KaizenSpark Tech website to production.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest and most optimized platform for Next.js applications.

### Step 1: Prepare Your Repository

1. Initialize Git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: KaizenSpark Tech website"
```

2. Create a repository on GitHub:
   - Go to https://github.com/new
   - Create a new repository (public or private)
   - Don't initialize with README (we already have one)

3. Push your code:
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
   - **Install Command**: `npm install`

5. Click "Deploy"

Your site will be live in ~2 minutes! 🎉

### Step 3: Add Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., kaizenspark.tech)
4. Follow the DNS configuration instructions
5. SSL certificates are automatically provisioned

## 🌐 Alternative Deployment Options

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

Or connect your Git repository directly on [netlify.com](https://netlify.com).

### Deploy to AWS Amplify

1. Install AWS Amplify CLI:
```bash
npm install -g @aws-amplify/cli
```

2. Initialize Amplify:
```bash
amplify init
```

3. Add hosting:
```bash
amplify add hosting
```

4. Publish:
```bash
amplify publish
```

### Deploy to DigitalOcean App Platform

1. Go to [DigitalOcean](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Connect your GitHub repository
4. Configure:
   - **Type**: Web Service
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
   - **Port**: 3000

5. Click "Launch App"

### Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway auto-detects Next.js and configures everything
5. Your app deploys automatically!

## 🔧 Environment Variables

If you need environment variables, create them in your deployment platform:

### Required Variables (if using analytics, forms, etc.)

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form API (Optional)
CONTACT_FORM_API_KEY=your-api-key

# Email Service (Optional)
EMAIL_SERVICE_API_KEY=your-email-service-key
```

### Setting Environment Variables in Vercel

1. Go to Project Settings → Environment Variables
2. Add each variable:
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://yourdomain.com`
   - Environments: Production, Preview, Development

3. Redeploy your application

## 📊 Post-Deployment Checklist

### SEO & Analytics

- [ ] Submit sitemap to Google Search Console
  - URL: `https://yourdomain.com/sitemap.xml`
  
- [ ] Set up Google Analytics (if not done)
  - Add GA4 tracking ID to environment variables
  
- [ ] Set up Bing Webmaster Tools
  - URL: https://www.bing.com/webmasters
  
- [ ] Configure robots.txt (already included)
  - Verify at `https://yourdomain.com/robots.txt`

### Performance

- [ ] Test on [PageSpeed Insights](https://pagespeed.web.dev/)
  - Target: 90+ score on mobile and desktop
  
- [ ] Test on [GTmetrix](https://gtmetrix.com/)
  - Verify loading times < 2 seconds
  
- [ ] Check [Web.dev Measure](https://web.dev/measure/)
  - Ensure all Core Web Vitals are green

### Security

- [ ] Verify HTTPS is working
  - All pages should load with SSL
  
- [ ] Check security headers
  - Test at [securityheaders.com](https://securityheaders.com/)
  
- [ ] Set up Content Security Policy (CSP)
  - Already configured in next.config.js

### Functionality

- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify animations work smoothly
- [ ] Check all images load correctly
- [ ] Test page transitions

### Monitoring

- [ ] Enable Vercel Analytics (if using Vercel)
  - Go to Project Settings → Analytics
  
- [ ] Set up uptime monitoring
  - Options: UptimeRobot, Pingdom, StatusCake
  
- [ ] Configure error tracking (optional)
  - Sentry, LogRocket, or similar

### Social Media

- [ ] Update Open Graph images
  - Create 1200x630px images for social sharing
  - Add to `public/og-image.jpg`
  
- [ ] Test social sharing
  - Use [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  
- [ ] Add social media links to footer
  - Update links in `lib/constants.ts`

## 🔄 Continuous Deployment

### Automatic Deployments

Once connected to Vercel/Netlify/etc., every push to your main branch will automatically deploy.

**Workflow:**
1. Make changes locally
2. Commit changes: `git commit -am "Your message"`
3. Push to GitHub: `git push`
4. Automatic deployment starts
5. Your site updates in ~2 minutes

### Preview Deployments

- Every pull request gets a unique preview URL
- Test changes before merging to production
- Share preview links with team/clients

## 🐛 Troubleshooting

### Build Fails

**Issue**: Build command fails
```bash
npm run build
```

**Solutions**:
- Check for TypeScript errors
- Verify all dependencies are installed
- Check console for specific error messages
- Ensure Node.js version is 18.0 or higher

### Page Not Found (404)

**Issue**: Routes not working after deployment

**Solution**: 
- Verify file structure matches Next.js App Router conventions
- Check that all page.tsx files are present
- Clear build cache and redeploy

### Environment Variables Not Working

**Issue**: Variables are undefined in production

**Solution**:
- Prefix client-side variables with `NEXT_PUBLIC_`
- Redeploy after adding new variables
- Check that variables are set in the correct environment

### Images Not Loading

**Issue**: Images show broken or 404

**Solution**:
- Verify images are in `public/` directory
- Check image paths (case-sensitive)
- Use Next.js Image component for optimization
- Configure image domains in `next.config.js`

### Slow Performance

**Issue**: Low PageSpeed score

**Solutions**:
- Enable image optimization
- Minimize JavaScript bundle size
- Use dynamic imports for heavy components
- Optimize font loading
- Enable caching headers

## 📞 Support & Resources

### Documentation
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Production](https://tailwindcss.com/docs/optimizing-for-production)

### Community
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
- [Next.js Discord](https://nextjs.org/discord)

### Need Help?

If you encounter issues:
1. Check the error logs in your deployment platform
2. Review Next.js documentation
3. Search GitHub issues
4. Ask in Next.js Discord community

## 🎉 Success!

Your KaizenSpark Tech website is now live! 

**Next Steps:**
1. Share your URL with your team
2. Start driving traffic to your site
3. Monitor analytics and performance
4. Iterate based on user feedback

---

**Pro Tips:**
- Set up Google Analytics to track visitor behavior
- Enable Vercel Analytics for detailed insights
- Configure automated backups
- Keep dependencies updated regularly
- Monitor Core Web Vitals weekly

Happy deploying! 🚀

