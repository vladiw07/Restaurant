"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
} from "lucide-react";

import heroImage from "./assets/images/heroImage.png";
import award1 from "./assets/images/award1.png";
import award2 from "./assets/images/award2.png";
import award3 from "./assets/images/award3.png";
import award4 from "./assets/images/award4.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const awards = [
  { name: "Michelin Star", img: award1 },
  { name: "World’s 50 Best", img: award2 },
  { name: "Wine Spectator", img: award3 },
  { name: "AAA Five Diamond", img: award4 },
];

const dishes = [
  {
    name: "Wagyu Tataki",
    desc: "Seared Japanese beef, yuzu ponzu, microgreens",
    price: "$42",
  },
  {
    name: "Truffle Risotto",
    desc: "Carnaroli rice, black truffle, parmesan foam",
    price: "$38",
  },
  {
    name: "Lobster Bisque",
    desc: "Maine lobster, cognac, crème fraîche",
    price: "$29",
  },
  {
    name: "Dover Sole Meunière",
    desc: "Whole sole, brown butter, lemon, parsley",
    price: "$58",
  },
  {
    name: "Chocolate Soufflé",
    desc: "Valrhona dark chocolate, vanilla bean ice cream",
    price: "$18",
  },
  {
    name: "Cheese Cart",
    desc: "Selection of artisanal French and Italian cheeses",
    price: "$24",
  },
];

const philosophy = [
  {
    title: "Seasonal Ingredients",
    desc: "We work closely with trusted growers and producers to build menus around what is at its absolute peak.",
  },
  {
    title: "Refined Craft",
    desc: "Every element on the plate is intentional, balancing precision, beauty, texture, and restraint.",
  },
  {
    title: "Warm Hospitality",
    desc: "Elegant service, intimate atmosphere, and genuine attention to detail define every visit.",
  },
];

