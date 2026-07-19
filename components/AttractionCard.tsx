import Image from "next/image";
import type { Attraction } from "@/lib/data";
import { motion } from "framer-motion";

interface AttractionCardProps {
  attraction: Attraction;
  isActive?: boolean;
}

export default function AttractionCard({ attraction, isActive = false }: AttractionCardProps) {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden group">
      {/* Background Image with slight scale based on active state */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: isActive ? 1.05 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={attraction.image}
          alt={attraction.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </motion.div>

      {/* Gradients for text legibility */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-river-950/20 to-river-950/90" />
      <div className="absolute inset-0 z-[1] bg-river-950/20 transition-opacity duration-500 group-hover:opacity-0" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] font-body uppercase tracking-widest font-bold mb-4">
            {attraction.category}
          </span>
          <h4 className="font-heading text-2xl sm:text-3xl font-medium text-white mb-2 leading-tight">
            {attraction.name}
          </h4>
        </div>
        
        {/* Hidden description that reveals on hover */}
        <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2">
          <p className="font-body text-sm text-white/80 leading-relaxed mb-3 line-clamp-3">
            {attraction.description}
          </p>
          {attraction.bestTimeToVisit && (
            <p className="text-xs font-body text-sun-400 font-medium">
              Best time: {attraction.bestTimeToVisit}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
