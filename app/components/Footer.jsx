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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050B16] text-white">
      {/* background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.03),transparent_18%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* top CTA strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="py-14 md:py-16"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.055] via-white/[0.03] to-white/[0.02] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:rounded-[32px] sm:px-8 md:px-10 md:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_22%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/6 sm:rounded-[32px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-[10px] uppercase tracking-[0.34em] text-[#D4AF37] sm:text-[11px] md:text-xs">
                  Reservations
                </p>
                <h3 className="font-playfair text-3xl leading-tight text-white md:text-4xl">
                  An Evening Worth Remembering
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-gray-400">
                  Reserve your table for beautifully made pizza, warm service,
                  and a dining experience shaped by atmosphere, craft, and
                  authentic Neapolitan tradition.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/menu"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-7 py-3.5 text-center text-white/85 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  View Menu
                </Link>
                <Link
                  href="#reservation"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-center font-semibold text-[#0A0F1A] shadow-[0_10px_30px_rgba(212,175,55,0.18)] transition duration-300 hover:scale-[1.02] hover:bg-[#caa531]"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* main footer */}
        <div className="grid gap-10 border-t border-white/10 py-14 md:grid-cols-[1.15fr_0.8fr_0.8fr_1fr] md:gap-10 md:py-16 lg:gap-12">
          {/* brand */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.34em] text-[#D4AF37] sm:text-[11px] md:text-xs">
              Vesuvio
            </p>

            <h2 className="font-playfair text-3xl text-white md:text-4xl">
              Vesuvio
            </h2>

            <p className="mt-4 max-w-md leading-relaxed text-gray-400">
              Authentic Neapolitan pizza, seasonal ingredients, and warm
              hospitality served in an intimate setting inspired by the spirit
              of Napoli.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition duration-300 hover:border-[#D4AF37]/50 hover:bg-white/[0.06] hover:text-[#D4AF37]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition duration-300 hover:border-[#D4AF37]/50 hover:bg-white/[0.06] hover:text-[#D4AF37]"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* navigation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h3 className="mb-5 font-playfair text-lg text-white">Navigation</h3>

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
                  className="group flex items-center gap-2 text-gray-400 transition duration-300 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4 text-[#D4AF37] opacity-70 transition duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* hours */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h3 className="mb-5 font-playfair text-lg text-white">
              Opening Hours
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                <div className="leading-relaxed">
                  <p>Tuesday – Sunday</p>
                  <p className="text-white">12:00 – 15:00, 19:00 – 23:00</p>
                </div>
              </div>

              <div className="pl-8">
                <p>Monday</p>
                <p className="text-white">Closed</p>
              </div>
            </div>
          </motion.div>

          {/* contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h3 className="mb-5 font-playfair text-lg text-white">Contact</h3>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                <p className="leading-relaxed">
                  Via Toledo, 123
                  <br />
                  80134 Napoli NA, Italy
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                <a
                  href="tel:+390811234567"
                  className="transition hover:text-white"
                >
                  +39 081 123 4567
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#D4AF37]" />
                <a
                  href="mailto:info@vesuvio.it"
                  className="break-all transition hover:text-white"
                >
                  info@vesuvio.it
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Vesuvio. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}