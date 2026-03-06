"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Clock, Phone, Mail } from 'lucide-react';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
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

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="text-white">
      {/* ========== HERO – cinematic, with video background ========== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background video placeholder (replace with actual <video> later) */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0a0f1a] to-gray-800">
          {/* In production, use a video tag with a muted looped mp4 */}
        </div>
        <div className="absolute inset-0 bg-black/60" />

        {/* Floating gold accent */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

        {/* Content container with top padding to clear fixed navbar */}
        <div className="relative z-10 pt-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 border border-[#D4AF37]/30 rounded-full text-xs tracking-wider text-[#D4AF37] bg-black/20"
            >
              AWARD-WINNING CUISINE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-8xl font-playfair font-bold leading-[1.1]"
            >
              Vermilion
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              Modern cuisine with timeless elegance. Experience a symphony of flavors in the heart of the city.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link
                href="/menu"
                className="px-8 py-3 bg-[#D4AF37] text-[#0a0f1a] rounded-full font-semibold hover:bg-[#c4a030] transition transform hover:scale-105"
              >
                Explore Menu
              </Link>
              <Link
                href="#reservation"
                className="px-8 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition transform hover:scale-105"
              >
                Reserve a Table
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== AWARDS & RECOGNITION ========== */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-gray-800">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-playfair text-center mb-12"
        >
          Awards & Recognition
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {['Michelin Star', 'World’s 50 Best', 'Wine Spectator', 'AAA Five Diamond'].map(
            (award, i) => (
              <motion.div
                key={award}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-center p-2 shadow-xl border border-gray-700"
              >
                <span className="text-xs font-medium text-gray-300">{award}</span>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ========== SIGNATURE DISHES (with hover details) ========== */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-playfair text-center mb-12"
        >
          Signature Dishes
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            { name: 'Wagyu Tataki', desc: 'Seared Japanese beef, yuzu ponzu, microgreens', price: '$42' },
            { name: 'Truffle Risotto', desc: 'Carnaroli rice, black truffle, parmesan foam', price: '$38' },
            { name: 'Lobster Bisque', desc: 'Maine lobster, cognac, crème fraîche', price: '$29' },
            { name: 'Dover Sole Meunière', desc: 'Whole sole, brown butter, lemon, parsley', price: '$58' },
            { name: 'Chocolate Soufflé', desc: 'Valrhona dark chocolate, vanilla bean ice cream', price: '$18' },
            { name: 'Cheese Cart', desc: 'Selection of artisanal French and Italian cheeses', price: '$24' },
          ].map((dish, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 shadow-xl"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                Image {i + 1}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#D4AF37] font-semibold text-lg">{dish.name}</h3>
                  <span className="text-white text-sm">{dish.price}</span>
                </div>
                <p className="text-sm text-gray-200 mt-1">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========== CHEF'S NOTE (with more detail) ========== */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 shadow-xl"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Chef Portrait
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-playfair mb-6">Chef's Note</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              "Every dish tells a story of our journey through global flavors, rooted in tradition
              and elevated with modern technique. I draw inspiration from my childhood in the French
              countryside and travels through Asia. We source only the finest seasonal ingredients
              to create an experience that lingers long after the last bite."
            </p>
            <p className="text-[#D4AF37] font-semibold text-xl">— Elena Vance</p>
            <p className="text-gray-400">Executive Chef, 15 years of culinary excellence</p>
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D4AF37]">12</div>
                <div className="text-xs text-gray-400">Years at Vermilion</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D4AF37]">3</div>
                <div className="text-xs text-gray-400">Michelin Stars</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D4AF37]">50+</div>
                <div className="text-xs text-gray-400">Signature Dishes</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== CULINARY PHILOSOPHY ========== */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-playfair text-center mb-12"
        >
          Our Philosophy
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Seasonal Ingredients',
              desc: 'We partner with local farms to bring the freshest produce, changing our menu with the seasons.',
            },
            {
              title: 'Artful Presentation',
              desc: 'Every plate is a canvas, blending color, texture, and form to delight all the senses.',
            },
            {
              title: 'Warm Hospitality',
              desc: 'Our team ensures every guest feels like family, with attentive service in an elegant setting.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-gray-800 hover:border-[#D4AF37] transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-[#D4AF37] text-2xl">
                {i + 1}
              </div>
              <h3 className="text-xl font-playfair mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== PRIVATE DINING (new) ========== */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair mb-6">Private Dining</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Host your next celebration in our exclusive private room, accommodating up to 20 guests.
              Choose from curated tasting menus or create a custom experience with our chef.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37]">✓</span> Personalized menu consultation
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37]">✓</span> Dedicated service team
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#D4AF37]">✓</span> Wine pairing options
              </li>
            </ul>
            <Link
              href="/private-dining"
              className="inline-block mt-8 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-[#0a0f1a] transition"
            >
              Inquire About Events
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 shadow-xl"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Private Dining Room
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== PRESS FEATURES (logos) ========== */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-gray-800">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-playfair text-center mb-12"
        >
          As Seen In
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {['Food & Wine', 'Bon Appétit', 'The Guardian', 'Forbes', 'Wine Enthusiast'].map(
            (pub, i) => (
              <motion.div
                key={pub}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-500 text-lg font-light tracking-wider"
              >
                {pub}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ========== TESTIMONIALS CAROUSEL ========== */}
      <section className="py-16 md:py-20 px-6 max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-playfair text-center mb-12"
        >
          Guest Stories
        </motion.h2>
        <div className="relative bg-[#111827]/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-800">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <motion.div
            key={testimonialIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-gray-200 italic mb-6">
              "{testimonials[testimonialIndex].quote}"
            </p>
            <p className="text-[#D4AF37] font-semibold">
              {testimonials[testimonialIndex].author}
            </p>
          </motion.div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-600 hover:border-[#D4AF37] text-gray-300 hover:text-[#D4AF37] transition flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-600 hover:border-[#D4AF37] text-gray-300 hover:text-[#D4AF37] transition flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========== MAP & CONTACT ========== */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-playfair text-center mb-12"
        >
          Find Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Interactive Map
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col justify-center"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-400">123 Gourmet Street, Culinary District, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Hours</h3>
                <p className="text-gray-400">Monday – Saturday: 5pm – 11pm<br />Sunday: Closed</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">(212) 555-0199</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">reservations@vermilion.nyc</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== RESERVATION FORM (simplified, with id for anchor) ========== */}
      <section id="reservation" className="py-16 md:py-20 px-6 max-w-3xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-playfair text-center mb-12"
        >
          Reserve Your Table
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-gray-800 shadow-xl bg-[#0a0f1a]/50 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
              <input
                type="time"
                className="w-full px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">Guests</label>
              <select className="w-full px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 w-full bg-[#D4AF37] text-[#0a0f1a] py-3 rounded-lg font-semibold hover:bg-[#c4a030] transition transform hover:scale-105"
          >
            Book Now
          </button>
        </motion.form>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-16 md:py-20 px-6 max-w-3xl mx-auto border-t border-gray-800">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-3xl font-playfair mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to receive news about seasonal menus and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white"
            />
            <button className="px-6 py-3 bg-[#D4AF37] text-[#0a0f1a] rounded-lg font-semibold hover:bg-[#c4a030] transition">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}