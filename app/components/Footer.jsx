"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050B16] text-white overflow-hidden">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_40%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* top CTA strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="py-14 md:py-16"
        >
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-md px-6 py-8 md:px-10 md:py-10 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-[#D4AF37] mb-3">
                  Reservations
                </p>
                <h3 className="text-3xl md:text-4xl font-playfair leading-tight">
                  An Evening Worth Remembering
                </h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Reserve your table for seasonal tasting menus, impeccable wine
                  pairings, and a quietly luxurious dining experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/menu"
                  className="px-7 py-3.5 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.07] transition text-center"
                >
                  View Menu
                </Link>
                <Link
                  href="#reservation"
                  className="px-7 py-3.5 rounded-full bg-[#D4AF37] text-[#0A0F1A] font-semibold hover:bg-[#caa531] transition text-center shadow-[0_10px_30px_rgba(212,175,55,0.18)]"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* main footer */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-10 md:gap-12 py-14 md:py-16 border-t border-white/10">
          {/* brand */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-[#D4AF37] mb-3">
              Vesuvio
            </p>
            <h2 className="text-3xl md:text-4xl font-playfair">Vesuvio</h2>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-md">
              Modern European dining shaped by seasonality, precision, and warm
              hospitality in an intimate, elegant setting.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* navigation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-lg font-playfair mb-5">Navigation</h3>
            <div className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "Private Dining", href: "/private-dining" },
                { label: "Reservations", href: "#reservation" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <ChevronRight className="w-4 h-4 text-[#D4AF37] opacity-70 group-hover:translate-x-0.5 transition" />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* hours */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-lg font-playfair mb-5">Opening Hours</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div className="leading-relaxed">
                  <p>Monday – Saturday</p>
                  <p className="text-white">5:00 PM – 11:00 PM</p>
                </div>
              </div>
              <div className="pl-8">
                <p>Sunday</p>
                <p className="text-white">Closed</p>
              </div>
            </div>
          </motion.div>

          {/* contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-lg font-playfair mb-5">Contact</h3>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  Via Toledo, 123

                  <br />
                  80134 Napoli NA, Italy
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                
                  (212) 555-0199
              
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:reservations@vesuvio.nyc"
                  className="hover:text-white transition break-all"
                >
                  reservations@vesuvio.nyc
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Vesuvio. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}