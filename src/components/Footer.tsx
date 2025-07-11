'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  // Animation variants
  const linkVariants = {
    hover: { x: 5, color: '#7E5FFF', transition: { duration: 0.2 } }
  };
  
  // Social media icons
  const socialIcons = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
        </svg>
      ),
    },
  ];
  
  // Links
  const links = [
    { name: 'About', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Contact', href: '#' },
  ];
  
  return (
    <footer className="bg-[#0F0F0F] py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#7E5FFF] flex items-center justify-center text-white font-bold">P</div>
              <span className="text-xl font-bold text-white">Podware</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              A gamified podcast platform that makes listening more rewarding with coins, clips, and exclusive rewards.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-[#7E5FFF]"
                  aria-label={`Podware on ${item.name}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Navigate</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a 
                      href={link.href}
                      className="text-gray-400 hover:text-[#7E5FFF]"
                      whileHover="hover"
                      variants={linkVariants}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Gamification</motion.a></li>
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Rewards</motion.a></li>
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Clipping</motion.a></li>
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Discovery</motion.a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Blog</motion.a></li>
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Tutorials</motion.a></li>
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Support</motion.a></li>
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Docs</motion.a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Terms</motion.a></li>
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Privacy</motion.a></li>
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Cookies</motion.a></li>
                <li><motion.a href="#" className="text-gray-400 hover:text-[#7E5FFF]" whileHover="hover" variants={linkVariants}>Licenses</motion.a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Podware Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <motion.a href="#" className="text-gray-500 text-sm hover:text-[#7E5FFF]" whileHover={{ color: '#7E5FFF' }}>
              Terms
            </motion.a>
            <motion.a href="#" className="text-gray-500 text-sm hover:text-[#7E5FFF]" whileHover={{ color: '#7E5FFF' }}>
              Privacy
            </motion.a>
            <motion.a href="#" className="text-gray-500 text-sm hover:text-[#7E5FFF]" whileHover={{ color: '#7E5FFF' }}>
              Cookies
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
