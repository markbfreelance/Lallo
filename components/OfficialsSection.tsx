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
                Municipal <span className="text-heritage-600 italic">Officials</span>
              </h2>
            </div>
            <p className="font-body text-sand-800/60 max-w-sm text-sm sm:text-base leading-relaxed">
              The elected leaders serving the Municipality of Lallo, dedicated to transparent governance and sustainable progress.
            </p>
          </div>
        </ScrollReveal>

        {/* EXECUTIVE BRANCH - OFFICE OF THE MAYOR */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-heading text-3xl font-medium text-sand-950">
                Office of the Mayor
              </h3>
              <div className="flex-1 h-px bg-black/10" />
            </div>
            <div className="w-full xl:w-5/6">
              <OfficialCard official={mayor} variant="spotlight" />
            </div>
          </div>
        </ScrollReveal>

        {/* LEGISLATIVE BRANCH - SANGGUNIANG BAYAN */}
        <ScrollReveal>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-heading text-3xl font-medium text-sand-950">
                Sangguniang Bayan
              </h3>
              <div className="flex-1 h-px bg-black/10" />
            </div>
            
            {/* Vice Mayor - Presiding Officer */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full xl:w-5/6 mb-8"
            >
              <OfficialCard official={viceMayor} variant="spotlight" />
            </motion.div>
            
            {/* BENTO BOX GRID - Councilors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4 sm:gap-6">
              {/* Councilors - 1 col, 1 row each */}
              {councilors.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 + (i * 0.05), ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-1 row-span-1"
                >
                  <OfficialCard official={c} variant="grid" />
                </motion.div>
              ))}
            </div>
            
            {/* EX-OFFICIO MEMBERS */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {officials.filter(o => o.role === "ex-officio").map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 + (i * 0.05), ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-1 h-[200px]"
                >
                  <OfficialCard official={c} variant="grid" />
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
