'use client';
import { motion } from 'framer-motion';

const StayConnected = () => {
  return (
    <section className="relative w-full bg-white py-20 sm:py-28 overflow-hidden">
      
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #800020 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left: Large Statement (Sticky on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="lg:sticky lg:top-32">
              <div className="w-16 h-[2px] bg-[#800020] mb-8" />
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-gray-950 leading-[1.05] mb-6">
                Let's stay <br />
                <span className="italic text-[#800020] font-light">in touch.</span>
              </h3>
              <p className="text-xl sm:text-2xl text-gray-500 font-light leading-relaxed max-w-xl">
                The pivot doesn't happen in isolation. Let's connect.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Cards Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            
            {/* LinkedIn Card */}
            <motion.a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="group block p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl hover:border-[#800020]/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-[#800020]/10 flex items-center justify-center group-hover:bg-[#800020] transition-colors duration-500">
                  <svg className="w-6 h-6 text-[#800020] group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#800020] group-hover:translate-x-1 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-gray-950 mb-2">Professional Updates</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Follow my journey, see what I'm building, and connect professionally.
              </p>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:hello@nancykyere.com?subject=Inquiry from your website"
              whileHover={{ x: 10 }}
              className="group block p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl hover:border-[#800020]/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-[#800020]/10 flex items-center justify-center group-hover:bg-[#800020] transition-colors duration-500">
                  <svg className="w-6 h-6 text-[#800020] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#800020] group-hover:translate-x-1 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-gray-950 mb-2">Direct Contact</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Got questions? Want to collaborate? Drop me a line directly.
              </p>
            </motion.a>

            {/* WhatsApp Community Card */}
            <motion.a
              href="#community"
              whileHover={{ x: 10 }}
              className="group block p-8 bg-gradient-to-br from-[#800020]/5 to-white border border-[#800020]/20 rounded-2xl hover:border-[#800020]/40 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-[#800020] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <svg className="w-5 h-5 text-[#800020] group-hover:translate-x-1 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-gray-950 mb-2">Join the Circle</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Skip the formalities. Jump straight into the community.
              </p>
            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;