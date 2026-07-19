"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tourism", href: "#tourism" },
  { label: "Transparency", href: "#transparency" },
  { label: "Officials", href: "#officials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center pt-6 px-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl transition-all duration-500 rounded-full border ${
            scrolled
              ? "bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-white/20 py-2 px-4 sm:px-6"
              : "bg-transparent border-transparent py-4 px-2"
          }`}
        >
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div
              className={`rounded-full flex items-center justify-center font-heading font-bold transition-all duration-500 ${
                scrolled
                  ? "w-8 h-8 text-xs bg-white/20 text-white"
                  : "w-10 h-10 text-sm border border-white/30 bg-white/10 text-white"
              }`}
            >
              L
            </div>
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-white tracking-wide">
                Lallo
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-1.5 text-xs uppercase tracking-widest font-body font-medium text-white/80 hover:text-white rounded-full transition-colors group"
              >
                {link.label}
                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors" />
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col"
          >
            <div className="absolute inset-0 bg-river-950/95 backdrop-blur-3xl" onClick={() => setMobileOpen(false)} />
            
            <div className="relative p-6 flex justify-end">
              <button
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="relative flex-1 flex flex-col items-center justify-center gap-6 p-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl font-heading font-light tracking-tight text-white/90 hover:text-sun-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
