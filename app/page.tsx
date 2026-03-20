"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
  Trophy,
  Award,
  BadgeCheck,
} from "lucide-react";

import heroImage from "./assets/images/diavola.png";
import signatureDish1 from "./assets/images/signaturedish1.avif";
import signatureDish2 from "./assets/images/signaturedish2.png";
import signatureDish3 from "./assets/images/signaturedish3.jpg";
import signatureDish4 from "./assets/images/signaturedish4.jpg";
import signatureDish5 from "./assets/images/signaturedish5.jpg";
import signatureDish6 from "./assets/images/signaturedish6.jpg";

import chefImage from "./assets/images/chef.jpg";

import privateDiningImg from "./assets/images/private-dining.png";




const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const awards = [
  {
    icon: Trophy,
    year: "2024",
    name: "Top 50 Pizzerias",
    description:
      "Recognized for authentic Neapolitan technique, ingredient quality, and consistency.",
    source: "Pizza Guide",
  },
  {
    icon: Award,
    year: "2023",
    name: "3 Slices Distinction",
    description:
      "Praised for dough fermentation, wood-fired balance, and signature flavor.",
    source: "Gambero Rosso",
  },
  {
    icon: Star,
    year: "2024",
    name: "Travelers’ Choice",
    description:
      "Highly rated by guests for atmosphere, service, and overall dining experience.",
    source: "Tripadvisor",
  },
  {
    icon: BadgeCheck,
    year: "2024",
    name: "Best Local Pizza",
    description:
      "Selected as one of the city’s standout artisan pizzerias by local critics.",
    source: "Local Weekly",
  },
];

const dishes = [
  {
    name: "Margherita DOC",
    desc: "San Marzano tomatoes, fior di latte, fresh basil, extra virgin olive oil.",
    price: "€16",
    image: signatureDish1,
  },
  {
    name: "Diavola",
    desc: "Spicy salami, tomato sauce, mozzarella, chili oil, oregano.",
    price: "€18",
    image: signatureDish2,
  },
  {
    name: "Quattro Formaggi",
    desc: "Mozzarella, gorgonzola, parmesan, fontina, and a touch of honey.",
    price: "€19",
    image: signatureDish3,
  },
  {
    name: "Prosciutto e Funghi",
    desc: "Ham, mushrooms, mozzarella, tomato sauce, finished with fresh arugula.",
    price: "€20",
    image: signatureDish4,
  },
  {
    name: "Tiramisu",
    desc: "Classic Italian dessert with mascarpone cream and espresso-soaked sponge.",
    price: "€8",
    image: signatureDish5,
  },
  {
    name: "Bruschetta",
    desc: "Grilled country bread, vine-ripened tomatoes, garlic, basil, olive oil.",
    price: "€9",
    image: signatureDish6,
  },
];

const philosophy = [
  {
    title: "48-Hour Fermented Dough",
    desc: "We slow-ferment our dough for a light, airy crust with deeper flavor, better texture, and authentic character.",
  },
  {
    title: "Imported Italian Ingredients",
    desc: "San Marzano tomatoes, fior di latte, and extra virgin olive oil sourced with care from Italy.",
  },
  {
    title: "Wood-Fired Perfection",
    desc: "Our oak-fired oven reaches 900°F, cooking each pizza in 90 seconds for that signature Neapolitan finish.",
  },
];

