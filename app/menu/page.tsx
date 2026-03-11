"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  Coffee,
  Pizza,
  Wine,
  Beer,
  Sparkles,
  ChefHat,
  ArrowRight,
  Info,
} from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Menu data structure
const menuData = {
  antipasti: [
    {
      name: "Bruschetta Classica",
      description: "Grilled country bread, vine-ripened tomatoes, garlic, fresh basil, extra virgin olive oil",
      price: "$9",
      dietary: "V",
    },
    {
      name: "Polpo alla Griglia",
      description: "Grilled octopus, chickpea puree, cherry tomatoes, parsley, lemon emulsion",
      price: "$18",
      dietary: "GF",
    },
    {
      name: "Calamari Fritti",
      description: "Crispy fried calamari, spicy marinara sauce, lemon",
      price: "$14",
      dietary: "",
    },
    {
      name: "Caprese",
      description: "Fresh buffalo mozzarella, heirloom tomatoes, basil, aged balsamic, EVOO",
      price: "$13",
      dietary: "V, GF",
    },
    {
      name: "Arancini",
      description: "Saffron risotto balls filled with mozzarella and ragù, served with marinara",
      price: "$12",
      dietary: "",
    },
  ],
  pizze: [
    {
      name: "Margherita DOC",
      description: "San Marzano tomatoes, fior di latte, fresh basil, extra virgin olive oil",
      price: "$16",
      dietary: "V",
      isClassic: true,
    },
    {
      name: "Marinara",
      description: "San Marzano tomatoes, garlic, oregano, extra virgin olive oil",
      price: "$14",
      dietary: "V, Vegan",
      isClassic: true,
    },
    {
      name: "Diavola",
      description: "Spicy salami, tomato sauce, mozzarella, chili oil, oregano",
      price: "$18",
      dietary: "",
      isClassic: true,
    },
    {
      name: "Quattro Formaggi",
      description: "Mozzarella, gorgonzola, parmesan, fontina, a touch of honey",
      price: "$19",
      dietary: "V",
      isClassic: true,
    },
    {
      name: "Prosciutto e Funghi",
      description: "Ham, mushrooms, mozzarella, tomato sauce, fresh arugula",
      price: "$20",
      dietary: "",
      isClassic: true,
    },
    {
      name: "Tartufo",
      description: "Mozzarella, wild mushrooms, prosciutto cotto, truffle oil, arugula, parmesan",
      price: "$24",
      dietary: "",
      isSpecial: true,
    },
    {
      name: "Burrata e Parma",
      description: "Creamy burrata, Parma ham, rocket, cherry tomatoes, balsamic glaze",
      price: "$26",
      dietary: "",
      isSpecial: true,
    },
    {
      name: "Salsiccia e Friarielli",
      description: "Italian sausage, broccoli rabe, smoked mozzarella, chili flakes",
      price: "$23",
      dietary: "",
      isSpecial: true,
    },
  ],
  pasta: [
    {
      name: "Spaghetti alle Vongole",
      description: "Fresh clams, garlic, white wine, parsley, chili flakes",
      price: "$24",
      dietary: "",
    },
    {
      name: "Tagliatelle al Ragù",
      description: "Homemade tagliatelle, slow-cooked beef and pork ragù, parmesan",
      price: "$22",
      dietary: "",
    },
    {
      name: "Pappardelle al Cinghiale",
      description: "Wild boar ragù, red wine, juniper, parmesan",
      price: "$26",
      dietary: "",
    },
    {
      name: "Ravioli di Ricotta e Spinaci",
      description: "Homemade ricotta and spinach ravioli, sage butter, parmesan",
      price: "$21",
      dietary: "V",
    },
    {
      name: "Lasagna Classica",
      description: "Layers of pasta, ragù, béchamel, parmesan, baked to perfection",
      price: "$23",
      dietary: "",
    },
  ],
  secondi: [
    {
      name: "Bistecca alla Fiorentina",
      description: "32oz T‑bone steak, grilled over charcoal, rosemary, olive oil (serves 2)",
      price: "$85",
      dietary: "GF",
    },
    {
      name: "Branzino al Forno",
      description: "Whole roasted Mediterranean sea bass, cherry tomatoes, olives, potatoes",
      price: "$32",
      dietary: "GF",
    },
    {
      name: "Pollo al Mattone",
      description: "Pressed brick chicken, rosemary, garlic, lemon, roasted potatoes",
      price: "$26",
      dietary: "GF",
    },
    {
      name: "Melanzane alla Parmigiana",
      description: "Baked eggplant, tomato sauce, mozzarella, parmesan, basil",
      price: "$19",
      dietary: "V",
    },
  ],
  contorni: [
    { name: "Patate al Forno", description: "Roasted potatoes with rosemary and garlic", price: "$7", dietary: "V, GF" },
    { name: "Spinaci Saltati", description: "Sautéed spinach with garlic and olive oil", price: "$8", dietary: "V, GF" },
    { name: "Insalata Mista", description: "Mixed greens, cherry tomatoes, cucumber, balsamic", price: "$8", dietary: "V, GF" },
    { name: "Broccoli Rabe", description: "Sautéed with garlic and chili", price: "$9", dietary: "V, GF" },
  ],
  dolci: [
    {
      name: "Tiramisù Classico",
      description: "Layered with espresso-soaked ladyfingers, mascarpone cream, cocoa",
      price: "$9",
      dietary: "V",
    },
    {
      name: "Cannoli Siciliani",
      description: "Crispy shells filled with sweet ricotta, pistachios, chocolate chips",
      price: "$10",
      dietary: "V",
    },
    {
      name: "Panna Cotta",
      description: "Vanilla bean panna cotta, berry compote",
      price: "$9",
      dietary: "V, GF",
    },
    {
      name: "Torta della Nonna",
      description: "Traditional Italian pine nut and pastry cream tart",
      price: "$9",
      dietary: "V",
    },
  ],
  bevande: {
    vini: [
      { name: "Chianti Classico (Ruffino)", description: "Tuscany, red, dry", price: "$12 / $48" },
      { name: "Barolo (Cordero)", description: "Piedmont, red, full-bodied", price: "$18 / $72" },
      { name: "Prosecco Superiore", description: "Veneto, sparkling, crisp", price: "$10 / $40" },
      { name: "Vermentino", description: "Sardinia, white, citrus notes", price: "$9 / $36" },
    ],
    birre: [
      { name: "Moretti La Rossa", description: "Italian amber lager", price: "$7" },
      { name: "Peroni Nastro Azzurro", description: "Italian pale lager", price: "$6" },
      { name: "Birra del Borgo", description: "Italian craft IPA", price: "$8" },
    ],
    cocktails: [
      { name: "Negroni", description: "Gin, Campari, sweet vermouth", price: "$12" },
      { name: "Aperol Spritz", description: "Aperol, Prosecco, soda", price: "$11" },
      { name: "Limoncello Martini", description: "Vodka, limoncello, lemon", price: "$12" },
    ],
    analcolici: [
      { name: "San Pellegrino (Sparkling/Still)", description: "750ml", price: "$6" },
      { name: "Coca Cola / Diet Coke", description: "", price: "$4" },
      { name: "Fresh Lemonade", description: "", price: "$5" },
      { name: "Espresso / Americano", description: "", price: "$3.50" },
    ],
  },
};

