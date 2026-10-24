"use client";

interface BrandAmpersandProps {
  className?: string;
  size?: number;
}

export default function BrandAmpersand({
  className = "",
  size,
}: BrandAmpersandProps) {
  const inlineSize = size
    ? { width: `${size}px`, height: `${size}px` }
    : undefined;

  return (
    <span
      className={`brand-ampersand-icon inline-block ${size ? "" : "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"} ${className}`}
      style={{
        ...inlineSize,
        mask: "url('/assets/ampersand-mark.png') center / contain no-repeat",
        WebkitMask: "url('/assets/ampersand-mark.png') center / contain no-repeat",
        backgroundColor: "currentColor",
        verticalAlign: "middle",
      }}
      aria-hidden="true"
    />
  );
}
