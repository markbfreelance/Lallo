import Link from "next/link";
import { Home, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-river-950 flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-river-800/30 via-transparent to-transparent pointer-events-none" />

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40 C200 0 400 80 600 40 C800 0 1000 80 1200 40 L1200 80 L0 80 Z"
            fill="oklch(0.55 0.14 195)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-lg">
        {/* 404 Number */}
        <div className="font-heading text-[10rem] sm:text-[14rem] font-bold leading-none text-white/5 select-none mb-0 -mb-8">
          404
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
          <MapPin className="w-3 h-3 text-sun-400" />
          <span className="text-xs font-body tracking-widest uppercase text-white/80">
            Municipality of Lallo, Cagayan
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-medium text-white mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="font-body text-white/60 text-base leading-relaxed mb-10">
          The page you're looking for doesn't exist or may have been moved.
          Perhaps you drifted too far down the Cagayan River.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-river-950 font-body text-sm font-bold uppercase tracking-wide hover:scale-105 active:scale-95 transition-transform shadow-2xl shadow-black/30"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
