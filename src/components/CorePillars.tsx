'use client';
import { motion } from 'framer-motion';

const pillars = [
  { 
    number: "01",
    title: "The Strategy", 
    subtitle: "Navigate the Vastness",
    desc: "Tech is an ocean, and most people drown in 'tutorial hell.' I help you cut through the noise with a laser-focused roadmap tailored to your specific background—turning a vast field into a clear, walkable path.",
    emphasis: "No more guesswork"
  },
  { 
    number: "02",
    title: "The Execution",
    subtitle: "The Mindset Shift", 
    desc: "Coding is only 20% of the job; thinking like a builder is the other 80%. We move you from a 'student' mindset to a 'problem-solver' identity, focusing on high-impact projects that prove you can deliver value.",
    emphasis: "Identity over information"
  },
  { 
    number: "03",
    title: "The Community",
    subtitle: "Kill the Isolation", 
    desc: "Pivoting in a vacuum is the fastest way to quit. You need a room where your 'stupid' questions are answered and your wins are celebrated. We provide the ecosystem that keeps you accountable when motivation fades.",
    emphasis: "You weren't meant to pivot alone"
  }
];

const CorePillars = () => {
  return (
    <section id="method" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 max-w-4xl"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-maroon mb-6 block">
            The Methodology
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight leading-[1.05] text-gray-950 mb-6">
            Tech is vast. The journey is hard.
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-maroon font-light">
            But you have a system.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 hover:border-maroon/30 hover:shadow-2xl transition-all duration-500">
                
                {/* Background Number - Responsive sizing */}
                <span className="absolute top-4 right-4 text-[120px] sm:text-[140px] font-serif text-gray-100/50 group-hover:text-maroon/5 transition-colors duration-700 pointer-events-none select-none leading-none">
                  {pillar.number}
                </span>

                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-maroon/10 group-hover:bg-maroon transition-colors duration-500 mb-6">
                    <span className="text-maroon group-hover:text-white text-lg font-bold transition-colors duration-500">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-serif tracking-tight text-gray-950 mb-2 leading-tight">
                    {pillar.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-base sm:text-lg text-maroon font-medium italic mb-6">
                    {pillar.subtitle}
                  </p>

                  {/* Decorative Line */}
                  <div className="w-12 h-[2px] bg-maroon/40 mb-6 group-hover:w-full group-hover:bg-maroon transition-all duration-700" />

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed mb-8">
                    {pillar.desc}
                  </p>

                  {/* Emphasis Tag - More prominent */}
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-50 group-hover:bg-maroon/5 rounded-full transition-colors duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-maroon" />
                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-900">
                      {pillar.emphasis}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Narrative Connector - Better integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-200"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-16">
            {/* Quote */}
            <div className="flex-1 max-w-2xl">
              <div className="w-12 h-[2px] bg-maroon mb-6" />
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-gray-500 leading-relaxed">
                "Strategy gets you started. Mindset keeps you moving. Community gets you finished."
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start lg:items-end gap-4">
              <p className="text-sm text-gray-500 font-light">Ready to begin?</p>
              <a
                href="#community"
                className="group relative inline-flex items-center gap-3 bg-gray-950 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 hover:bg-maroon hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Secure your roadmap</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CorePillars;