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

const comparison = [
  { trait: "Problem Solving", nonTech: "Crisis mgmt / Classroom behavior", tech: "Debugging & Architecture" },
  { trait: "Systems Thinking", nonTech: "Logistics routing / Lesson planning", tech: "Logic Flow & Integration" },
  { trait: "Documentation", nonTech: "Clinical notes / Reporting / Handovers", tech: "Technical Docs & Clean Code" },
  { trait: "Data Literacy", nonTech: "Inventory / Student grades / Budgets", tech: "Data Structures & Schemas" },
];

const steps = [
  { day: "Day 01", title: "The Mindset Audit", status: "Identity Shift" },
  { day: "Day 02", title: "Stack Selection", status: "Strategic Focus" },
  { day: "Day 03", title: "The 'Dirty' Build", status: "Active Execution" },
  { day: "Day 04", title: "Proof of Competence", status: "Visibility" },
  { day: "Day 05", title: "The Community Bridge", status: "Market Entry" }
];

const CorePillars = () => {
  return (
    <section id="method" className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20 max-w-4xl"
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
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20 sm:mb-32">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 hover:border-maroon/30 hover:shadow-2xl transition-all duration-500">
                <span className="absolute top-4 right-4 text-[120px] sm:text-[140px] font-serif text-gray-100/50 group-hover:text-maroon/5 transition-colors duration-700 pointer-events-none select-none leading-none">
                  {pillar.number}
                </span>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-maroon/10 group-hover:bg-maroon transition-colors duration-500 mb-6">
                    <span className="text-maroon group-hover:text-white text-lg font-bold">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif tracking-tight text-gray-950 mb-2 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-base sm:text-lg text-maroon font-medium italic mb-6">
                    {pillar.subtitle}
                  </p>
                  <div className="w-12 h-[2px] bg-maroon/40 mb-6 group-hover:w-full group-hover:bg-maroon transition-all duration-700" />
                  <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed mb-8">
                    {pillar.desc}
                  </p>
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-50 group-hover:bg-maroon/5 rounded-full">
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

        {/* ROADMAP SECTION */}
        <div id="roadmap" className="pt-20 sm:pt-32 border-t border-gray-100 scroll-mt-20">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-950 mb-6 px-4">
              You aren't starting <span className="italic text-maroon font-light">from zero.</span>
            </h2>
            
            <div className="overflow-x-auto max-w-4xl mx-auto mb-16 sm:mb-24 bg-gray-50/50 rounded-3xl p-4 sm:p-8">
                <table className="w-full text-left min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="p-4 text-[10px] uppercase tracking-widest text-gray-400 font-bold">Transferable Trait</th>
                      <th className="p-4 text-[10px] uppercase tracking-widest text-gray-400 font-bold">Your Current Sector</th>
                      <th className="p-4 text-[10px] uppercase tracking-widest text-maroon font-bold">The Tech Pivot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0 group hover:bg-white transition-colors">
                        <td className="p-4 font-serif text-lg text-gray-950">{item.trait}</td>
                        <td className="p-4 text-gray-500 text-sm italic font-light leading-relaxed">{item.nonTech}</td>
                        <td className="p-4 text-gray-900 font-medium text-sm">
                          <span className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-maroon rounded-full hidden sm:block" />
                            {item.tech}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-maroon mb-2 block">The Roadmap</span>
                    <h3 className="text-2xl sm:text-3xl font-serif">5 Days to Your Pivot</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3 sm:gap-4 px-2">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 sm:gap-6 p-5 sm:p-7 bg-white rounded-2xl shadow-sm border border-gray-100 text-left"
                    >
                      <span className="text-[10px] sm:text-xs font-bold text-maroon tracking-widest border-r border-gray-100 pr-4">
                        {step.day}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg flex-grow text-gray-900">
                        {step.title}
                      </h4>
                      <span className="hidden sm:block text-[9px] uppercase tracking-widest text-gray-400 font-bold">
                        {step.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
            </div>

            <div className="mt-16 sm:mt-24 pb-8">
              <a
                href="https://chat.whatsapp.com/Fmian7xrcypEL1avo23qiI"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 bg-gray-950 text-white px-10 sm:px-14 py-4 sm:py-6 rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 hover:bg-maroon hover:shadow-2xl hover:scale-105"
              >
                <span>Join our circle</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CorePillars;