const testimonials = [
  {
    quote:
      "The best Neapolitan pizza outside of Naples. The crust is absolute perfection.",
    author: "Marco R., Food Blogger",
    rating: 5,
  },
  {
    quote:
      "Incredible ingredients and a cozy atmosphere. Their Diavola has the perfect kick.",
    author: "Giulia M., Regular Guest",
    rating: 5,
  },
  {
    quote:
      "We drive an hour just for their Margherita. Completely worth it every single time.",
    author: "David & Sarah, Loyal Customers",
    rating: 5,
  },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
    >
      {eyebrow && (
        <p className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.32em] sm:tracking-[0.38em] text-[#D4AF37] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-playfair text-white leading-tight">
        {title}
      </h2>
      <div className="mt-4 sm:mt-5 h-px w-20 sm:w-24 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      {subtitle && (
        <p className="mt-4 sm:mt-5 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

function SectionShell({
  children,
  className = "",
  glow = "gold",
  divider = false,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: "gold" | "blue" | "neutral";
  divider?: boolean;
}) {
  const glowClass =
    glow === "gold"
      ? "bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.06),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.03),transparent_24%)]"
      : glow === "blue"
      ? "bg-[radial-gradient(circle_at_78%_22%,rgba(82,146,255,0.08),transparent_26%),radial-gradient(circle_at_18%_70%,rgba(255,255,255,0.025),transparent_22%)]"
      : "bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.03),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.04),transparent_25%)]";

  return (
    <section
      className={`relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden ${className}`}
    >
      <div className={`absolute inset-0 ${glowClass} pointer-events-none`} />
      <div className="absolute inset-x-0 top-0 h-24 sm:h-28 md:h-32 bg-gradient-to-b from-[#050B16]/85 to-transparent pointer-events-none" />
      {divider && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      )}
      <div className="relative max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050B16] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.10),_transparent_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_8%,_rgba(255,255,255,0.04),_transparent_18%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.025),transparent_14%,transparent_86%,rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 opacity-[0.22] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#050B16]" />
        <div className="absolute inset-x-0 top-0 h-32 sm:h-40 md:h-48 bg-gradient-to-b from-[#020814] via-[#050B16]/95 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(212,175,55,0.09),transparent_30%),radial-gradient(circle_at_78%_24%,rgba(255,255,255,0.04),transparent_24%)] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050B16] z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 md:h-56 bg-gradient-to-b from-transparent via-[#050B16]/80 to-[#050B16] z-[1]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 md:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-2xl text-center lg:text-left order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-white/[0.03] backdrop-blur-sm text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[#D4AF37]">
                <span>Est. 2020</span>
                <span className="opacity-40">•</span>
                <span>Artisanal Pizzeria</span>
              </div>

              <h1 className="mt-5 sm:mt-6 text-5xl xs:text-6xl sm:text-6xl md:text-7xl xl:text-8xl font-playfair font-semibold leading-[0.92] tracking-tight text-white">
                Authentic
                <br />
                Neapolitan Pizza
              </h1>

              <p className="mt-3 text-lg sm:text-xl text-[#D4AF37] font-medium tracking-[0.06em]">
                Welcome to Pizzeria Vesuvio
              </p>

              <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Wood-fired pizzas crafted with passion, San Marzano tomatoes,
                fresh mozzarella, and the finest Italian ingredients.
              </p>

              <div className="mt-5 text-sm sm:text-base text-gray-400 max-w-xl mx-auto lg:mx-0">
                Open daily · 12:00–23:00 · Family-friendly dining
              </div>

              <div className="mt-7 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-300">
                {["Wood-Fired Oven", "Fresh Ingredients", "Naples Inspired"].map(
                  (item) => (
                    <div
                      key={item}
                      className="px-3.5 sm:px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto lg:mx-0">
                <Link
                  href="#reservation"
                  className="px-6 sm:px-8 py-3.5 rounded-full bg-[#D4AF37] text-[#0A0F1A] font-semibold hover:scale-[1.03] hover:bg-[#c9a532] transition duration-300 text-center shadow-[0_10px_30px_rgba(212,175,55,0.18)]"
                >
                  Reserve a Table
                </Link>
                <Link
                  href="/menu"
                  className="px-6 sm:px-8 py-3.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-sm text-white font-semibold hover:bg-white/[0.07] hover:scale-[1.03] transition duration-300 text-center"
                >
                  View Menu
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative order-2"
            >
              <div className="absolute -inset-4 sm:-inset-6 bg-[radial-gradient(circle,_rgba(212,175,55,0.14),_transparent_60%)] blur-2xl" />

              <div className="relative rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={heroImage}
                    alt="Pizzeria Vesuvio signature Diavola pizza"
                    fill
                    priority
                    className="object-cover scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B16]/90 via-[#050B16]/15 to-transparent" />

                  <div className="absolute left-3 right-3 bottom-3 sm:left-5 sm:right-5 sm:bottom-5">
                    <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md p-4 sm:p-5 max-w-[320px] shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[#D4AF37] mb-2">
                        Chef&apos;s Pick
                      </p>
                      <h3 className="text-xl sm:text-2xl font-playfair text-white">
                        Diavola
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                        Spicy salami, chili oil, mozzarella, and San Marzano
                        tomato sauce.
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[#D4AF37] font-semibold text-base sm:text-lg">
                          €18
                        </span>
                        <span className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-[0.2em]">
                          Wood-Fired
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-[#D4AF37] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* AWARDS */}
      <SectionShell
        glow="gold"
        className="-mt-12 sm:-mt-16 md:-mt-20 pt-24 sm:pt-28 md:pt-32"
      >
        <SectionHeading
          eyebrow="Distinctions"
          title="Awards & Recognition"
          subtitle="Recognized by critics, trusted by guests, and crafted with a passion for authentic Neapolitan pizza."
        />

        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37] font-semibold">4.8★</span>
            <span>Average guest rating</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37] font-semibold">12k+</span>
            <span>Guests served</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37] font-semibold">2024</span>
            <span>Most recent distinction</span>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {awards.map((award) => {
            const Icon = award.icon;

            return (
              <motion.div
                key={award.name}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 sm:p-6 text-left shadow-[0_18px_50px_rgba(0,0,0,0.25)] hover:border-[#D4AF37]/30 hover:bg-white/[0.055] transition duration-300"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_42%)] opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 shadow-[0_8px_20px_rgba(212,175,55,0.08)] transition duration-300 group-hover:scale-105 group-hover:border-[#D4AF37]/35 group-hover:bg-[#D4AF37]/12">
                    <Icon
                      className="h-5 w-5 text-[#D4AF37] transition duration-300 group-hover:scale-110"
                      strokeWidth={1.9}
                    />
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37]/85 transition duration-300 group-hover:text-[#D4AF37]">
                    {award.year}
                  </span>
                </div>

                <div className="relative mt-5">
                  <h3 className="text-lg sm:text-xl font-playfair text-white leading-snug transition duration-300 group-hover:text-white/95">
                    {award.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400 leading-relaxed transition duration-300 group-hover:text-gray-300">
                    {award.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-gray-300 transition duration-300 group-hover:border-white/15 group-hover:bg-white/[0.05]">
                      {award.source}
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition duration-300 group-hover:via-[#D4AF37]/20" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionShell>

      {/* SIGNATURE DISHES */}
      <SectionShell glow="blue" divider>
        <SectionHeading
          eyebrow="Menu Highlights"
          title="Signature Pizzas"
          subtitle="Our most loved pies, crafted with tradition and passion."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-7"
        >
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative min-h-[360px] sm:min-h-[400px] md:min-h-[430px] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.04] shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#050B16]/40 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_45%)] opacity-70" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent,rgba(255,255,255,0.02),transparent)]" />

              <div className="absolute top-5 left-5 rounded-full border border-white/10 bg-black/30 backdrop-blur-md px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#D4AF37]">
                Signature
              </div>

              <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 md:p-7">
                <div className="mb-4 h-px w-12 sm:w-14 bg-[#D4AF37]/70 transition duration-300 group-hover:w-16" />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-playfair text-white">
                    {dish.name}
                  </h3>
                  <span className="text-[#D4AF37] font-semibold whitespace-nowrap text-sm sm:text-base">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                  {dish.desc}
                </p>
                <button className="mt-6 text-[11px] sm:text-sm uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#D4AF37] opacity-80 group-hover:opacity-100 transition text-left">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionShell>

      {/* CHEF */}
<section className="relative py-18 sm:py-22 md:py-30 overflow-hidden">
  {/* FULL-BLEED BACKGROUND (fixes the box issue) */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(212,175,55,0.05),transparent_30%),radial-gradient(circle_at_82%_25%,rgba(255,255,255,0.02),transparent_24%)]" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.015] to-transparent" />
  </div>

  {/* CONTENT WRAPPER */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid md:grid-cols-[0.82fr_1.18fr] gap-10 sm:gap-12 md:gap-16 items-center">

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
        className="relative"
      >
        {/* glow */}
        <div className="absolute -inset-6 bg-[radial-gradient(circle,rgba(212,175,55,0.10),transparent_70%)] blur-2xl opacity-60" />

        <div className="relative aspect-[4/5] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden bg-[#0A0F1A]">
          <Image
            src={chefImage}
            alt="Chef Giovanni Rossi"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, 32vw"
            className="object-cover scale-[1.02] brightness-[0.85] contrast-[1.05] saturate-[0.92]"
          />

          {/* SOFT BLENDING (no hard edges anymore) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.07),transparent_30%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B16]/70 via-[#050B16]/20 to-[#050B16]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B16]/25 via-transparent to-[#050B16]/22" />

          {/* key fix: softer vignette */}
          <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_72%,transparent_100%)] bg-[#050B16]/22 pointer-events-none" />

          {/* badge */}
          <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-black/20 px-3 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]">
                Head Chef
              </span>
            </div>
          </div>

          {/* caption */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
            <div className="rounded-2xl border border-white/8 bg-black/18 backdrop-blur-md px-4 py-3">
              <p className="font-playfair text-lg sm:text-xl text-white">
                Giovanni Rossi
              </p>
              <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gray-300">
                Naples Trained · Wood-Fired Specialist
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        className="text-center md:text-left"
      >
        <p className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.34em] sm:tracking-[0.38em] text-[#D4AF37] mb-3">
          Pizzaiolo
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-playfair text-white leading-[1.02] tracking-tight">
          Chef’s Note
        </h2>

        <div className="mt-4 h-px w-20 md:w-24 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent mx-auto md:mx-0" />

        <p className="mt-6 text-gray-300 text-base sm:text-lg md:text-[1.15rem] leading-relaxed max-w-3xl">
          Born in Napoli, I learned the art of pizza from my nonna. Every dough
          is a memory of home—slow-fermented, hand-stretched, and baked in our
          oak-fired oven. We use only authentic Italian ingredients to bring you
          the true taste of Naples.
        </p>

        {/* signature */}
        <div className="mt-7 sm:mt-8 rounded-[22px] border border-white/8 bg-white/[0.03] backdrop-blur-sm px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-[#D4AF37] font-semibold text-xl sm:text-2xl font-playfair">
            — Giovanni Rossi
          </p>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Master Pizzaiolo · Third generation
          </p>
        </div>

        {/* stats */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { value: "25+", label: "Years of Experience" },
            { value: "10k", label: "Pizzas per Year" },
            { value: "100%", label: "Fresh Ingredients" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 text-center shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition duration-300 hover:border-[#D4AF37]/25 hover:bg-white/[0.05]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_42%)] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative text-2xl sm:text-3xl font-playfair text-[#D4AF37]">
                {stat.value}
              </div>

              <div className="relative mt-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-gray-400 leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* credibility */}
        <div className="mt-7 flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-gray-400">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            Authentic Neapolitan method
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            Oak-fired oven
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            Italian ingredients
          </span>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* PHILOSOPHY */}
<section className="relative py-18 sm:py-22 md:py-30 border-t border-white/10 overflow-hidden">
  {/* full-width background so there is no boxed vertical transition */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.05),transparent_35%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.02),transparent_30%)]" />
    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020617]/60 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020617]/60 to-transparent" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>

  {/* only content is constrained */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
    <SectionHeading
      eyebrow="Our Approach"
      title="The Art of Neapolitan Pizza"
      subtitle="A refined balance of tradition, ingredients, and craft—designed to make every pizza feel unmistakably authentic."
    />

    <div className="mx-auto mb-10 sm:mb-12 md:mb-14 max-w-3xl text-center">
      <p className="text-sm sm:text-base leading-relaxed text-gray-400">
        Built around quality, restraint, and consistency, this philosophy helps position the brand as
        elevated, trustworthy, and worth visiting again.
      </p>
    </div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-7"
    >
      {philosophy.map((item, i) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          whileHover={{ y: -8 }}
          className="group relative rounded-[26px] sm:rounded-[30px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-[2px] overflow-hidden transition-all duration-300"
        >
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_25%_18%,rgba(212,175,55,0.08),transparent_45%)]" />
          <div className="absolute inset-0 rounded-[26px] sm:rounded-[30px] border border-transparent group-hover:border-[#D4AF37]/30 transition-colors duration-300" />

          <div className="relative z-10 flex items-start justify-between mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 flex items-center justify-center transition-all duration-300 group-hover:border-[#D4AF37]/50">
              <span className="text-xl sm:text-2xl font-playfair text-[#D4AF37]">
                {(i + 1).toString().padStart(2, "0")}
              </span>
            </div>

            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-gray-500">
              Signature Principle
            </span>
          </div>

          <h3 className="relative z-10 text-xl sm:text-2xl font-playfair text-white mb-3 group-hover:text-[#F1D87A] transition-colors duration-300">
            {item.title}
          </h3>

          <p className="relative z-10 text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {item.desc}
          </p>

          <div className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent transition-all duration-500" />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

     
{/* PRIVATE DINING */}
<SectionShell glow="blue" divider>
  <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-[0.94fr_1.06fr] md:gap-16 lg:gap-20">
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="order-2 text-center md:order-1 md:text-left"
    >
      <p className="mb-3 text-[10px] uppercase tracking-[0.34em] text-[#D4AF37] sm:text-[11px] md:text-xs">
        Parties & Events
      </p>

      <h2 className="mx-auto max-w-[12ch] text-[2.5rem] font-playfair leading-[0.98] text-white sm:text-5xl md:mx-0 md:max-w-none md:text-5xl lg:text-[3.65rem]">
        Private Dining,
        <span className="mt-1 block text-[#F3E7C2]">Done Beautifully</span>
      </h2>

      <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37]/75 to-transparent sm:w-20 md:mx-0 md:from-[#D4AF37]/75 md:via-[#D4AF37]/40 md:to-transparent" />

      <p className="mx-auto mt-6 max-w-xl text-[15px] leading-8 text-gray-300 sm:text-base md:mx-0 md:text-lg md:leading-relaxed">
        From intimate birthdays to elegant business dinners, our private
        dining experience is designed to feel warm, polished, and memorable
        — with handcrafted pizza, attentive service, and a setting guests
        will talk about long after the evening ends.
      </p>

      <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:gap-4 md:mx-0">
        {[
          "Interactive pizza-making experience with our pizzaiolo",
          "Tailored menus with curated wine and cocktail pairings",
          "Dedicated team for a seamless, elevated event",
        ].map((item, i) => (
          <div
            key={item}
            className="group flex items-start gap-3 rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-3.5 text-left transition-all duration-300 hover:border-[#D4AF37]/25 hover:bg-white/[0.045] sm:gap-3.5 sm:py-4"
          >
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[10px] font-medium text-[#D4AF37] sm:text-[11px]">
              0{i + 1}
            </div>

            <span className="text-sm leading-6 text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-[15px] sm:leading-6 md:text-base">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 md:items-start md:justify-start">
        <Link
          href="/private-dining"
          className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#D4AF37] px-6 py-3.5 text-sm font-medium text-[#0A0F1A] shadow-[0_10px_30px_rgba(212,175,55,0.22)] transition duration-300 hover:scale-[1.02] hover:bg-[#E7C65A] sm:px-7 sm:text-base"
        >
          Inquire About Events
        </Link>

        <Link
          href="/menu"
          className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/10 px-6 py-3.5 text-sm text-white/70 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white sm:px-7 sm:text-base"
        >
          View Sample Menu
        </Link>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 24, scale: 0.985 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="order-1 relative md:order-2"
    >
      <div className="relative aspect-[1.05/1] overflow-hidden rounded-[24px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.34)] sm:aspect-[5/4] sm:rounded-[30px] md:rounded-[34px]">
        <Image
          src={privateDiningImg}
          alt="Warm private dining table set with pizza, candlelight, and guests enjoying dinner"
          fill
          priority={false}
          className="object-cover scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/72 via-[#071120]/18 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_38%)]" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/8" />

        <div className="absolute inset-x-3 bottom-3 sm:left-6 sm:right-6 sm:bottom-6">
          <div className="rounded-[20px] border border-white/8 bg-[#08101D]/55 px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-md sm:rounded-[22px] sm:px-6 sm:py-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-[0.28em] text-[#D4AF37] sm:text-[11px]">
                  Exclusive Experience
                </p>

                <h3 className="mt-2 text-[1.35rem] font-playfair leading-tight text-white sm:text-xl md:text-[1.6rem]">
                  Intimate events for up to 20 guests
                </h3>

                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-gray-300 sm:text-[15px]">
                  Ideal for celebrations, team dinners, and private evenings
                  centered around authentic Neapolitan hospitality.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] sm:flex">
                ✦
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#D4AF37]/10 blur-3xl sm:-right-5 sm:-top-5 sm:h-24 sm:w-24" />
      <div className="pointer-events-none absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-white/[0.04] blur-3xl sm:-bottom-6 sm:-left-6 sm:h-28 sm:w-28" />
    </motion.div>
  </div>
</SectionShell>

      

      {/* TESTIMONIALS */}
<SectionShell glow="gold" divider className="max-w-none">
  <div className="mx-auto max-w-6xl">
    <SectionHeading
      eyebrow="Guest Stories"
      title="What Our Guests Say"
      subtitle="Moments remembered for the warmth, the atmosphere, and the craft behind every service."
    />

    <div className="relative mt-10 sm:mt-12">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute right-10 bottom-8 h-28 w-28 rounded-full bg-white/[0.04] blur-3xl" />
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.035] to-white/[0.02] px-5 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:rounded-[32px] sm:px-8 sm:py-10 md:px-12 md:py-14">
        {/* soft internal highlights */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-[28px] sm:rounded-[32px] ring-1 ring-inset ring-white/6" />

        {/* top quote mark */}
        <div className="relative mb-6 flex justify-center sm:mb-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-3xl font-playfair text-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.14)] sm:h-16 sm:w-16 sm:text-4xl">
            “
          </div>
        </div>

        {/* rating */}
        <div className="relative mb-6 flex justify-center gap-1.5 sm:mb-8">
          {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37] sm:h-5 sm:w-5"
            />
          ))}
        </div>

        <motion.div
          key={testimonialIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative text-center"
        >
          <blockquote className="mx-auto max-w-4xl">
            <p className="text-[1.45rem] font-playfair leading-[1.45] text-white sm:text-[1.9rem] md:text-[2.3rem] md:leading-[1.4]">
              “{testimonials[testimonialIndex].quote}”
            </p>
          </blockquote>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent sm:mt-7 sm:w-20" />

          <div className="mt-5 sm:mt-6">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#D4AF37] sm:text-[15px]">
              {testimonials[testimonialIndex].author}
            </p>

            {/* {testimonials[testimonialIndex].meta && (
              <p className="mt-2 text-sm text-gray-400 sm:text-[15px]">
                {testimonials[testimonialIndex].meta}
              </p>
            )} */}
          </div>
        </motion.div>

        {/* dots */}
        <div className="relative mt-8 flex justify-center gap-3 sm:mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setTestimonialIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === testimonialIndex
                  ? "h-2 w-10 bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.35)]"
                  : "h-2 w-2 bg-white/20 hover:bg-white/35"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* arrows */}
        <div className="relative mt-7 flex justify-center gap-3 sm:mt-8 sm:gap-4">
          <button
            onClick={prevTestimonial}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/45 hover:bg-white/[0.05] hover:text-[#D4AF37] sm:h-12 sm:w-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/45 hover:bg-white/[0.05] hover:text-[#D4AF37] sm:h-12 sm:w-12"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</SectionShell>

      {/* FIND US */}
      <SectionShell glow="blue" divider>
        <SectionHeading eyebrow="Visit" title="Find Us" />

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[280px] sm:h-[340px] md:h-[420px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          >
            <iframe
              title="Vesuvio location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://www.openstreetmap.org/export/embed.html?bbox=14.245%2C40.837%2C14.255%2C40.845&amp;layer=mapnik&amp;marker=40.841%2C14.250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px] sm:rounded-[28px] md:rounded-[32px] pointer-events-none" />
            <small className="absolute bottom-1 right-2 text-[8px] text-gray-500 bg-black/50 px-1 py-0.5 rounded">
              <a
                href="https://www.openstreetmap.org/?mlat=40.841&amp;mlon=14.250#map=17/40.841/14.250"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                OpenStreetMap
              </a>
            </small>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex flex-col justify-center"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Address</h3>
                  <p className="mt-1 text-gray-400 text-sm sm:text-base">
                    Via Toledo, 123
                    <br />
                    80134 Napoli NA, Italy
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Hours</h3>
                  <p className="mt-1 text-gray-400 text-sm sm:text-base">
                    Tuesday – Sunday: 12:00 – 15:00, 19:00 – 23:00
                    <br />
                    Monday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-400 text-sm sm:text-base">
                    +39 081 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-400 text-sm sm:text-base break-all">
                    info@vesuvio.it
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionShell>

      {/* RESERVATION */}
<SectionShell glow="gold" divider>
  <div id="reservation" className="mx-auto max-w-6xl">
    <SectionHeading
      eyebrow="Reservations"
      title="Reserve Your Table"
      subtitle="Join us for an authentic Neapolitan dining experience — warm hospitality, wood-fired pizza, and a table waiting for you."
    />

    <div className="grid items-stretch gap-6 sm:gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative"
      >
        <div className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.03] to-white/[0.02] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-md sm:rounded-[28px] sm:p-8 md:rounded-[32px] md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/6 sm:rounded-[28px] md:rounded-[32px]" />

          <div className="relative">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] sm:text-[11px]">
              Dining Experience
            </p>

            <h3 className="mt-2 font-playfair text-2xl text-white sm:text-3xl">
              Make the evening
              <span className="block text-[#F3E7C2]">feel special</span>
            </h3>

            <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />

            <p className="mt-5 text-sm leading-relaxed text-gray-300 sm:text-base">
              Reserve in advance for the best seating, a relaxed atmosphere, and
              the full Vesuvio experience from the very first course.
            </p>

            <div className="mt-7 space-y-3.5">
              {[
                "Authentic wood-fired Neapolitan pizza",
                "Warm service and family-friendly atmosphere",
                "Ideal for date nights, gatherings, and celebrations",
              ].map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3.5"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[10px] font-medium text-[#D4AF37]">
                    0{i + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[20px] border border-white/8 bg-[#0A1220]/70 px-4 py-4 backdrop-blur-md sm:px-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37]">
                Opening Hours
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-300 sm:text-[15px]">
                Tuesday – Sunday: 12:00 – 15:00, 19:00 – 23:00
                <br />
                Monday: Closed
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE FORM */}
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.035] to-white/[0.02] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:rounded-[28px] sm:p-8 md:rounded-[32px] md:p-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/6 sm:rounded-[28px] md:rounded-[32px]" />

        <div className="relative">
          <div className="mb-6 sm:mb-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] sm:text-[11px]">
              Book Online
            </p>
            <h3 className="mt-2 font-playfair text-2xl text-white sm:text-3xl">
              Secure your table
            </h3>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white placeholder:text-gray-400 outline-none transition focus:border-[#D4AF37]/60 focus:bg-white/[0.065]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white placeholder:text-gray-400 outline-none transition focus:border-[#D4AF37]/60 focus:bg-white/[0.065]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Date</label>
              <input
                type="date"
                className="w-full rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white outline-none transition focus:border-[#D4AF37]/60 focus:bg-white/[0.065]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Time</label>
              <input
                type="time"
                className="w-full rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white outline-none transition focus:border-[#D4AF37]/60 focus:bg-white/[0.065]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-gray-300">Guests</label>
              <select className="w-full rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white outline-none transition focus:border-[#D4AF37]/60 focus:bg-white/[0.065]">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} className="bg-[#0A1220] text-white">
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-gray-300">
                Special Request
              </label>
              <textarea
                rows={4}
                placeholder="Celebration, seating preference, allergies, or anything else we should know."
                className="w-full resize-none rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white placeholder:text-gray-400 outline-none transition focus:border-[#D4AF37]/60 focus:bg-white/[0.065]"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-gray-400">
              We’ll do our best to accommodate your preferred time and seating.
            </p>

            <button
              type="submit"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0A0F1A] shadow-[0_10px_30px_rgba(212,175,55,0.18)] transition hover:scale-[1.01] hover:bg-[#c9a532] sm:text-base"
            >
              Book Now
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  </div>
</SectionShell>

{/* NEWSLETTER */}
<SectionShell glow="neutral" divider className="pb-24 sm:pb-28 md:pb-36">
  <div className="mx-auto max-w-5xl">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.035] to-white/[0.02] px-6 py-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:rounded-[28px] sm:px-8 sm:py-10 md:rounded-[32px] md:px-12 md:py-14"
    >
      {/* background polish */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/6 sm:rounded-[28px] md:rounded-[32px]" />

      <div className="relative">
        <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[#D4AF37] sm:text-[11px] sm:tracking-[0.35em] md:text-xs">
          Newsletter
        </p>

        <h2 className="font-playfair text-2xl text-white sm:text-3xl md:text-4xl lg:text-[2.8rem]">
          Pizza Lover’s Club
        </h2>

        <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent sm:w-20" />

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
          Subscribe for seasonal specials, new pizza releases, chef’s picks, and
          invitations to exclusive evenings at Vesuvio.
        </p>

        <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-sm text-gray-300 sm:grid-cols-3 sm:gap-4">
          {[
            "Seasonal menu launches",
            "Special event invitations",
            "Exclusive subscriber offers",
          ].map((item, i) => (
            <div
              key={item}
              className="flex items-center justify-center gap-3 rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3.5"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[10px] font-medium text-[#D4AF37]">
                0{i + 1}
              </div>
              <span className="text-sm text-gray-300">{item}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3.5 text-white placeholder:text-gray-400 outline-none transition focus:border-[#D4AF37]/60 focus:bg-white/[0.065]"
          />

          <button className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 font-semibold text-[#0A0F1A] transition hover:bg-[#c9a532] sm:px-8">
            Subscribe
          </button>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-gray-500 sm:text-sm">
          No spam — only thoughtful updates, special offers, and the occasional
          reason to crave pizza.
        </p>
      </div>
    </motion.div>
  </div>
</SectionShell>
    </div>
  );
}