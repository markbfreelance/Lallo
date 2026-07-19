"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { attractions } from "@/lib/data";
import AttractionCard from "./AttractionCard";
import ScrollReveal from "./ScrollReveal";
import { Car, Hotel, Phone, ChevronRight, ChevronLeft } from "lucide-react";

export default function TourismSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const scrollLeft = card.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2);
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  const next = () => scrollToIndex(Math.min(activeIdx + 1, attractions.length - 1));
  const prev = () => scrollToIndex(Math.max(activeIdx - 1, 0));

  // Sync activeIdx with scroll position natively
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const cards = container.children;
        let closestIdx = 0;
        let minDistance = Infinity;
        const containerCenter = window.innerWidth / 2;

        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLElement;
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + (rect.width / 2);
          const distance = Math.abs(containerCenter - cardCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestIdx = i;
          }
        }
        setActiveIdx(closestIdx);
      }, 50); // Small debounce for performance
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]); // Depends on activeIdx so prev/next use current state

  return (
    <section id="tourism" className="py-24 sm:py-32 bg-river-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-river-900 via-river-950 to-river-950 opacity-50" />
      
      <div className="max-w-[90rem] mx-auto relative z-10">
        
        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
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
                aria-label="Previous attraction"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={next}
                disabled={activeIdx === attractions.length - 1}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                aria-label="Next attraction"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Native Scroll Carousel */}
        <div className="relative mb-10 w-[100vw] left-1/2 -translate-x-1/2">
          <div 
            ref={carouselRef}
            className="flex gap-5 sm:gap-8 overflow-x-auto snap-x snap-mandatory px-[7.5vw] md:px-[calc(50vw-300px)] pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {attractions.map((attraction, idx) => (
              <div 
                key={attraction.id}
                className="w-[85vw] md:w-[600px] flex-shrink-0 snap-center transition-all duration-500 cursor-pointer"
                style={{ 
                  opacity: activeIdx === idx ? 1 : 0.35, 
                  transform: `scale(${activeIdx === idx ? 1 : 0.95})` 
                }}
                onClick={() => scrollToIndex(idx)}
              >
                <AttractionCard 
                  attraction={attraction} 
                  isActive={activeIdx === idx}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Pagination */}
        <div className="flex items-center justify-center gap-2 mb-24">
          {attractions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeIdx === idx
                  ? "w-8 h-2 bg-sun-400"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Plan Your Visit */}
        <div className="px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 px-6 py-10 sm:p-12 backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
            
            <h3 className="relative font-heading text-3xl sm:text-4xl font-medium text-white mb-10 text-center">
              Plan Your Visit
            </h3>

            <div className="relative grid sm:grid-cols-3 gap-10 sm:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 sm:mb-6">
                  <Car className="w-6 h-6 text-sun-400" />
                </div>
                <h4 className="font-heading text-xl font-medium text-white mb-2 sm:mb-3">Getting There</h4>
                <p className="font-body text-sm text-white/60 leading-relaxed max-w-[260px] sm:max-w-none">
                  Lallo is a 45-minute drive from Tuguegarao City. Regular van and bus services are available.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 sm:mb-6">
                  <Hotel className="w-6 h-6 text-sun-400" />
                </div>
                <h4 className="font-heading text-xl font-medium text-white mb-2 sm:mb-3">Where to Stay</h4>
                <p className="font-body text-sm text-white/60 leading-relaxed max-w-[260px] sm:max-w-none">
                  Choose from immersive local homestays in Lallo or larger hotels in nearby Tuguegarao City.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 sm:mb-6">
                  <Phone className="w-6 h-6 text-sun-400" />
                </div>
                <h4 className="font-heading text-xl font-medium text-white mb-2 sm:mb-3">Tourism Office</h4>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  Contact us for guided tours and assistance.<br/>
                  <span className="text-sun-400 mt-2 block">tourism@lallo.gov.ph</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
