'use client';

import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      icon: '🎧',
      title: 'Gamified Listening',
      description: 'Earn rewards for listening to podcasts and completing episodes. Build streaks and unlock achievements.',
    },
    {
      icon: '✂️',
      title: 'Clip-to-Earn & Reels',
      description: 'Create and share 15–60s highlights from your favorite podcasts. Viral clips earn you bonus coins.',
    },
    {
      icon: '💰',
      title: 'Reward Marketplace',
      description: 'Redeem your earned coins for exclusive content, coupons, ad-free listening, and premium features.',
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            How <span style={{ color: '#7E5FFF' }}>Podware</span> Changes Podcasting
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Transform your listening experience from passive to engaging with our innovative features
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
