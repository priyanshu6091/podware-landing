'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import WaitlistForm from './WaitlistForm';
import { useEffect, useState } from 'react';

export default function Hero() {
  // Sample podcast data for the UI mockup
  const podcasts = [
    { 
      title: "The Growth Mindset", 
      host: "Alex Johnson", 
      duration: "32:15",
      coins: 45,
      progress: 75,
      image: "https://images.unsplash.com/photo-1579273168832-1c6639363dad?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    { 
      title: "Future of Tech", 
      host: "Sarah Chen", 
      duration: "48:22",
      coins: 60,
      progress: 30,
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    { 
      title: "Daily Entrepreneur", 
      host: "Mike Rivera", 
      duration: "22:05",
      coins: 25,
      progress: 100,
      image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];

  // Animation state for the coin counter
  const [coinCount, setCoinCount] = useState(120);
  const [showReward, setShowReward] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCoinCount(prev => prev + 1);
    }, 3000);
    
    // Show reward notification after a delay
    const rewardTimer = setTimeout(() => {
      setShowReward(true);
      setTimeout(() => setShowReward(false), 4000);
    }, 4000);

    // Show social notification after a delay
    const notifTimer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 8000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(rewardTimer);
      clearTimeout(notifTimer);
    };
  }, []);

  return (
    <section id="hero" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Hero Text Content - Slides in from left */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Listen.</span>{' '}
              <span className="text-[#7E5FFF]">Learn.</span>{' '}
              <span className="text-[#00E5C4]">Earn.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0">
              Podware makes podcasting addictive—with coins, clips, and rewards.
            </p>
            <div className="max-w-md mx-auto lg:mx-0">
              <WaitlistForm />
              <p className="text-sm text-gray-500 mt-3">5,432 people already joined</p>
            </div>
          </motion.div>

          {/* Enhanced Mobile App UI - Minimalist Version */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Phone frame with subtle glow */}
            <div className="relative w-full aspect-[9/19] max-w-[280px] mx-auto">
              {/* Phone glow effect - more subtle */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#7E5FFF]/20 to-[#00E5C4]/20 rounded-[32px] blur-xl opacity-50" />
              
              {/* Phone frame */}
              <div className="relative z-10 w-full h-full rounded-[24px] overflow-hidden border-8 border-[#232323] shadow-2xl bg-[#121212]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-[#232323] rounded-b-xl z-30"></div>
                
                {/* App UI */}
                <div className="relative h-full overflow-hidden">
                  {/* Status bar - simplified */}
                  <div className="bg-[#121212] h-8 flex items-center justify-between px-4 z-20">
                    <div className="text-xs text-white/70">9:41 AM</div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-3 h-3 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z"></path>
                      </svg>
                      <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16,17H8V6H16V17M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  {/* App header - minimalist */}
                  <div className="bg-[#121212] pt-6 pb-4 px-5">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#7E5FFF] flex items-center justify-center text-white font-bold text-sm">P</div>
                        <span className="text-white font-medium ml-2">Podware</span>
                      </div>
                      {/* Clean coin display */}
                      <motion.div 
                        className="flex items-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
                      >
                        <svg className="w-4 h-4 text-[#F9C846] mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5Z"></path>
                        </svg>
                        <motion.span 
                          className="text-white text-sm font-medium"
                          key={coinCount}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {coinCount}
                        </motion.span>
                      </motion.div>
                    </div>
                    
                    {/* Welcome message */}
                    <h1 className="text-white text-xl font-medium mb-1">Good morning, Taylor</h1>
                    <p className="text-gray-400 text-sm mb-6">What would you like to listen to today?</p>
                    
                    {/* Simple search box */}
                    <div className="relative mb-2">
                      <input
                        type="text"
                        placeholder="Search podcasts..."
                        className="w-full bg-[#1A1A1A] text-white text-sm rounded-full pl-10 pr-4 py-2.5 border-none focus:outline-none focus:ring-1 focus:ring-[#7E5FFF]/50"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Clean tab navigation */}
                  <div className="flex px-5 pb-2 border-b border-[#1A1A1A]">
                    <div className="mr-5 text-[#7E5FFF] text-sm font-medium border-b-2 border-[#7E5FFF] pb-2">For You</div>
                    <div className="mr-5 text-gray-400 text-sm font-medium">Discover</div>
                    <div className="mr-5 text-gray-400 text-sm font-medium">Following</div>
                  </div>
                  
                  {/* Clean podcast feed */}
                  <div className="bg-[#121212] flex-1 p-5 overflow-y-auto space-y-4">
                    {/* Weekly goal widget - simplified */}
                    <div className="mb-5 bg-gradient-to-r from-[#1A1A1A] to-[#232323] rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">Weekly goal</span>
                        <span className="text-[#00E5C4] text-sm">64%</span>
                      </div>
                      <div className="w-full bg-[#2A2A2A] h-1.5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-[#7E5FFF] to-[#00E5C4]"
                          initial={{ width: 0 }}
                          animate={{ width: "64%" }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                        />
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-gray-400 text-xs">3h 12m listened</span>
                        <span className="text-gray-400 text-xs">5h goal</span>
                      </div>
                    </div>
                    
                    {/* Section title */}
                    <h2 className="text-white text-base font-medium mb-2">Continue Listening</h2>
                    
                    {/* Podcast items - cleaned up */}
                    {podcasts.map((podcast, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center bg-[#1A1A1A] rounded-xl p-3 hover:bg-[#1E1E1E] transition-colors duration-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index + 0.3 }}
                        whileHover={{ y: -2 }}
                      >
                        {/* Cover art */}
                        <div className="w-12 h-12 bg-[#2A2A2A] rounded-lg flex-shrink-0 overflow-hidden mr-3">
                          <img src={podcast.image} alt={podcast.title} className="w-full h-full object-cover" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white text-sm font-medium truncate">{podcast.title}</h3>
                          <p className="text-gray-400 text-xs">{podcast.host}</p>
                          
                          {/* Progress bar - minimal */}
                          <div className="w-full bg-[#2A2A2A] h-1 rounded-full overflow-hidden mt-2">
                            <motion.div 
                              className={`h-full ${podcast.progress === 100 ? 'bg-[#00E5C4]' : 'bg-[#7E5FFF]'}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${podcast.progress}%` }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                            />
                          </div>
                        </div>
                        
                        {/* Right side with duration and coin */}
                        <div className="flex flex-col items-end ml-3">
                          <div className="flex items-center mb-1">
                            <svg className="w-3 h-3 text-[#F9C846] mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5Z"></path>
                            </svg>
                            <span className="text-white text-xs">+{podcast.coins}</span>
                          </div>
                          <span className="text-gray-500 text-xs">{podcast.duration}</span>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Clips section - simplified */}
                    <h2 className="text-white text-base font-medium pt-2 mb-2">Trending Clips</h2>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2].map((item) => (
                        <motion.div 
                          key={item} 
                          className="aspect-square bg-[#1A1A1A] rounded-lg relative overflow-hidden"
                          whileHover={{ scale: 1.02 }}
                        >
                          <img 
                            src={`https://picsum.photos/300?random=${item}`} 
                            alt="Clip thumbnail" 
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                            <span className="text-white text-xs font-medium">0:{15 + item * 10}</span>
                            <div className="flex items-center">
                              <svg className="w-3 h-3 text-[#F9C846] mr-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5Z"></path>
                              </svg>
                              <span className="text-white text-xs">+{item * 5}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom navigation bar - simplified */}
                  <div className="bg-[#1A1A1A] h-12 flex items-center justify-around px-2">
                    <div className="text-[#7E5FFF]">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
                      </svg>
                    </div>
                    <div className="text-gray-500">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,21V3H3V21H21M5,5H19V19H5V5M11.5,7A1.5,1.5 0 0,0 10,8.5A1.5,1.5 0 0,0 11.5,10A1.5,1.5 0 0,0 13,8.5A1.5,1.5 0 0,0 11.5,7M6.5,14.5L8,13L10,15L12.5,12.5L15,15H6.5V14.5Z"></path>
                      </svg>
                    </div>
                    <div className="text-gray-500">
                      <div className="bg-gradient-to-r from-[#7E5FFF] to-[#00E5C4] rounded-full p-3">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="text-gray-500">
                      <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Notifications */}
            <AnimatePresence>
              {showReward && (
                <motion.div
                  className="absolute z-20 top-1/4 right-0 transform translate-x-1/4 bg-[#7E5FFF] rounded-lg p-2 shadow-lg w-[160px]"
                  initial={{ opacity: 0, y: -20, x: "25%" }}
                  animate={{ opacity: 1, y: 0, x: "25%" }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12M22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-xs font-medium">Daily Bonus!</p>
                      <div className="flex items-center">
                        <svg className="w-2.5 h-2.5 text-[#FFD700] mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5Z"></path>
                        </svg>
                        <span className="text-white text-xs">+25 coins</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {showNotification && (
                <motion.div
                  className="absolute z-20 top-1/3 left-1/2 transform -translate-x-1/2 bg-[#2A2A2A] rounded-lg p-2 shadow-xl border border-[#3A3A3A] w-[200px]"
                  initial={{ opacity: 0, y: -30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2 border border-[#7E5FFF]">
                      <img 
                        src="https://i.pravatar.cc/100?img=28" 
                        alt="Friend avatar" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <p className="text-white text-xs font-medium">Jake</p>
                        <p className="text-gray-400 text-xs ml-1">shared a clip with you</p>
                      </div>
                      <p className="text-[10px] text-[#7E5FFF]">Startup Funding Tips • 45s</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#7E5FFF]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#00E5C4]/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
