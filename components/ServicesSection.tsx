"use client";

import { services } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  Heart,
  Stethoscope,
  Wheat,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Briefcase,
  Heart,
  Stethoscope,
  Wheat,
  ShieldCheck,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-white relative"
      aria-label="Municipal services"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <SectionHeader
              eyebrow="Resident Services"
              title={
                <>
                  How We Can{" "}
                  <span className="text-river-600 italic">Help You</span>
                </>
              }
            />
            <p className="font-body text-sand-800/60 text-sm sm:text-base leading-relaxed max-w-sm">
              The most common services available at the Lallo Municipal Hall.
              Walk-in assistance is available Monday–Friday, 8 AM–5 PM.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? FileText;
            return (
              <ScrollReveal key={service.id} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col h-full p-7 rounded-3xl bg-sand-50 border border-black/5 hover:border-river-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="mb-6 w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center shadow-sm group-hover:bg-river-50 group-hover:border-river-100 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-sand-800/50 group-hover:text-river-600 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold text-sand-950 mb-3 leading-snug group-hover:text-river-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-sand-800/60 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-xs font-body font-bold uppercase tracking-widest text-sand-800/30 group-hover:text-river-600 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
