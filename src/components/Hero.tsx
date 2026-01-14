'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HEADER_HEIGHT = 96;

const Hero = () => {
  return (
    <section
      key="hero-section"
      className="relative w-full bg-white overflow-hidden"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <div className="relative min-h-[calc(100vh-96px)] w-full flex justify-start items-start">

        {/* DESKTOP IMAGE — lg+ ONLY */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full"
          >
            <Image
              src="/profile-2.png"
              alt="Nancy Kyere"
              fill
              priority
              className="object-contain object-[92%_center] origin-bottom"
            />
          </motion.div>
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="max-w-xl pt-16 sm:pt-20 md:pt-32 lg:pt-60 text-left">

            {/* MOBILE + TABLET IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:hidden mb-12 relative w-full h-72 sm:h-96 md:h-[520px]"
            >
              <Image
                src="/profile-2.png"
                alt="Nancy Kyere"
                fill
                priority
                className="object-contain object-center"
              />
            </motion.div>

            {/* HEADLINE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-serif leading-[1.05] text-gray-950 tracking-tight">
                You don&apos;t need <br />
                another degree.
              </h1>
            </motion.div>

            {/* PLAN LINE */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="italic text-[#800020] font-light block mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-serif"
            >
              You need a plan.
            </motion.span>

            {/* DIVIDER */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1 }}
              className="h-[2px] bg-[#800020]/60 mt-8 mb-10"
            />

            {/* BODY */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-10 max-w-sm"
            >
              I went from Business Administration to Web Developer in three months.
              <span className="block mt-4 text-gray-950 font-medium">
                Now I help people pivot into tech with confidence.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <motion.a
                href="#community"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#community')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                animate={{
                  boxShadow: [
                    '0px 0px 0px rgba(128,0,0,0)',
                    '0px 0px 20px rgba(128,0,0,0.2)',
                    '0px 0px 0px rgba(128,0,0,0)',
                  ],
                }}
                whileHover={{ scale: 1.05, backgroundColor: '#000' }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                  scale: { type: 'spring', stiffness: 400, damping: 10 },
                }}
                className="inline-block bg-[#800020] text-white px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.4em] font-bold shadow-2xl cursor-pointer transition-colors duration-300"
              >
                Join the community
              </motion.a>
            </motion.div>

            {/* MOBILE SCROLL BREATHING ROOM */}
            <div className="h-20 lg:h-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
