"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  Heart,
  Leaf,
  Users,
  ChefHat,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Timeline data – cleaned up for better readability
const timelineEvents = [
  {
    year: "2018",
    title: "The Dream Begins",
    description:
      "Chef Giovanni Rossi opens Pizzeria Vesuvio in the heart of Little Italy, bringing his family's century‑old recipes to New York.",
  },
  {
    year: "2019",
    title: "First Accolade",
    description:
      "Vesuvio wins 'Best New Pizza' from the Village Voice, and lines start forming around the block.",
  },
  {
    year: "2020",
    title: "Wood‑Fired Expansion",
    description:
      "We install a second custom‑built oak‑fired oven to meet demand, while maintaining our commitment to quality.",
  },
  {
    year: "2022",
    title: "50 Top Pizza World",
    description:
      "Vesuvio is ranked #12 in the prestigious 50 Top Pizza World list, the highest ranking for a NYC pizzeria.",
  },
  {
    year: "2024",
    title: "A New Chapter",
    description:
      "We open our second location in Brooklyn, bringing authentic Neapolitan pizza to a new community.",
  },
];

// Values data (unchanged)
const values = [
  {
    title: "Tradition",
    description:
      "Our recipes have been passed down through three generations. We honor our ancestors by keeping their techniques alive.",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    title: "Quality",
    description:
      "We source only the finest Italian ingredients: San Marzano tomatoes, fior di latte, 00 flour, and extra virgin olive oil.",
    icon: <Leaf className="w-6 h-6" />,
  },
  {
    title: "Community",
    description:
      "Vesuvio is more than a pizzeria – it's a gathering place for friends, families, and neighbors to share a meal.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Passion",
    description:
      "Every pizza is made with love by pizzaiolos who treat their craft as an art form.",
    icon: <Heart className="w-6 h-6" />,
  },
];

export default function StoryPage() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  return (
    <div className="relative min-h-screen bg-[#050B16] text-white overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.10),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.05),_transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
      </div>

      {/* Hero Section – reduced height for less empty space */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Placeholder for hero image */}
          <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050B16]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold text-white mb-6">
            Our <span className="text-[#D4AF37]">Story</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
            Three generations of pizza-making passion, brought to your table.
          </p>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-[#D4AF37] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <Quote className="w-12 h-12 text-[#D4AF37] opacity-50 mx-auto" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-playfair text-white mb-6"
          >
            From Naples to New York
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Pizzeria Vesuvio was born from a dream: to share the authentic taste of
            Neapolitan pizza with the world. Chef Giovanni Rossi learned the art of
            pizza-making from his grandfather in the hills of Campania, where the
            family recipes were perfected over decades. In 2018, he crossed the ocean
            to bring that legacy to the streets of New York.
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline Section – redesigned as vertical for clarity */}
      <section className="relative py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-playfair text-white mb-4">
            The Journey So Far
          </motion.h2>
          <motion.div variants={fadeUp} className="h-px w-20 mx-auto bg-[#D4AF37]" />
        </motion.div>

        {/* Vertical timeline – clean, no icons, just years and cards */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start gap-6 md:gap-8`}
                >
                  {/* Year marker – positioned on the line */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#050B16] z-10" />

                  {/* Content – alternates left/right on desktop */}
                  <div className={`md:w-1/2 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-16 md:pl-0`}>
                    <span className="text-[#D4AF37] font-bold text-2xl block mb-2">{event.year}</span>
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 hover:border-[#D4AF37]/30 transition">
                      <h3 className="text-white font-playfair text-xl mb-2">{event.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Spacer for even alignment */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chef's Story */}
      <section className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              {/* Placeholder for chef image */}
              <div className="absolute inset-0 bg-[url('/placeholder-chef.jpg')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-8 border-[#050B16] bg-[#D4AF37] flex items-center justify-center text-center p-4 shadow-xl">
              <p className="text-[#0A0F1A] font-bold text-xs uppercase">3rd Generation Pizzaiolo</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-white">
              Chef <span className="text-[#D4AF37]">Giovanni Rossi</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Giovanni grew up in his family's bakery in Sorrento, where the smell of
              wood-fired bread was the scent of home. At 14, he began learning the
              art of pizza from his grandfather, Nonno Enzo, who had been making
              pizza for over 50 years.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              After training in Naples and working in Michelin-starred kitchens across
              Europe, Giovanni moved to New York with a mission: to create a pizzeria
              that honored tradition while embracing the energy of his new home.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              {["15+ Years Experience", "Naples Native", "3x Pizza Champion"].map(
                (item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-300"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-playfair text-white mb-4">
            What Drives Us
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto">
            Four pillars that guide everything we do, from dough to dining room.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 text-center hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition">
                {value.icon}
              </div>
              <h3 className="text-xl font-playfair text-white mb-3">{value.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ingredients Spotlight */}
      <section className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair text-white mb-6">
              Only the <span className="text-[#D4AF37]">Finest</span> Ingredients
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              We import our San Marzano tomatoes from the foothills of Mount Vesuvius,
              our 00 flour from Naples, and our extra virgin olive oil from small
              family farms in Puglia. Every ingredient is chosen for its provenance
              and quality.
            </p>
            <ul className="space-y-4">
              {[
                "San Marzano DOP tomatoes – sweet, low acidity",
                "Fior di latte mozzarella – fresh, creamy",
                "Caputo '00' flour – finely ground, perfect elasticity",
                "Wild oregano from Mount Etna",
                "Aged balsamic from Modena",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#D4AF37] text-xl leading-none">✦</span>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                <div className="w-full h-full bg-[url('/placeholder-tomatoes.jpg')] bg-cover bg-center" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 mt-8">
                <div className="w-full h-full bg-[url('/placeholder-flour.jpg')] bg-cover bg-center" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 -mt-4">
                <div className="w-full h-full bg-[url('/placeholder-oliveoil.jpg')] bg-cover bg-center" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                <div className="w-full h-full bg-[url('/placeholder-basil.jpg')] bg-cover bg-center" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-playfair text-white mb-4">
            Recognition
          </motion.h2>
          <motion.div variants={fadeUp} className="h-px w-20 mx-auto bg-[#D4AF37]" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "50 Top Pizza World", year: "2022, 2023" },
            { name: "Michelin Bib Gourmand", year: "2021–2024" },
            { name: "Gambero Rosso 3 Slices", year: "2023" },
            { name: "NYC Best Pizza", year: "2020, 2022, 2024" },
          ].map((award, i) => (
            <motion.div
              key={award.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm"
            >
              <Award className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <h3 className="text-white font-medium">{award.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-12 text-center backdrop-blur-md"
        >
          <Users className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-playfair text-white mb-4">
            Giving Back to the Community
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We believe in supporting the neighborhood that embraced us. From hosting
            free pizza-making classes for kids to donating meals to local shelters,
            we're proud to be part of the Little Italy community.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Pizza Classes", "Food Drives", "Local Partnerships"].map((item) => (
              <div
                key={item}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-playfair text-white mb-4">
            Come Be Part of Our Story
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Experience the taste of tradition. Reserve a table or order online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="px-8 py-4 rounded-full bg-[#D4AF37] text-[#0A0F1A] font-semibold hover:bg-[#c9a532] transition inline-flex items-center justify-center gap-2 group"
            >
              View Menu <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/#reservation"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/[0.03] text-white font-semibold hover:bg-white/[0.07] transition"
            >
              Reserve a Table
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}