'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Method', path: '#method' },
    { name: 'Community', path: '#community' },
    { name: 'Connect', path: '#connect' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = path.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -12 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-[100] min-h-[90px]
          transition-all duration-500
          ${scrolled || isMenuOpen
            ? 'bg-white/90 backdrop-blur-md py-4 border-b border-[#800020]/10 shadow-sm'
            : 'bg-white py-6 border-b-2 border-[#800020]/20'} 
        `}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LOGO */}
          <Link 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Image
              src="/logo.png"
              alt="Nancy Kyere Logo"
              width={110}
              height={30}
              priority
              className="hover:opacity-80 transition-opacity cursor-pointer"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="group relative text-[10px] uppercase tracking-[0.4em] font-bold text-gray-950 hover:text-[#800020] transition-colors cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#800020] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} className="w-6 h-px bg-gray-950" />
            <motion.span animate={{ opacity: isMenuOpen ? 0 : 1 }} className="w-6 h-px bg-gray-950" />
            <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} className="w-6 h-px bg-gray-950" />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          x: isMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-0 z-[90] bg-white md:hidden"
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : 20
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-2xl font-serif text-gray-950 hover:text-[#800020] transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Header;