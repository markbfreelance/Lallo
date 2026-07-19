interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center" : ""} ${className}`}>
      <span className="inline-block px-3 py-1 rounded-full border border-heritage-200 bg-heritage-50 text-heritage-600 text-xs font-body font-bold tracking-widest uppercase mb-6">
        {eyebrow}
      </span>
      <h2 className="font-heading text-5xl sm:text-6xl font-medium text-sand-950 tracking-tight leading-none mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={`font-body text-sand-800/60 text-sm sm:text-base leading-relaxed ${
            isCenter ? "max-w-xl mx-auto" : "max-w-lg"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
