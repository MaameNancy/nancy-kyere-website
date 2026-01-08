'use client';
import { motion } from 'framer-motion';

const reasons = [
  {
    number: "01",
    title: "I'm Living Proof",
    description: "Business Admin to Web Developer in 90 days through a virtual intensive bootcamp. No CS degree. No traditional path. Just a strategic decision and relentless execution. If I can do it, you can too."
  },
  {
    number: "02",
    title: "I Share the Real Path",
    description: "Not theories from someone who never made the jump. I share exactly what worked, what failed, and what I wish someone told me when I started."
  },
  {
    number: "03",
    title: "I'm Building With You",
    description: "I'm not a guru on a mountain. I'm still in the trenches, still learning, still connecting. We're navigating this industry together."
  }
];

const WhyListenSection = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50/30 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#800020] mb-6 block">
            Why Listen to Me?
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-gray-950 max-w-3xl">
            I'm not your teacher. <br />
            <span className="italic text-[#800020] font-light">I'm your proof of concept.</span>
          </h2>
        </motion.div>

        {/* Three Reasons - Clean Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative">
                {/* Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#800020]/10 flex items-center justify-center group-hover:bg-[#800020] transition-colors duration-500">
                    <span className="text-[#800020] group-hover:text-white text-sm font-bold transition-colors duration-500">
                      {reason.number}
                    </span>
                  </div>
                  <div className="h-[1px] flex-1 bg-gray-200 group-hover:bg-[#800020]/40 transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-serif text-gray-950 mb-4 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 pt-12 border-t border-gray-200"
        >
          <div className="max-w-3xl">
            <p className="text-xl sm:text-2xl font-normal text-gray-800 leading-relaxed mb-6">
              I'm not here to teach you to code. I'm here to show you that <span className="font-semibold text-gray-900">the pivot is possible</span>—and to connect you with others who are walking the same path.
            </p>
            <p className="text-base sm:text-lg text-gray-600 font-normal italic">
              Think of me as your fellow traveler who's a few steps ahead, turning around to show you the map.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyListenSection;