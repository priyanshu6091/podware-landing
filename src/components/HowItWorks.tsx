'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function HowItWorks() {
  const [animateConnectors, setAnimateConnectors] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      setTimeout(() => setAnimateConnectors(true), 500);
    }
  }, [inView]);
  
  const steps = [
    {
      number: 1,
      title: 'Listen & Clip',
      description: 'Listen to podcasts and create short clip highlights',
      icon: '🎧',
    },
    {
      number: 2,
      title: 'Earn & Redeem',
      description: 'Earn coins for listening and sharing, redeem for rewards',
      icon: '💰',
    },
    {
      number: 3,
      title: 'Discover & Learn',
      description: 'Find new content based on your interests and engage with it',
      icon: '🔍',
    },
  ];
  
  return (
    <section id="how-it-works" className="py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            How It <span style={{ color: '#7E5FFF' }}>Works</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Turn your podcast time into rewards in just three simple steps
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto relative">
          {/* Connector lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 hidden md:block" />
          
          {/* Animated Connectors */}
          <motion.div 
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#7E5FFF] to-[#00E5C4] hidden md:block"
            initial={{ width: "0%" }}
            animate={{ width: animateConnectors ? "100%" : "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center mb-10 md:mb-0 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#1E1E1E] border-2 border-[#7E5FFF] flex items-center justify-center text-lg mb-4">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#7E5FFF] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
