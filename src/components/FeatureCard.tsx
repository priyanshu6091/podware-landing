'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div 
      className="card group hover:shadow-lg hover:shadow-purple-500/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay * 0.2,
        ease: "easeOut"
      }}
    >
      <div className="flex flex-col space-y-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2A2A2A] text-[#7E5FFF] text-2xl mb-4 group-hover:bg-[#7E5FFF]/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-[#7E5FFF] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
