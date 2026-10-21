"use client";

interface BrandAmpersandProps {
  className?: string;
  size?: number;
}

export default function BrandAmpersand({
  className = "",
  size = 18,
}: BrandAmpersandProps) {
  return (
    <span
      className={`brand-ampersand-icon ${className}`}
      style={{
        display: "inline-block",
        width: `${size}px`,
        height: `${size}px`,
        mask: "url('/assets/ampersand-mark.png') center / contain no-repeat",
        WebkitMask: "url('/assets/ampersand-mark.png') center / contain no-repeat",
        backgroundColor: "currentColor",
        verticalAlign: "middle",
      }}
      aria-hidden="true"
    />
  );
}
