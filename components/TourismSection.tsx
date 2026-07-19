"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { attractions } from "@/lib/data";
import AttractionCard from "./AttractionCard";
import ScrollReveal from "./ScrollReveal";
import { Car, Hotel, Phone, ChevronRight, ChevronLeft } from "lucide-react";

export default function TourismSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  const next = () => {
    setActiveIdx((prev) => Math.min(prev + 1, attractions.length - 1));
  };
  
  const prev = () => {
    setActiveIdx((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="tourism" className="py-24 sm:py-32 bg-river-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-river-900 via-river-950 to-river-950 opacity-50" />
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <ScrollReveal>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sun-400/30 bg-sun-400/10 text-sun-400 text-xs font-body font-bold tracking-widest uppercase mb-6">
                Discover
              </span>
              <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight leading-none mb-6">
                Things to See <span className="text-sun-400 italic font-light">& Do</span>
              </h2>
              <p className="font-body text-white/60 max-w-md text-sm sm:text-base leading-relaxed">
                From ancient archaeological sites to the mighty Cagayan River, explore a rich tapestry of heritage and culture.
              </p>
            </div>
          </ScrollReveal>

          {/* Custom Carousel Controls */}
          <ScrollReveal delay={0.2} direction="left">
            <div className="flex gap-4">
              <button 
                onClick={prev}
                disabled={activeIdx === 0}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={next}
                disabled={activeIdx === attractions.length - 1}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <div className="relative mb-24" ref={containerRef}>
          <motion.div 
            className="flex gap-6 sm:gap-8"
            animate={{ x: `calc(-${activeIdx * 100}% - ${activeIdx * 2}rem)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {attractions.map((attraction, idx) => (
              <motion.div 
                key={attraction.id}
                className="w-full md:w-[600px] flex-shrink-0"
                animate={{ opacity: activeIdx === idx ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                onClick={() => setActiveIdx(idx)}
              >
                <AttractionCard 
                  attraction={attraction} 
                  isActive={activeIdx === idx}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Plan Your Visit */}
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 sm:p-12 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
            
            <h3 className="relative font-heading text-3xl sm:text-4xl font-medium text-white mb-10 text-center">
              Plan Your Visit
            </h3>

            <div className="relative grid sm:grid-cols-3 gap-8 sm:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                  <Car className="w-6 h-6 text-sun-400" />
                </div>
                <h4 className="font-heading text-xl font-medium text-white mb-3">Getting There</h4>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  Lallo is a 45-minute drive from Tuguegarao City. Regular van and bus services are available.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                  <Hotel className="w-6 h-6 text-sun-400" />
                </div>
                <h4 className="font-heading text-xl font-medium text-white mb-3">Where to Stay</h4>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  Choose from immersive local homestays in Lallo or larger hotels in nearby Tuguegarao City.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-sun-400" />
                </div>
                <h4 className="font-heading text-xl font-medium text-white mb-3">Tourism Office</h4>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  Contact us for guided tours and assistance.<br/>
                  <span className="text-sun-400 mt-2 block">tourism@lallo.gov.ph</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
