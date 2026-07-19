"use client";

import { useState, useMemo } from "react";
import { ordinances, newsItems } from "@/lib/data";
import OrdinanceCard from "./OrdinanceCard";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Search,
  Newspaper,
  Calendar,
  ExternalLink,
  ArrowRight,
  FileText
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const categories = ["All", "Ordinance", "Resolution", "Advisory", "Program"] as const;
type CategoryFilter = (typeof categories)[number];

export default function TransparencySection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [activeYear, setActiveYear] = useState<number | "All">("All");

  const years = useMemo(() => {
    const set = new Set(ordinances.map((o) => o.year));
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  const filtered = useMemo(() => {
    return ordinances.filter((o) => {
      const catMatch = activeCategory === "All" || o.category === activeCategory;
      const yearMatch = activeYear === "All" || o.year === activeYear;
      return catMatch && yearMatch;
    });
  }, [activeCategory, activeYear]);

  return (
    <section id="transparency" className="py-24 sm:py-32 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Full Disclosure Board Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
          {/* Section Header */}
          <div className="flex-1">
            <ScrollReveal>
              <SectionHeader
                eyebrow="Good Governance"
                title={
                  <>
                    Transparency & <span className="text-river-600 italic">Ordinances</span>
                  </>
                }
                description="Access the latest ordinances, resolutions, and programs from the Sangguniang Bayan of Lallo."
              />
            </ScrollReveal>
          </div>

          {/* Full Disclosure Board */}
          <div className="flex-1 lg:max-w-md">
            <ScrollReveal delay={0.2}>
              <div className="relative group overflow-hidden rounded-3xl bg-river-950 p-8 shadow-2xl shadow-river-900/20 border border-river-900">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                <Shield className="absolute -bottom-6 -right-6 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                    Transparency Seal
                  </h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
                    In compliance with DILG, we openly publish our financial records and procurement documents.
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    {["Statement of Receipts", "Annual Budget", "Bids & Awards"].map((label) => (
                      <a
                        key={label}
                        href="#"
                        className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-body text-white/90 hover:bg-white/10 hover:border-white/20 transition-all group/link"
                      >
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-white/50 group-hover/link:text-sun-400 transition-colors" />
                          {label}
                        </span>
                        <ArrowRight className="w-3 h-3 text-sun-400 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Filters */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            
            {/* Sliding Pill Tabs */}
            <div className="relative flex flex-wrap items-center gap-1 p-1 rounded-full bg-sand-100/50 border border-black/5 self-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2 text-xs font-body font-bold tracking-wider uppercase rounded-full transition-colors z-10 ${
                    activeCategory === cat ? "text-white" : "text-sand-800/60 hover:text-sand-950"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-river-950 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-20">{cat}</span>
                </button>
              ))}
            </div>

            {/* Year Dropdown */}
            <div className="relative w-full md:w-auto">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sand-800/40" />
              <select
                value={activeYear}
                onChange={(e) => setActiveYear(e.target.value === "All" ? "All" : Number(e.target.value))}
                className="w-full md:w-auto pl-10 pr-10 py-3 rounded-full bg-white border border-black/10 text-sm font-body font-semibold text-sand-950 appearance-none cursor-pointer focus:outline-none focus:border-river-400 focus:ring-1 focus:ring-river-400 transition-all"
              >
                <option value="All">All Years</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

          </div>
        </ScrollReveal>

        {/* Modern List Layout for Ordinances */}
        <ScrollReveal>
          <div className="border border-black/10 rounded-3xl overflow-hidden bg-white mb-24 shadow-[0_4px_24px_rgba(0,0,0,0.02)] min-h-[300px] relative">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                filtered.map((ord) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    key={ord.id}
                  >
                    <OrdinanceCard ordinance={ord} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-sand-50"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-sand-800/30" />
                  </div>
                  <h4 className="font-heading text-xl font-medium text-sand-950 mb-2">No records found</h4>
                  <p className="font-body text-sm text-sand-800/60 max-w-sm mx-auto">
                    We couldn't find any {activeCategory !== "All" ? activeCategory.toLowerCase() + "s" : "records"} from {activeYear !== "All" ? activeYear : "any year"}. Try adjusting your filters.
                  </p>
                  <button
                    onClick={() => { setActiveCategory("All"); setActiveYear("All"); }}
                    className="mt-6 px-4 py-2 rounded-full bg-river-950 text-white text-xs font-body font-bold tracking-widest uppercase hover:bg-river-800 transition-colors"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Latest News Bento */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading text-3xl font-medium text-sand-950">
              Latest Updates
            </h3>
            <a href="#" className="text-xs font-body font-bold uppercase tracking-widest text-river-600 hover:text-river-800 transition-colors">
              View All News →
            </a>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((news, i) => (
            <ScrollReveal key={news.id} delay={0.05 * i}>
              <div className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-river-100 to-heritage-100 relative overflow-hidden">
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[10px] font-body font-bold tracking-widest uppercase text-heritage-600 mb-3">
                    {new Date(news.date).toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" })}
                  </p>
                  <h4 className="font-heading text-lg font-medium text-sand-950 leading-snug mb-3 group-hover:text-river-700 transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-sm font-body text-sand-800/60 leading-relaxed mt-auto line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
