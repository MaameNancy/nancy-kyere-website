'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const IntroOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while intro is playing
    document.body.style.overflow = 'hidden';
    
    // Reduced to 3 seconds for better user experience
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const name = "Nancy Kyere";
  const sentence = "I help students, professionals, and entrepreneurs find their way into tech.";

  // Animation variants for the letters
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 5,
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.03, // Faster typing (was 0.04)
        delayChildren: 0.03 * i 
      },
    }),
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center px-6 sm:px-8 text-center"
        >
          <div className="max-w-4xl">
            {/* Animated Name */}
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tighter text-[#800020] mb-4 leading-none"
            >
              {name.split("").map((letter, index) => (
                <motion.span key={index} variants={child}>
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="h-[2px] bg-[#800020]/40 mx-auto mb-8"
            />
            
            {/* Animated Purpose Sentence */}
            <motion.p
              variants={container}
              custom={12} // Reduced delay (was 15)
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg md:text-xl font-sans font-light text-gray-600 tracking-wide leading-relaxed max-w-2xl mx-auto"
            >
              {sentence.split("").map((letter, index) => (
                <motion.span key={index} variants={child}>
                  {letter}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;