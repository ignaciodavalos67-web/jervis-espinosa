"use client";

import Link from "next/link";
import BrandAmpersand from "./BrandAmpersand";

const sectorMarqueeItems = [
  "TELECOMUNICACIONES",
  "TECNOLOGÍAS FINANCIERAS",
  "ENERGÍA & RECURSOS NATURALES",
  "INMOBILIARIO & CONSTRUCCIÓN",
  "INFRAESTRUCTURA DIGITAL",
  "FINTECH & MERCADOS",
  "REGULACIÓN ESTRATÉGICA",
];

export default function SectorsPreview() {
  return (
    <section
      id="sectores"
      className="relative bg-[#101B1C] text-[#F1EFE9] pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-6 sm:px-12 lg:px-24 overflow-hidden border-none"
      aria-labelledby="sectors-portal-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Category Eyebrow */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <span className="w-8 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
          <span className="font-poppins text-xs uppercase tracking-[0.24em] font-medium text-[#C6B48F]">
            INDUSTRIAS NEURÁLGICAS
          </span>
        </div>

        {/* 
          Interactive Portal:
          - Pure text title: SECTORES (no circular arrow)
          - Slider with zero background (only moving text) visible by default below title
        */}
        <div className="relative group w-full">
          <Link
            href="/sectores"
            className="block relative w-full"
            aria-label="Explorar Sectores"
          >
            {/* Title */}
            <div>
              <h2
                id="sectors-portal-heading"
                className="font-poppins text-[clamp(2.4rem,7.4vw,9.2rem)] font-bold uppercase tracking-[-0.035em] leading-[0.95] text-[#F1EFE9] group-hover:text-[#C6B48F] transition-colors duration-500 select-none break-words"
              >
                SECTORES
              </h2>
            </div>

            {/* Subtle Divider Line */}
            <div className="w-full h-[2px] bg-white/10 group-hover:bg-[#C6B48F] transition-colors duration-500 mt-8 mb-6" />

            {/* 
              Continuous Marquee Slider:
              Zero background, zero borders — pure moving text letters!
            */}
            <div className="w-full overflow-hidden whitespace-nowrap select-none bg-transparent border-none py-2 sm:py-3">
              <div className="inline-flex items-center gap-10 sm:gap-14 animate-marquee-slider">
                {[...sectorMarqueeItems, ...sectorMarqueeItems].map((item, idx) => (
                  <span
                    key={idx}
                    className="font-poppins text-lg sm:text-2xl md:text-3xl font-medium uppercase tracking-tight text-[#F1EFE9]/85 inline-flex items-center gap-6 sm:gap-10"
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
