"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "Story" },
  { href: "/contact", label: "Contact" },
];

function MenuButton({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="2.5"
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
    />
  );

  return (
    <button
      onClick={toggle}
      className="md:hidden relative z-[60] w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-white hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 3 6.5 L 21 6.5" },
            open: { d: "M 5 5 L 19 19" },
          }}
          transition={{ duration: 0.25 }}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { opacity: 1, d: "M 3 12 L 21 12" },
            open: { opacity: 0, d: "M 3 12 L 21 12" },
          }}
          transition={{ duration: 0.2 }}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 3 17.5 L 21 17.5" },
            open: { d: "M 5 19 L 19 5" },
          }}
          transition={{ duration: 0.25 }}
        />
      </svg>
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#08101c]/72 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.28)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="relative z-[60] text-2xl md:text-3xl font-playfair tracking-wide text-white hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
            >
              Vesuvio
            </Link>

            <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md px-2 py-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2.5 text-xs uppercase tracking-[0.28em] font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="#reservation"
                className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#0A0F1A] text-sm font-semibold hover:bg-[#caa531] hover:scale-[1.02] transition shadow-[0_10px_30px_rgba(212,175,55,0.18)]"
              >
                Reserve
              </Link>

              <MenuButton
                isOpen={isOpen}
                toggle={() => setIsOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed inset-x-4 top-20 z-50 md:hidden rounded-[28px] border border-white/10 bg-[#09111d]/95 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] overflow-hidden"
            >
              <div className="px-6 pt-6 pb-2">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#D4AF37]">
                  Navigation
                </p>
              </div>

              <div className="px-3 pb-4">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-4 text-xl font-playfair transition-all ${
                          isActive
                            ? "bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20"
                            : "text-white hover:bg-white/[0.04]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="text-sm opacity-60">0{i + 1}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                <Link
                  href="#reservation"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 flex items-center justify-center rounded-2xl bg-[#D4AF37] text-[#0A0F1A] font-semibold py-4 hover:bg-[#caa531] transition"
                >
                  Reserve a Table
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}