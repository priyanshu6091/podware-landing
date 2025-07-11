'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Daily Commuter',
      avatar: '👨‍💼',
      quote: 'Podware helped me finish episodes for the first time! The earning system is addictive in the best way.',
    },
    {
      name: 'Sarah Chen',
      role: 'Podcast Enthusiast',
      avatar: '👩‍🎓',
      quote: 'I love how I can clip and share my favorite moments. My friends are joining Podware because of my clips!',
    },
    {
      name: 'Michael Rivera',
      role: 'Knowledge Seeker',
      avatar: '👨‍🔬',
      quote: "The rewards marketplace has amazing deals. I got a free month of my favorite podcast's premium content.",
    },
  ];
  
  return (
    <section id="testimonials" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            What Our <span style={{ color: '#7E5FFF' }}>Users</span> Say
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Join thousands of happy Podware users who transformed their podcast experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(126, 95, 255, 0.1)" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-300 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#7E5FFF]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
