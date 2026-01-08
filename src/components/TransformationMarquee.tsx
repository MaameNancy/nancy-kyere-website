'use client';
import { motion } from 'framer-motion';

const TransformationMarquee = () => {
  const phrases = [
    "You don't need another degree",
    "You need a plan",
    "Start today",
    "Lost in your career?",
    "Find clarity",
    "Take action",
    "Pivot successfully",
    "Confused",
    "Confident",
    "Ready",
    "Executing",
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 md:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden border-y border-gray-100">
      {/* High-end gradient fades */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />
      
      <div className="relative flex overflow-hidden">
        {/* The "animate x: -100%" trick makes this loop perfectly on any screen size */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 50, // Slightly slower for better readability of longer phrases
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center shrink-0"
        >
          {phrases.map((phrase, index) => (
            <div key={`first-${index}`} className="flex items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-gray-500 whitespace-nowrap px-8 sm:px-12">
                {phrase}
              </span>
              <span className="text-[#800020]/60 text-2xl sm:text-3xl font-light">→</span>
            </div>
          ))}
        </motion.div>

        {/* Identical Duplicate Set */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center shrink-0"
        >
          {phrases.map((phrase, index) => (
            <div key={`second-${index}`} className="flex items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-gray-500 whitespace-nowrap px-8 sm:px-12">
                {phrase}
              </span>
              <span className="text-[#800020]/60 text-2xl sm:text-3xl font-light">→</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle bottom separator */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
};

export default TransformationMarquee;