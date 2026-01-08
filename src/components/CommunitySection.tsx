'use client';
import { motion } from 'framer-motion';

const CommunitySection = () => {
  // Curated professional Black avatars from Unsplash
  const communityMembers = [
    { url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200', alt: 'Tech professional' },
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200', alt: 'Software engineer' },
    { url: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=200&h=200', alt: 'Technical lead' },
    { url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=200&h=200', alt: 'Product manager' },
  ];

  return (
    <section id="community" className="relative py-16 sm:py-20 bg-gradient-to-b from-gray-50 via-[#800020]/8 to-gray-50 overflow-hidden border-y border-gray-100">
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#800020]/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
        
        {/* Animated Avatar Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center -space-x-4 mb-10"
        >
          {communityMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-xl cursor-pointer overflow-hidden bg-gray-200"
            >
              <img 
                src={member.url} 
                alt={member.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          {/* Plus Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1, y: -5, rotate: 90 }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#800020] to-red-400 border-4 border-white shadow-xl flex items-center justify-center cursor-pointer"
          >
            <span className="text-white text-2xl font-bold">+</span>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-gray-950 mb-6">
            You don't have to <br />
            <span className="italic text-[#800020]">pivot alone.</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Join a space where people who look like you and are <span className="font-medium text-gray-900">actually making the move</span> share wins, ask real questions, and hold each other accountable.
        </motion.p>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a
            href="https://chat.whatsapp.com/YOUR_GROUP_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 bg-[#800020] text-white px-12 py-5 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 hover:bg-gray-950 shadow-2xl hover:shadow-[#800020]/20"
          >
            <span>Join our circle</span>
            <motion.svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Subtle trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm text-gray-400 italic mt-8"
        >
          Join a circle of high-level action takers.
        </motion.p>
      </div>
    </section>
  );
};

export default CommunitySection;