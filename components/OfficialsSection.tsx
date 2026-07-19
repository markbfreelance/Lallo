"use client";

import { officials } from "@/lib/data";
import OfficialCard from "./OfficialCard";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function OfficialsSection() {
  const mayor = officials.find((o) => o.role === "mayor")!;
  const viceMayor = officials.find((o) => o.role === "vice-mayor")!;
  const councilors = officials.filter((o) => o.role === "councilor").slice(0, 8);

  return (
    <section id="officials" className="py-24 sm:py-32 bg-sand-50 relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full border border-heritage-200 bg-heritage-50 text-heritage-600 text-xs font-body font-bold tracking-widest uppercase mb-6">
                Leadership
              </span>
              <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium text-sand-950 tracking-tight leading-none">
                Sangguniang <span className="text-heritage-600 italic">Bayan</span>
              </h2>
            </div>
            <p className="font-body text-sand-800/60 max-w-sm text-sm sm:text-base leading-relaxed">
              The elected leaders serving the Municipality of Lallo, dedicated to transparent governance and sustainable progress.
            </p>
          </div>
        </ScrollReveal>

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4 sm:gap-6">
          
          {/* Mayor - Spans 2 cols, 2 rows */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 md:row-span-2"
          >
            <OfficialCard official={mayor} variant="spotlight" />
          </motion.div>

          {/* Vice Mayor - Spans 2 cols, 1 row */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 lg:col-span-2 row-span-1"
          >
            <OfficialCard official={viceMayor} variant="spotlight" />
          </motion.div>

          {/* Councilors - 1 col, 1 row each */}
          {councilors.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.05), ease: [0.16, 1, 0.3, 1] }}
              className="col-span-1 row-span-1"
            >
              <OfficialCard official={c} variant="grid" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
