import Image from "next/image";

interface BrandLogoProps {
  variant?: "petrol" | "white";
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function BrandLogo({
  variant = "petrol",
  className = "w-auto h-16 sm:h-20",
  width = 380,
  height = 286,
  priority = false,
}: BrandLogoProps) {
  const src =
    variant === "white"
      ? "/assets/logo-white.png"
      : "/assets/logo-petrol.png";

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt="Jervis & Espinosa Abogados"
        width={width}
        height={height}
        priority={priority}
        className="w-full h-full object-contain pointer-events-none select-none"
      />
    </div>
  );
}
