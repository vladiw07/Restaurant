'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/story', label: 'Story' },
];

// Animated menu icon (lines ↔ X)
const MenuButton = ({ isOpen, toggle, scrolled }: { isOpen: boolean; toggle: () => void; scrolled: boolean }) => {
  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
    />
  );

  return (
    <button
      onClick={toggle}
      className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
        scrolled ? 'text-[#D4AF37]' : 'text-white'
      }`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <svg width="28" height="28" viewBox="0 0 28 28">
        <Path
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 4 8 L 24 8' },
            open: { d: 'M 6 6 L 22 22' },
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 4 14 L 24 14', opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 4 20 L 24 20' },
            open: { d: 'M 6 22 L 22 6' },
          }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0f1a]/80 backdrop-blur-md py-3 shadow-lg'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo – new name: Vermilion */}
          <Link
            href="/"
            className={`text-2xl md:text-3xl font-playfair font-bold tracking-wide transition-colors hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded ${
              scrolled ? 'text-white' : 'text-white'
            }`}
          >
            Vermilion
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-300 group ${
                    scrolled
                      ? isActive
                        ? 'text-[#D4AF37]'
                        : 'text-gray-200 hover:text-[#D4AF37]'
                      : isActive
                      ? 'text-[#D4AF37]'
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-4 right-4 bottom-0 h-0.5 ${
                      scrolled ? 'bg-[#D4AF37]' : 'bg-white'
                    } transform origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <MenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} scrolled={scrolled} />
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 md:hidden bg-[#0a0f1a]/95 backdrop-blur-md pt-24 px-6 flex flex-col items-center space-y-8"
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    className={`block text-3xl font-playfair transition-colors py-3 border-b-2 ${
                      isActive
                        ? 'text-[#D4AF37] border-[#D4AF37]'
                        : 'text-white border-transparent hover:text-[#D4AF37] hover:border-[#D4AF37]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}