const testimonials = [
  {
    quote: "An unforgettable experience. The tasting menu is a masterpiece.",
    author: "James R., Food Critic",
    rating: 5,
  },
  {
    quote: "Exquisite flavors and impeccable service. A true gem.",
    author: "Sophia L., Michelin Inspector",
    rating: 5,
  },
  {
    quote: "The atmosphere is as beautiful as the food. Highly recommended.",
    author: "David K., Regular Guest",
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
      {/* Global background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.10),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.05),_transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-32">
        <div className="absolute inset-0 bg-[#050B16]" />
        <div className="absolute inset-x-0 top-0 h-32 sm:h-40 md:h-48 bg-gradient-to-b from-[#020814] via-[#050B16]/95 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.08),transparent_28%),radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.04),transparent_22%)] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050B16] z-[1]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-2xl text-center lg:text-left order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-white/[0.03] backdrop-blur-sm text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[#D4AF37]">
                <span>Est. 2018</span>
                <span className="opacity-40">•</span>
                <span>Michelin Star</span>
              </div>

              <h1 className="mt-5 sm:mt-6 text-5xl xs:text-6xl sm:text-6xl md:text-7xl xl:text-8xl font-playfair font-semibold leading-[0.92] tracking-tight">
                Vermilion
              </h1>

              <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Modern European cuisine shaped by seasonal ingredients,
                impeccable technique, and a quietly unforgettable atmosphere.
              </p>

              <div className="mt-7 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-300">
                {["Tasting Menu", "Private Dining", "Wine Pairing"].map((item) => (
                  <div
                    key={item}
                    className="px-3.5 sm:px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 sm:mt-8 border-l border-[#D4AF37]/60 pl-4 sm:pl-5 text-left max-w-xl mx-auto lg:mx-0">
                <p className="italic text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  “Food is memory, and we craft plates that linger long after the
                  final course.”
                </p>
                <span className="mt-2 block text-xs sm:text-sm tracking-wide text-[#D4AF37]">
                  — Chef Elena Vance
                </span>
              </div>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto lg:mx-0">
                <Link
                  href="/menu"
                  className="px-6 sm:px-8 py-3.5 rounded-full bg-[#D4AF37] text-[#0A0F1A] font-semibold hover:scale-[1.03] hover:bg-[#c9a532] transition duration-300 text-center shadow-[0_10px_30px_rgba(212,175,55,0.18)]"
                >
                  Explore Menu
                </Link>
                <Link
                  href="#reservation"
                  className="px-6 sm:px-8 py-3.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-sm text-white font-semibold hover:bg-white/[0.07] hover:scale-[1.03] transition duration-300 text-center"
                >
                  Reserve a Table
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative order-2"
            >
              <div className="absolute -inset-4 sm:-inset-6 bg-[radial-gradient(circle,_rgba(212,175,55,0.12),_transparent_60%)] blur-2xl" />

              <div className="relative rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5]">
                  <Image
                    src={heroImage}
                    alt="Vermilion signature dish"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent" />

                  <div className="absolute left-3 right-3 bottom-3 sm:left-5 sm:right-5 sm:bottom-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md p-4 sm:p-5">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[#D4AF37] mb-2">
                        Tonight’s Signature
                      </p>
                      <h3 className="text-xl sm:text-2xl font-playfair">
                        Wagyu Tataki
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                        Seared Japanese beef, yuzu ponzu, microgreens.
                      </p>
                      <p className="mt-3 text-[#D4AF37] font-semibold">$42</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md p-4 sm:p-5">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.3em] text-[#D4AF37] mb-3">
                        Quick Reserve
                      </p>
                      <div className="grid grid-cols-1 gap-3">
                        <input
                          type="text"
                          placeholder="Name"
                          className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 placeholder:text-gray-400 text-sm outline-none focus:border-[#D4AF37]/60"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 placeholder:text-gray-400 text-sm outline-none focus:border-[#D4AF37]/60"
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="date"
                            className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-sm outline-none focus:border-[#D4AF37]/60"
                          />
                          <select className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-sm outline-none focus:border-[#D4AF37]/60">
                            <option>2 Guests</option>
                            <option>3 Guests</option>
                            <option>4 Guests</option>
                            <option>5 Guests</option>
                          </select>
                        </div>
                        <button className="px-4 py-3 rounded-xl bg-[#D4AF37] text-[#0A0F1A] font-semibold hover:bg-[#c9a532] transition">
                          Find a Table
                        </button>
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
      <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Distinctions"
            title="Awards & Recognition"
            subtitle="A standard of excellence recognized by leading voices in global dining and hospitality."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {awards.map((award) => (
              <motion.div
                key={award.name}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-[22px] sm:rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 sm:p-6 md:p-7 text-center shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto">
                  <Image
                    src={award.img}
                    alt={award.name}
                    fill
                    className="object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 96px, 112px"
                  />
                </div>
                <h3 className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-white font-medium tracking-wide leading-snug">
                  {award.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
        <SectionHeading
          eyebrow="Menu Highlights"
          title="Signature Dishes"
          subtitle="A selection of elegant compositions that define the Vermilion experience."
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
              whileHover={{ y: -6 }}
              className="group relative min-h-[300px] sm:min-h-[340px] md:min-h-[360px] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_45%)] opacity-70" />
              <div className="absolute inset-0 flex items-center justify-center text-[64px] sm:text-[72px] md:text-[80px] font-playfair text-white/[0.05]">
                0{i + 1}
              </div>

              <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 md:p-7">
                <div className="mb-4 h-px w-12 sm:w-14 bg-[#D4AF37]/70" />
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
      </section>

      {/* CHEF */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-10 sm:gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.10),_transparent_40%)]" />
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-base sm:text-lg">
              Chef Portrait
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.32em] sm:tracking-[0.35em] text-[#D4AF37] mb-3">
              Culinary Direction
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair leading-tight">
              Chef’s Note
            </h2>

            <p className="mt-5 sm:mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              Every dish tells a story of place, memory, and craft. Inspired by
              the French countryside and refined through years of global
              exploration, our menu is built around clarity of flavor and the
              beauty of seasonal ingredients.
            </p>

            <p className="mt-6 text-[#D4AF37] font-semibold text-lg sm:text-xl">
              — Elena Vance
            </p>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">
              Executive Chef · 15 years of culinary excellence
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: "12", label: "Years at Vermilion" },
                { value: "3", label: "Michelin Stars" },
                { value: "50+", label: "Signature Dishes" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-playfair text-[#D4AF37]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] text-gray-400 leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
        <SectionHeading
          eyebrow="Our Approach"
          title="A Philosophy of Restraint, Seasonality, and Care"
        />

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-7">
          {philosophy.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-semibold text-base sm:text-lg mb-5 sm:mb-6">
                0{i + 1}
              </div>
              <h3 className="text-xl sm:text-2xl font-playfair text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRIVATE DINING */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.32em] sm:tracking-[0.35em] text-[#D4AF37] mb-3">
              Exclusive Experiences
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair leading-tight">
              Private Dining
            </h2>
            <p className="mt-5 sm:mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              Host intimate celebrations, corporate dinners, and bespoke tasting
              experiences in a private room designed for up to 20 guests.
            </p>

            <div className="mt-7 sm:mt-8 space-y-4">
              {[
                "Personalized menu consultation",
                "Dedicated service team",
                "Curated wine pairing options",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center md:justify-start gap-3 text-gray-300 text-sm sm:text-base"
                >
                  <span className="text-[#D4AF37]">✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/private-dining"
              className="inline-block mt-8 px-6 sm:px-7 py-3.5 rounded-full border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0F1A] transition"
            >
              Inquire About Events
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[5/4] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-base sm:text-lg">
              Private Dining Room
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRESS */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
        <SectionHeading eyebrow="Press Features" title="As Seen In" />
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
          {["Food & Wine", "Bon Appétit", "The Guardian", "Forbes", "Wine Enthusiast"].map(
            (pub, i) => (
              <motion.div
                key={pub}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/10 bg-white/[0.04] text-gray-300 tracking-wide text-sm sm:text-base"
              >
                {pub}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/10">
        <SectionHeading eyebrow="Guest Stories" title="What Guests Remember Most" />

        <div className="relative rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
          <div className="flex justify-center gap-1 mb-5 sm:mb-6">
            {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 fill-[#D4AF37] text-[#D4AF37]"
              />
            ))}
          </div>

          <motion.div
            key={testimonialIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-center"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-playfair text-white leading-relaxed max-w-3xl mx-auto">
              “{testimonials[testimonialIndex].quote}”
            </p>
            <p className="mt-5 sm:mt-6 text-[#D4AF37] font-medium tracking-wide text-sm sm:text-base">
              {testimonials[testimonialIndex].author}
            </p>
          </motion.div>

          <div className="flex justify-center gap-3 mt-7 sm:mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === testimonialIndex ? "w-10 bg-[#D4AF37]" : "w-2 bg-white/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center gap-3 sm:gap-4 mt-7 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FIND US */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
        <SectionHeading eyebrow="Visit" title="Find Us" />

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 sm:gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[280px] sm:h-[340px] md:h-[420px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-base sm:text-lg">
              Interactive Map
            </div>
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
                    123 Gourmet Street, Culinary District, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Hours</h3>
                  <p className="mt-1 text-gray-400 text-sm sm:text-base">
                    Monday – Saturday: 5pm – 11pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-400 text-sm sm:text-base">
                    (212) 555-0199
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-400 text-sm sm:text-base break-all">
                    reservations@vermilion.nyc
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESERVATION */}
      <section
        id="reservation"
        className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/10"
      >
        <SectionHeading
          eyebrow="Reservations"
          title="Reserve Your Table"
          subtitle="Join us for an evening of refined dining, thoughtful service, and seasonal culinary expression."
        />

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
        >
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 placeholder:text-gray-400 outline-none focus:border-[#D4AF37]/60"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 placeholder:text-gray-400 outline-none focus:border-[#D4AF37]/60"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Date</label>
              <input
                type="date"
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 outline-none focus:border-[#D4AF37]/60"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Time</label>
              <input
                type="time"
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 outline-none focus:border-[#D4AF37]/60"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-2">Guests</label>
              <select className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 outline-none focus:border-[#D4AF37]/60">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 sm:mt-8 w-full py-3.5 rounded-xl bg-[#D4AF37] text-[#0A0F1A] font-semibold hover:bg-[#c9a532] hover:scale-[1.01] transition shadow-[0_10px_30px_rgba(212,175,55,0.18)]"
          >
            Book Now
          </button>
        </motion.form>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 sm:p-8 md:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
        >
          <p className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.32em] sm:tracking-[0.35em] text-[#D4AF37] mb-3">
            Newsletter
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair">
            Stay Updated
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Subscribe for seasonal menus, chef collaborations, private event
            announcements, and special dining experiences.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 placeholder:text-gray-400 outline-none focus:border-[#D4AF37]/60"
            />
            <button className="px-7 py-3.5 rounded-xl bg-[#D4AF37] text-[#0A0F1A] font-semibold hover:bg-[#c9a532] transition">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}