import type { Official } from "@/lib/data";
import { User } from "lucide-react";
import Image from "next/image";

interface OfficialCardProps {
  official: Official;
  variant?: "spotlight" | "grid";
}

export default function OfficialCard({
  official,
  variant = "grid",
}: OfficialCardProps) {
  const isSpotlight = variant === "spotlight";

  if (isSpotlight) {
    return (
      <div className="group relative w-full h-full min-h-[300px] rounded-3xl overflow-hidden bg-river-950 border border-river-900 shadow-xl flex flex-col md:flex-row">
        {/* Photo/Icon Side */}
        <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0 bg-river-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-river-800 to-river-950 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <User className="w-32 h-32 md:w-48 md:h-48 text-white/50 group-hover:scale-110 transition-transform duration-700" />
          </div>
          {/* Gradient fade into the content area */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-river-950 via-river-950/20 to-transparent" />
        </div>

        {/* Content Side */}
        <div className="relative p-6 sm:p-8 md:p-12 flex flex-col justify-center flex-grow -mt-20 md:mt-0 z-10">
          <p className="font-body text-xs sm:text-sm font-semibold tracking-widest uppercase text-sun-400 mb-2">
            {official.title}
          </p>
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-medium mb-6 leading-tight">
            {official.name}
          </h3>
          
          {official.quote && (
            <div className="relative pl-5 border-l-2 border-heritage-400/50">
              <p className="font-body text-sm sm:text-base text-white/80 italic leading-relaxed">
                "{official.quote}"
              </p>
            </div>
          )}

          {official.placeholder && (
            <span className="inline-block mt-6 text-[10px] uppercase tracking-wider px-3 py-1 bg-white/10 text-white/60 rounded-full font-body backdrop-blur-md self-start border border-white/10">
              Update Photo Required
            </span>
          )}
        </div>
      </div>
    );
  }

  // Grid variant
  return (
    <div className="group relative h-full rounded-2xl bg-white p-6 flex flex-col justify-between border border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-8">
        <div className="w-12 h-12 rounded-full bg-river-50 flex items-center justify-center text-river-400 group-hover:bg-river-100 group-hover:text-river-600 transition-colors">
          <User className="w-5 h-5" />
        </div>
        {official.committee && (
          <span className="text-[10px] uppercase tracking-wider font-semibold text-heritage-500 bg-heritage-50 px-2.5 py-1 rounded-full text-right max-w-[120px] truncate">
            {official.committee.replace("Committee on ", "")}
          </span>
        )}
      </div>

      <div>
        <h3 className="font-heading text-lg font-semibold text-sand-950 leading-snug">
          {official.name}
        </h3>
        <p className="font-body text-xs text-sand-800/60 mt-1 uppercase tracking-wider font-medium">
          {official.title}
        </p>
      </div>
    </div>
  );
}
