import type { Ordinance } from "@/lib/data";
import { FileText, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface OrdinanceCardProps {
  ordinance: Ordinance;
}

const categoryTagClass: Record<Ordinance["category"], string> = {
  Ordinance: "text-river-600 bg-river-50 border-river-100",
  Resolution: "text-heritage-600 bg-heritage-50 border-heritage-100",
  Advisory: "text-sun-600 bg-sun-50 border-sun-100",
  Program: "text-purple-600 bg-purple-50 border-purple-100",
};

export default function OrdinanceCard({ ordinance }: OrdinanceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const date = new Date(ordinance.dateApproved).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="group border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors">
      <div 
        className="px-4 sm:px-6 py-6 cursor-pointer flex flex-col md:flex-row md:items-center gap-4 sm:gap-6"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        
        {/* Meta / Date / Ref */}
        <div className="w-full md:w-48 flex-shrink-0">
          <p className="text-[10px] font-body tracking-widest uppercase font-semibold text-sand-800/50 mb-1">
            {date}
          </p>
          <p className="text-sm font-body font-medium text-sand-950">
            {ordinance.referenceNumber}
          </p>
        </div>

        {/* Title */}
        <div className="flex-1">
          <div className="flex items-start sm:items-center gap-3 mb-1">
            <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-md border ${categoryTagClass[ordinance.category]}`}>
              {ordinance.category}
            </span>
          </div>
          <h4 className="font-heading text-lg font-medium text-sand-950 leading-snug group-hover:text-river-700 transition-colors">
            {ordinance.title}
          </h4>
        </div>

        {/* Action Button */}
        <div className="w-full md:w-auto flex justify-end">
          <button className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 text-sand-800 hover:bg-river-600 hover:border-river-600 hover:text-white transition-all">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expandable Summary */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-6 pt-2 md:pl-[14.5rem]">
              <div className="p-4 rounded-xl bg-white border border-black/5 shadow-sm">
                <p className="font-body text-sm text-sand-800/80 leading-relaxed">
                  {ordinance.summary}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
