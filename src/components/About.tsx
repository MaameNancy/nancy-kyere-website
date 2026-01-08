'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section 
      id="about" 
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-[#800020]/5 to-white"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -right-20 w-[500px] h-[500px] bg-[#800020]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#800020] mb-6 block">
            The Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight leading-[1.05] text-gray-950 max-w-4xl mx-auto">
            I&apos;ve been exactly where you are.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Image Stack */}
          <div className="space-y-6">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[500px] sm:h-[600px] w-full overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/nancy-kyere-profile.jpg"
                  alt="Nancy Kyere"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500" />
              </motion.div>

              {/* Floating Badge - Appears on Hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <p className="text-xs font-bold text-[#800020] uppercase tracking-wider">
                  Business → Tech
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#800020]/10 rounded-full blur-2xl"
              />
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              className="group bg-white p-8 rounded-2xl border-l-4 border-[#800020] shadow-lg hover:border-l-8 transition-all duration-300 cursor-pointer"
            >
              <motion.p 
                className="text-xl font-serif italic text-gray-700 mb-4 leading-relaxed group-hover:text-gray-900 transition-colors duration-300"
              >
                "The pivot wasn't about starting over—it was about building forward."
              </motion.p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <motion.div 
                    whileHover={{ scale: 1.15, zIndex: 10, y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden cursor-pointer"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" 
                      alt="Professional 1"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.15, zIndex: 10, y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden cursor-pointer"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100" 
                      alt="Professional 2"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.15, zIndex: 10, y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden cursor-pointer"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
                      alt="Professional 3"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <motion.p 
                  className="text-xs text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300"
                >
                  Trusted by <span className="text-gray-950 font-bold group-hover:text-[#800020] transition-colors duration-300">7,000+</span> professionals on LinkedIn
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Right: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-12 space-y-8"
          >
            {/* Timeline */}
            <div className="space-y-6">
              
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-[#800020] flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  >
                    01
                  </motion.div>
                  <div className="w-px h-full bg-gradient-to-b from-[#800020] to-transparent mt-4" />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-serif text-gray-950 mb-3 group-hover:text-[#800020] transition-colors duration-300">The Realization</h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Graduated with a Business Administration degree and landed a corporate role, only to realize <span className="font-medium text-gray-900">the traditional path wasn't moving fast enough.</span>
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-[#800020] flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  >
                    02
                  </motion.div>
                  <div className="w-px h-full bg-gradient-to-b from-[#800020] to-transparent mt-4" />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-serif text-gray-950 mb-3 group-hover:text-[#800020] transition-colors duration-300">The Pivot</h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Took a calculated risk. In 90 days through a virtual intensive bootcamp, I pivoted to Web Development—<span className="font-medium text-gray-900">focused learning, real projects, strategic execution.</span>
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-[#800020] flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  >
                    03
                  </motion.div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-serif text-gray-950 mb-3 group-hover:text-[#800020] transition-colors duration-300">The Mission</h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Now I bridge business strategy and technical execution. I'm your <span className="font-medium text-gray-900 italic">proof of concept</span>—showing that the pivot is possible without another degree.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <a
                href="#community"
                className="inline-flex items-center gap-3 bg-[#800020] text-white px-8 py-4 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-gray-950 transition-all duration-300 shadow-lg"
              >
                <span>See how we can help</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;