'use client';

import { motion } from 'framer-motion';
import WaitlistForm from './WaitlistForm';

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 md:p-12 shadow-xl border border-gray-800 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7E5FFF]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00E5C4]/10 rounded-full blur-3xl"></div>
            
            <div className="text-center mb-8 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get early access to Podware
              </h2>
              <p className="text-xl text-gray-400">
                Be first to earn coins, join beta, get rewards.
              </p>
            </div>
            
            <div className="max-w-md mx-auto relative z-10">
              <WaitlistForm />
              <p className="text-sm text-gray-500 mt-3 text-center">
                5,432 people already waiting
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
