"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const titleText = "Lallo, Cagayan".split("");

export default function Hero() {
  const { scrollY } = useScroll();

  // Deeper parallax
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  const contentY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="home"
      aria-label="Hero — Welcome to Municipality of Lallo, Cagayan"
      className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="absolute inset-0 animate-ken-burns scale-110">
          <Image
            src="/images/hero.png"
            alt="Scenic view of the Cagayan River delta at golden hour in Lallo, Cagayan"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={100}
          />
        </div>
      </motion.div>

      {/* Richer Gradients */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-river-950/60 via-transparent to-river-950/90 mix-blend-multiply" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-river-950/20 to-river-950/80" />

      {/* Foreground content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-md shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-sun-400 animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            <span className="text-[10px] sm:text-xs font-body tracking-[0.2em] uppercase text-white font-semibold">
              Republic of the Philippines
            </span>
          </div>
        </motion.div>

        {/* Headline with Mask Reveal */}
        <h1 className="font-heading text-6xl sm:text-8xl md:text-[8rem] leading-[0.9] font-medium text-white mb-2 pb-6 tracking-tight flex overflow-hidden">
          {titleText.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={char === " " ? "inline-block w-3 sm:w-6" : "inline-block"}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <div className="overflow-hidden mb-12">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-2xl sm:text-4xl text-white/90 italic font-light tracking-wide drop-shadow-md"
          >
            Where the Cagayan River Meets History
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <Link
            href="#tourism"
            className="group relative overflow-hidden rounded-full px-8 py-4 bg-white text-river-950 font-body text-sm font-bold tracking-wide uppercase transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-black/20"
          >
            <span className="relative z-10">Explore Tourism</span>
            <div className="absolute inset-0 bg-gradient-to-r from-heritage-100 to-sun-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </Link>
          
          <Link
            href="#transparency"
            className="group relative rounded-full px-8 py-4 border-2 border-white/40 bg-black/20 backdrop-blur-sm text-white font-body text-sm font-bold tracking-wide uppercase overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-black/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Gov Updates
              <span className="inline-block w-6 h-[2px] bg-white group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] font-body tracking-[0.2em] uppercase text-white/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-river-900 to-transparent z-[2]" />
    </section>
  );
}