// Helper component for dietary icons
const DietaryIndicator = ({ dietary }: { dietary: string }) => {
  if (!dietary) return null;
  const tags = dietary.split(", ").map((d) => d.trim());
  return (
    <div className="flex gap-1 mt-1">
      {tags.includes("V") && (
        <span className="text-[10px] uppercase bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">V</span>
      )}
      {tags.includes("Vegan") && (
        <span className="text-[10px] uppercase bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">Vegan</span>
      )}
      {tags.includes("GF") && (
        <span className="text-[10px] uppercase bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full">GF</span>
      )}
    </div>
  );
};

// Section heading component
const SectionHeading = ({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4"
    >
      {icon && <div className="text-[#D4AF37]">{icon}</div>}
      <div>
        <h2 className="text-2xl sm:text-3xl font-playfair text-white">{title}</h2>
        {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
      </div>
    </motion.div>
  );
};

// Menu item card
const MenuItem = ({
  name,
  description,
  price,
  dietary,
  isSpecial = false,
}: {
  name: string;
  description: string;
  price: string;
  dietary?: string;
  isSpecial?: boolean;
}) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className={`group relative rounded-xl border ${
        isSpecial ? "border-[#D4AF37]/40 bg-[#D4AF37]/5" : "border-white/10 bg-white/[0.04]"
      } backdrop-blur-sm p-5 transition-all hover:border-[#D4AF37]/60 hover:shadow-lg`}
    >
      {isSpecial && (
        <div className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#0A0F1A] text-xs font-bold px-3 py-1 rounded-full">
          Chef's Special
        </div>
      )}
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-lg sm:text-xl font-playfair text-white group-hover:text-[#D4AF37] transition-colors">
          {name}
        </h3>
        <span className="text-[#D4AF37] font-semibold whitespace-nowrap">{price}</span>
      </div>
      <p className="mt-2 text-sm text-gray-400 leading-relaxed">{description}</p>
      {dietary && <DietaryIndicator dietary={dietary} />}
    </motion.div>
  );
};

