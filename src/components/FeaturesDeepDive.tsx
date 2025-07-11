'use client';

import { motion } from 'framer-motion';

export default function FeaturesDeepDive() {
  const features = [
    {
      title: 'Goal-Based Clipping',
      description: 'Break down long episodes into digestible chunks and earn completion rewards',
      icon: '🎯',
    },
    {
      title: 'Weekly Reels Generator',
      description: 'Let our AI create a personalized feed of podcast clips based on your interests',
      icon: '🎬',
    },
    {
      title: 'Premium Podcaster Tools',
      description: 'Exclusive analytics and monetization options for content creators',
      icon: '🎙️',
    },
    {
      title: 'AI Summaries & Quizzes',
      description: 'Reinforce your learning with AI-generated summaries and knowledge checks',
      icon: '🤖',
    },
  ];

  return (
    <section id="deep-dive" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Deeper <span className="text-[#7E5FFF]">Features</span> Exploration
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Discover the unique tools that make Podware stand out from traditional podcast apps
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800 hover:border-[#7E5FFF]/30 hover:shadow-lg hover:shadow-[#7E5FFF]/5 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#2A2A2A] flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                  
                  <div className="mt-4">
                    <motion.span 
                      className="inline-flex items-center text-[#7E5FFF] text-sm font-medium cursor-pointer group"
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <svg 
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
