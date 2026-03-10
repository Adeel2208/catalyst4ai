# Deployment Guide for Catalyst4AI Website

## Vercel Deployment

### Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your Git repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables** (if needed)
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add any required environment variables

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a production URL like: `your-project.vercel.app`

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd MEDAP
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Build Configuration

The project is already configured with:
- ✅ `vercel.json` - Vercel configuration
- ✅ `next.config.js` - Next.js optimization
- ✅ `.vercelignore` - Files to exclude from deployment
- ✅ Build scripts in `package.json`

### Environment Variables

If you need environment variables, create them in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- Add any API keys or secrets as needed

### Custom Domain

1. Go to your project in Vercel dashboard
2. Navigate to Settings > Domains
3. Add your custom domain
4. Follow DNS configuration instructions

### Automatic Deployments

Once connected to Git:
- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments automatically

### Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

**Images not loading?**
- Verify image paths are correct
- Check `next.config.js` image domains configuration

**404 errors?**
- Ensure `vercel.json` rewrites are configured
- Check file paths and routing

### Performance Optimization

The site is already optimized with:
- Image optimization via Next.js Image component
- Code splitting and lazy loading
- Compression enabled
- SEO meta tags
- Sitemap generation

### Support

For issues:
- Check Vercel documentation: https://vercel.com/docs
- Next.js documentation: https://nextjs.org/docs
- Contact: careers@catalyst4ai.com