// Drink item (simpler)
const DrinkItem = ({
  name,
  description,
  price,
}: {
  name: string;
  description?: string;
  price: string;
}) => {
  return (
    <motion.div
      variants={fadeUp}
      className="flex justify-between items-start py-3 border-b border-white/5 last:border-0"
    >
      <div>
        <h4 className="text-white font-medium">{name}</h4>
        {description && <p className="text-xs text-gray-400 mt-0.5">{description}</p>}
      </div>
      <span className="text-[#D4AF37] text-sm whitespace-nowrap ml-4">{price}</span>
    </motion.div>
  );
};

export default function MenuPage() {
  return (
    <div className="relative min-h-screen bg-[#050B16] text-white pt-28 pb-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.10),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.05),_transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair text-white mb-4">
            Our <span className="text-[#D4AF37]">Menu</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Crafted with passion, tradition, and the finest ingredients. Each dish tells a story of Italy.
          </p>
          <div className="mt-4 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </motion.div>

        {/* Menu Sections */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Antipasti */}
          <section id="antipasti">
            <SectionHeading title="Antipasti" subtitle="Starters to awaken the palate" icon={<Coffee />} />
            <div className="grid md:grid-cols-2 gap-5">
              {menuData.antipasti.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </section>

          {/* Pizze */}
          <section id="pizze">
            <SectionHeading title="Pizze" subtitle="Wood‑fired Neapolitan‑style pizzas" icon={<Pizza />} />
            <div className="grid md:grid-cols-2 gap-5">
              {menuData.pizze.map((item) => (
                <MenuItem key={item.name} {...item} isSpecial={item.isSpecial} />
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/10 text-sm text-gray-300 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <p>All pizzas are made with 48‑hour fermented dough, San Marzano tomatoes, and fior di latte. Gluten‑free crust available (+$3).</p>
            </div>
          </section>

          {/* Pasta */}
          <section id="pasta">
            <SectionHeading title="Pasta" subtitle="Homemade fresh daily" icon={<ChefHat />} />
            <div className="grid md:grid-cols-2 gap-5">
              {menuData.pasta.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </section>

          {/* Secondi */}
          <section id="secondi">
            <SectionHeading title="Secondi" subtitle="Main courses" icon={<Sparkles />} />
            <div className="grid md:grid-cols-2 gap-5">
              {menuData.secondi.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </section>

          {/* Contorni */}
          <section id="contorni">
            <SectionHeading title="Contorni" subtitle="Side dishes" />
            <div className="grid md:grid-cols-2 gap-5">
              {menuData.contorni.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </section>

          {/* Dolci */}
          <section id="dolci">
            <SectionHeading title="Dolci" subtitle="Sweet endings" icon={<Coffee />} />
            <div className="grid md:grid-cols-2 gap-5">
              {menuData.dolci.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </section>

          {/* Bevande */}
          <section id="bevande">
            <SectionHeading title="Bevande" subtitle="Wine, beer, cocktails & more" icon={<Wine />} />
            <div className="grid md:grid-cols-2 gap-8">
              {/* Wines */}
              <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-playfair text-[#D4AF37] mb-4 flex items-center gap-2">
                  <Wine className="w-5 h-5" /> Vini
                </h3>
                <div className="space-y-1">
                  {menuData.bevande.vini.map((item) => (
                    <DrinkItem key={item.name} {...item} />
                  ))}
                </div>
              </motion.div>

              {/* Beer & Cocktails */}
              <div className="space-y-6">
                <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-xl font-playfair text-[#D4AF37] mb-4 flex items-center gap-2">
                    <Beer className="w-5 h-5" /> Birre
                  </h3>
                  <div className="space-y-1">
                    {menuData.bevande.birre.map((item) => (
                      <DrinkItem key={item.name} {...item} />
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-xl font-playfair text-[#D4AF37] mb-4">Cocktails</h3>
                  <div className="space-y-1">
                    {menuData.bevande.cocktails.map((item) => (
                      <DrinkItem key={item.name} {...item} />
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-xl font-playfair text-[#D4AF37] mb-4">Analcolici & Caffè</h3>
                  <div className="space-y-1">
                    {menuData.bevande.analcolici.map((item) => (
                      <DrinkItem key={item.name} {...item} />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-playfair text-white mb-3">Ready to dine with us?</h2>
            <p className="text-gray-400 mb-6">Reserve your table for an authentic Italian experience.</p>
            <Link
              href="/#reservation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D4AF37] text-[#0A0F1A] font-semibold hover:bg-[#c9a532] transition group"
            >
              Book a Table <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}