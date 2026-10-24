"use client";

import Link from "next/link";
import BrandAmpersand from "./BrandAmpersand";

const practiceMarqueeItems = [
  "TRIBUTARIO E INVERSIONES",
  "CORPORATIVO Y COMERCIAL",
  "RESOLUCIÓN DE CONFLICTOS",
  "LEGAL FAMILY OFFICE",
  "LITIGIO ESTRATÉGICO",
  "ESTRUCTURAS FISCALES",
  "M&A & ASUNTOS SOCIETARIOS",
];

export default function PracticeAreasPreview() {
  return (
    <section
      id="areas-de-practica"
      className="relative bg-[#101B1C] text-[#F1EFE9] py-20 sm:py-28 md:py-32 px-6 sm:px-12 lg:px-24 overflow-hidden border-none"
      aria-labelledby="practices-portal-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Category Eyebrow */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <span className="w-8 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
          <span className="font-sans text-xs uppercase tracking-[0.24em] font-medium text-[#C6B48F]">
            ESPECIALIDADES LEGALES
          </span>
        </div>

        {/* 
          Interactive Portal:
          - Pure text title: ÁREAS DE PRÁCTICA (modern display Reino Studio typography)
          - Slider with zero background (only moving text) visible by default below title
        */}
        <div className="relative group w-full">
          <Link
            href="/area_de_practica"
            className="block relative w-full"
            aria-label="Explorar Áreas de Práctica"
          >
            {/* Title */}
            <div>
              <h2
                id="practices-portal-heading"
                className="font-poppins text-[clamp(2.4rem,7.4vw,9.2rem)] font-bold uppercase tracking-[-0.035em] leading-[0.95] text-[#F1EFE9] group-hover:text-[#C6B48F] transition-colors duration-500 select-none break-words"
              >
                ÁREAS DE PRÁCTICA
              </h2>
            </div>

            {/* Subtle Divider Line */}
            <div className="w-full h-[2px] bg-white/10 group-hover:bg-[#C6B48F] transition-colors duration-500 mt-8 mb-6" />

            {/* 
              Continuous Marquee Slider:
              Elegant letterforms gliding smoothly with official ampersand
            */}
            <div className="w-full overflow-hidden whitespace-nowrap select-none bg-transparent border-none py-2 sm:py-3">
              <div className="inline-flex items-center gap-10 sm:gap-14 animate-marquee-slider">
                {[...practiceMarqueeItems, ...practiceMarqueeItems].map((item, idx) => (
                  <span
                    key={idx}
                    className="font-serif text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-wider text-[#F1EFE9]/90 inline-flex items-center gap-6 sm:gap-10"
                  >
                    <BrandAmpersand className="text-[#C6B48F] shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
