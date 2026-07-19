"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { municipalStats } from "@/lib/data";
import { MapPin, Users, Ruler, Award } from "lucide-react";

const icons = [MapPin, Users, Ruler, Award];

function AnimatedNumber({
  value,
  suffix,
  shouldAnimate,
}: {
  value: number;
  suffix: string;
  shouldAnimate: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      current = Math.min(Math.round(increment * frame), value);
      setDisplay(current);
      if (frame >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, shouldAnimate]);

  const formatted =
    value >= 1000
      ? display.toLocaleString()
      : display.toString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export default function StatStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative -mt-1 bg-gradient-to-r from-river-900 via-river-800 to-river-900 border-t border-river-700/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {municipalStats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-heritage-400/10 mb-3 group-hover:bg-heritage-400/20 transition-colors">
                  <Icon className="w-5 h-5 text-heritage-400" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    shouldAnimate={isInView}
                  />
                </div>
                <div className="text-xs sm:text-sm font-body text-river-300 tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
