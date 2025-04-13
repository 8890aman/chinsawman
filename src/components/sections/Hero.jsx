import React, { useRef, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Hero = () => {
  const videoRef = useRef(null);
  
  // Video autoplay with forward-reverse loop effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Set initial playback rate to slow motion
    video.playbackRate = 0.5;
    
    // Play forward initially
    let isPlayingForward = true;
    
    // Force play the video
    const forcePlay = () => {
      video.play().catch(error => {
        console.error("Video play failed:", error);
        // Try again after a short delay
        setTimeout(forcePlay, 1000);
      });
    };
    
    // Start playing as soon as possible
    forcePlay();
    
    // Play data when loaded
    video.addEventListener('loadeddata', () => {
      video.playbackRate = 0.5;
      forcePlay();
    });
    
    // Track time update to detect when to reverse
    video.addEventListener('timeupdate', () => {
      // If we're near the end and playing forward, reverse the playback
      if (isPlayingForward && video.currentTime >= video.duration * 0.99) {
        video.playbackRate = -0.5;  // Negative for reverse playback
        isPlayingForward = false;
      }
      
      // If we're near the beginning and playing backward, start forward again
      if (!isPlayingForward && video.currentTime <= 0.01) {
        video.playbackRate = 0.5;  // Positive for forward playback
        isPlayingForward = true;
      }
      
      // Safety check to ensure we don't get stuck at the end
      if (video.currentTime >= video.duration * 0.999) {
        video.currentTime = video.duration * 0.99;
      }
      
      // Safety check to ensure we don't get stuck at the beginning
      if (video.currentTime <= 0.001) {
        video.currentTime = 0.01;
      }
    });
    
    // Check every second if video is still playing
    const playCheck = setInterval(() => {
      if (video.paused) {
        forcePlay();
      }
    }, 1000);
    
    // Resume play when tab becomes visible
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        forcePlay();
      }
    });
    
    // Clean up
    return () => {
      clearInterval(playCheck);
      video.removeEventListener('loadeddata', forcePlay);
      video.removeEventListener('timeupdate', () => {});
      document.removeEventListener('visibilitychange', forcePlay);
    };
  }, []);

  // Chain position variants for animation
  const chainVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  // Individual chain animation
  const chainItemVariants = {
    initial: { 
      opacity: 0,
      scale: 0.8,
    },
    animate: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.2
      }
    }
  };
  
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center">
        {/* Manga panel decorations */}
      <div className="absolute left-2 md:left-6 top-0 bottom-0 w-[2px] md:w-[4px] bg-black"></div>
      <div className="absolute right-2 md:right-6 top-0 bottom-0 w-[2px] md:w-[4px] bg-black"></div>
      <div className="absolute top-2 md:top-6 left-0 right-0 h-[2px] md:h-[4px] bg-black"></div>
      <div className="absolute bottom-2 md:bottom-6 left-0 right-0 h-[2px] md:h-[4px] bg-black"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-3 md:px-6 relative z-20">
        {/* Video container with chains */}
        <div className="relative">
          {/* Animated chains layer */}
          <motion.div 
            className="absolute -top-3 md:-top-6 -left-3 md:-left-6 -right-3 md:-right-6 -bottom-3 md:-bottom-6 z-10 pointer-events-none"
            variants={chainVariants}
            initial="initial"
            animate="animate"
          >
            {/* Top left chain */}
            <motion.div 
              className="absolute top-0 left-0 w-16 md:w-24 h-16 md:h-24"
              variants={chainItemVariants}
            >
              <div className="w-full h-full bg-[url('https://api.iconify.design/mdi:chain.svg?color=black')] opacity-80 bg-contain bg-no-repeat transform -rotate-45"></div>
            </motion.div>
            
            {/* Top right chain */}
            <motion.div 
              className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24"
              variants={chainItemVariants}
            >
              <div className="w-full h-full bg-[url('https://api.iconify.design/mdi:chain.svg?color=black')] opacity-80 bg-contain bg-no-repeat transform rotate-45"></div>
            </motion.div>
            
            {/* Bottom left chain */}
            <motion.div 
              className="absolute bottom-0 left-0 w-16 md:w-24 h-16 md:h-24"
              variants={chainItemVariants}
            >
              <div className="w-full h-full bg-[url('https://api.iconify.design/mdi:chain.svg?color=black')] opacity-80 bg-contain bg-no-repeat transform rotate-45"></div>
            </motion.div>
            
            {/* Bottom right chain */}
            <motion.div 
              className="absolute bottom-0 right-0 w-16 md:w-24 h-16 md:h-24"
              variants={chainItemVariants}
            >
              <div className="w-full h-full bg-[url('https://api.iconify.design/mdi:chain.svg?color=black')] opacity-80 bg-contain bg-no-repeat transform -rotate-45"></div>
            </motion.div>
            
            {/* Left side chain */}
            <motion.div 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-14 md:w-20 h-14 md:h-20"
              variants={chainItemVariants}
              custom={1}
            >
              <div className="w-full h-full bg-[url('https://api.iconify.design/mdi:chain.svg?color=black')] opacity-80 bg-contain bg-no-repeat transform"></div>
            </motion.div>
            
            {/* Right side chain */}
            <motion.div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-14 md:w-20 h-14 md:h-20"
              variants={chainItemVariants}
              custom={1}
            >
              <div className="w-full h-full bg-[url('https://api.iconify.design/mdi:chain.svg?color=black')] opacity-80 bg-contain bg-no-repeat transform"></div>
            </motion.div>
            
            {/* Extra chain decoration - floating */}
            <motion.div 
              className="absolute left-1/4 top-0 w-12 md:w-16 h-12 md:h-16 z-20"
              animate={{
                y: [0, 15, 0],
                rotate: [0, 10, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <div className="w-full h-full bg-[url('https://api.iconify.design/mdi:saw-blade.svg?color=black')] opacity-70 bg-contain bg-no-repeat transform"></div>
            </motion.div>
          </motion.div>

          {/* Blood splatter effect */}
          <motion.div 
            className="absolute -top-10 -right-10 w-40 h-40 z-20 pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="w-full h-full bg-[url('https://api.iconify.design/game-icons:blood-splatter.svg?color=red')] opacity-60 bg-contain bg-no-repeat transform rotate-12"></div>
          </motion.div>

          {/* Full-height video container optimized for mobile */}
          <motion.div 
            className="w-full h-[100svh] md:h-screen md:aspect-[21/9] md:max-h-[75vh] relative z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full h-full overflow-hidden border-[2px] md:border-[4px] border-black rounded-lg md:rounded-xl shadow-[inset_10px_10px_20px_rgba(0,0,0,0.2),inset_-5px_-5px_15px_rgba(255,255,255,0.5)] bg-gradient-to-br from-gray-100 to-white">
              {/* Inner neumorphic effect */}
              <div className="absolute inset-2 md:inset-4 z-0 rounded-lg bg-gradient-to-tl from-black/10 to-transparent"></div>
              
              {/* Video with enhanced grayscale filter and dramatic contrast - optimized for mobile */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-contain sm:object-cover grayscale contrast-[110%] brightness-100 rounded-lg mix-blend-multiply filter backdrop-blur-sm"
                style={{
                  WebkitFilter: 'grayscale(100%) contrast(110%) brightness(100%)',
                  filter: 'grayscale(100%) contrast(110%) brightness(100%)',
                  objectPosition: '50% 30%',
                  transform: 'scale(0.95)'
                }}
                muted
                loop
                autoPlay
                playsInline
                poster="/makima-image.jpg"
                preload="auto"
              >
                <source src="/herovideo.mp4" type="video/mp4" />
                <source src="/herovideo.webm" type="video/webm" />
                <source src="/herovideo" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Lighter overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-4 md:p-8">
                {/* Manga-style title with enhanced stroke effect */}
                <motion.h1 
                  className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-2 md:mb-4 relative text-shadow-lg"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="relative z-10 text-white">MAKIMA</span>
                  <span className="absolute -top-1 -left-1 text-black opacity-20 z-0">MAKIMA</span>
                  <span className="absolute -top-2 -left-2 text-red-700 opacity-10 z-0">MAKIMA</span>
                </motion.h1>
                
                <motion.div 
                  className="max-w-md border-l-[2px] md:border-l-[4px] border-white pl-2 md:pl-4 mb-4 md:mb-8 bg-black/30 backdrop-blur-sm rounded-r-lg"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <p className="text-sm md:text-xl text-white font-medium leading-tight md:leading-snug py-2 pr-2">
                    Control Devil. Public Safety Devil Hunter. 
                    Calculating and ruthless, she manipulates those around her 
                    to achieve her ultimate goal.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6"
                >
                  <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 font-bold tracking-wider uppercase text-sm transition-all duration-300 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)]">
                    Discover More
                  </button>
                  
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-white bg-black/50 rounded-none hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-white bg-black/50 rounded-none hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Enhanced top label with manga styling */}
              <div className="absolute top-0 left-0 font-bold text-white bg-black px-3 md:px-6 py-1 md:py-2 clip-path-[polygon(0_0,100%_0,95%_100%,0%_100%)]">
                <span className="text-xs md:text-sm tracking-widest uppercase font-black">Control Devil</span>
              </div>
              
              {/* Manga corner mark */}
              <div className="absolute top-0 right-0 border-t-[15px] md:border-t-[25px] border-r-[15px] md:border-r-[25px] border-black border-l-[15px] md:border-l-[25px] border-l-transparent border-b-[15px] md:border-b-[25px] border-b-transparent"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Japanese characters decorative element */}
        <div className="absolute bottom-10 right-24 transform rotate-12">
          <div className="text-black font-black text-2xl opacity-20">マキマ</div>
        </div>
        
        {/* Minimal horizontal lines for decoration with increased opacity */}
        <motion.div 
          className="absolute bottom-[-20px] left-0 w-full h-[2px] bg-black/40 rounded-none"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-[-30px] left-0 w-[80%] h-[1px] bg-black/30 rounded-none"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        ></motion.div>
      </div>
    </section>
  )
}

export default Hero