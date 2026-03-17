"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-[#050B16] text-white overflow-hidden pt-28 pb-20">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.10),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.05),_transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair text-white mb-4">
            Get in <span className="text-[#D4AF37]">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Have a question, feedback, or ready to book a table? We'd love to hear from you.
          </p>
          <div className="mt-4 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: <MapPin className="w-6 h-6" />,
              title: "Visit Us",
              content: ["Via Toledo, 123", "80134 Napoli NA, Italy"],
              action: "Get Directions",
              link: "https://maps.google.com/?q=Via+Toledo+123+Napoli",
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: "Call Us",
              content: ["+39 081 123 4567"],
              action: "Call Now",
              link: "tel:+390811234567",
            },
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email Us",
              content: ["info@vesuvio.it", "eventi@vesuvio.it"],
              action: "Send Email",
              link: "mailto:info@vesuvio.it",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 text-center group hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition">
                {card.icon}
              </div>
              <h3 className="text-xl font-playfair text-white mb-3">{card.title}</h3>
              {card.content.map((line) => (
                <p key={line} className="text-gray-300 text-sm">{line}</p>
              ))}
              <Link
                href={card.link}
                className="inline-flex items-center gap-2 mt-5 text-[#D4AF37] text-sm hover:gap-3 transition-all"
              >
                {card.action} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Map & Hours / Form Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Map and Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Interactive Map (OpenStreetMap) */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-0 h-[300px] relative overflow-hidden">
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
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8">
              <h3 className="text-xl font-playfair text-[#D4AF37] mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Opening Hours
              </h3>
              <div className="space-y-4">
                {[
                  { day: "Monday", hours: "Closed" },
                  { day: "Tuesday", hours: "12:00 – 15:00, 19:00 – 23:00" },
                  { day: "Wednesday", hours: "12:00 – 15:00, 19:00 – 23:00" },
                  { day: "Thursday", hours: "12:00 – 15:00, 19:00 – 23:00" },
                  { day: "Friday", hours: "12:00 – 15:00, 19:00 – 00:00" },
                  { day: "Saturday", hours: "12:00 – 16:00, 19:00 – 00:00" },
                  { day: "Sunday", hours: "12:00 – 16:00, 19:00 – 22:30" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                    <span className="text-white font-medium">{item.day}</span>
                    <span className="text-gray-400 text-sm">{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">*Orario continuato solo il sabato e domenica a pranzo</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8"
          >
            <h3 className="text-2xl font-playfair text-white mb-2">Send a Message</h3>
            <p className="text-gray-400 text-sm mb-6">We'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 placeholder:text-gray-400 outline-none focus:border-[#D4AF37]/60 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 placeholder:text-gray-400 outline-none focus:border-[#D4AF37]/60 transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 placeholder:text-gray-400 outline-none focus:border-[#D4AF37]/60 transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 placeholder:text-gray-400 outline-none focus:border-[#D4AF37]/60 transition resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting" || formStatus === "success"}
                className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#0A0F1A] font-semibold hover:bg-[#c9a532] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {formStatus === "idle" && (
                  <>
                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </>
                )}
                {formStatus === "submitting" && "Sending..."}
                {formStatus === "success" && (
                  <>
                    Sent! <CheckCircle className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Media & Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Social Links */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 text-center md:text-left">
            <h3 className="text-xl font-playfair text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { icon: <Instagram />, name: "Instagram", link: "https://instagram.com" },
                { icon: <Facebook />, name: "Facebook", link: "https://facebook.com" },
                { icon: <Twitter />, name: "Twitter", link: "https://twitter.com" },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Private Dining Inquiries */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#D4AF37]/10 to-transparent backdrop-blur-md p-8 text-center">
            <h3 className="text-xl font-playfair text-white mb-2">Private Dining & Events</h3>
            <p className="text-gray-300 text-sm mb-4">
              Host your next celebration with us. We offer customized menus and dedicated service.
            </p>
            <Link
              href="/private-dining"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:gap-3 transition-all"
            >
              Inquire Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}