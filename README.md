# Podware Landing Page

A landing page for Podware, a platform that makes podcasting addictive with coins, clips, and rewards.

## Environment Variables

To run this project, you need to add the following environment variables to your .env file:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Deployment

This project is set up for deployment on Vercel.

## ## Key Features
- Dark theme with purple and teal accents
- Fully responsive design (mobile, tablet, desktop)
- Animated section transitions using Framer Motion
- Interactive UI elements with hover effects
- Form validation with success/error states
- Accessibility-compliant markup

## Next Steps for Development
1. **API Integration**: 
   - Connect the waitlist form to a real API endpoint
   - Implement proper error handling and validation

2. **Content Updates**:
   - Replace placeholder text with final copy
   - Add real testimonials
   - Update images with actual app screenshots/mockups

3. **Performance Optimization**:
   - Implement image optimization
   - Add proper loading states
   - Implement code splitting

4. **SEO Improvements**:
   - Complete metadata configuration
   - Add structured data
   - Implement a sitemap

5. **Analytics**:
   - Add Google Analytics or similar tracking
   - Implement conversion tracking for the waitlist form

6. **Testing**:
   - Implement unit tests for components
   - Add end-to-end tests for user flows
   - Test across different browsers and devices

## Build for Production
```bash
npm run build
npm start
```

## Deployment
The project can be easily deployed to Vercel or any other hosting platform that supports Next.js.oject is a dark-themed, responsive landing page for Podware, a gamified podcast platform. The landing page showcases the key features of the platform: gamified listening, clip-to-earn functionality, and a reward marketplace.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Hook Form for form handling
- Axios for API requests

## Components Structure
1. `Navigation.tsx` - Responsive navigation with mobile menu
2. `Hero.tsx` - Main landing section with headline and waitlist form
3. `Features.tsx` - Overview of the main features using FeatureCard components
4. `FeatureCard.tsx` - Reusable card component for features
5. `HowItWorks.tsx` - Step-by-step explanation of how the platform works
6. `Testimonials.tsx` - User testimonials with ratings
7. `FeaturesDeepDive.tsx` - More detailed feature explanations
8. `WaitlistForm.tsx` - Email subscription form component
9. `WaitlistSection.tsx` - Secondary call-to-action section
10. `Footer.tsx` - Site footer with links and social media

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
