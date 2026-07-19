interface PillBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "river" | "sun" | "heritage";
  className?: string;
}

const variantStyles: Record<NonNullable<PillBadgeProps["variant"]>, string> = {
  default: "border-heritage-200 bg-heritage-50 text-heritage-600",
  river: "border-river-200 bg-river-50 text-river-600",
  sun: "border-sun-400/30 bg-sun-400/10 text-sun-600",
  heritage: "border-heritage-200 bg-heritage-50 text-heritage-600",
};

export default function PillBadge({
  children,
  variant = "default",
  className = "",
}: PillBadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full border text-xs font-body font-bold tracking-widest uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
