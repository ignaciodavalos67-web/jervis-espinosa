"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface PracticeWorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  href?: string;
  services: string[];
}

const practiceWorksItems: PracticeWorkItem[] = [
  {
    id: "tributario",
    title: "TRIBUTARIO E INVERSIONES",
    category: "Estructuras Fiscales & Capital",
    image: "/assets/editorial/practice-tributario.jpg",
    alt: "Asesoría tributaria y planificación fiscal internacional",
    href: "/#contacto",
    services: [
      "Planificación fiscal",
      "Private Wealth",
      "Inversiones transfronterizas",
      "Litigio contencioso-tributario",
      "Planificación sucesoria",
    ],
  },
  {
    id: "corporativo",
    title: "CORPORATIVO Y COMERCIAL",
    category: "Sociedades, Fusiones & M&A",
    image: "/assets/editorial/practice-corporativo.png",
    alt: "Derecho corporativo y transacciones comerciales complejas",
    href: "/#contacto",
    services: [
      "Aterrizaje corporativo en Ecuador",
      "M&A y venta de activos",
      "Reestructuraciones de grupos",
      "Gobernanza ESG",
    ],
  },
  {
    id: "litigio",
    title: "RESOLUCIÓN DE CONFLICTOS",
    category: "Litigio Estratégico & Arbitraje",
    image: "/assets/editorial/practice-litigio.png",
    alt: "Resolución de conflictos y arbitraje",
    href: "/#contacto",
    services: [
      "Arbitraje comercial",
      "Negociación de controversias",
      "Litigio constitucional",
      "Conflictos societarios",
    ],
  },
  {
    id: "legal-family-office",
    title: "LEGAL FAMILY OFFICE",
    category: "Gobernanza & Patrimonio Familiar",
    image: "/assets/editorial/practice-family-office.png",
    alt: "Legal Family Office y gobernanza familiar",
    href: "/#contacto",
    services: [
      "Protocolos familiares",
      "Fideicomisos y vehículos de inversión",
      "Sucesión estratégica",
      "Protección de activos",
    ],
  },
];

export default function PracticeAreasSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const workItems = containerRef.current?.querySelectorAll(".practice-work-item");
        if (!workItems) return;

        workItems.forEach((element) => {
          const title = element.querySelector(".practice-work-title");
          const image = element.querySelector(".practice-work-image");
          const desc = element.querySelector(".practice-work-description");

          // 1. Title entrance
          if (title) {
            gsap.from(title, {
              opacity: 0.2,
              y: 20,
              duration: 0.8,
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                end: "top 65%",
                scrub: 0.5,
              },
            });
          }

          // 2. Image subtle scroll scale
          if (image) {
            gsap.to(image, {
              scale: 1.05,
              duration: 1.5,
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            });
          }

          // 3. Description entrance
          if (desc) {
            gsap.from(desc, {
              opacity: 0.3,
              y: 15,
              duration: 0.8,
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 70%",
                scrub: 0.5,
              },
            });
          }
        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="areas-de-practica"
      className="relative bg-[#101B1C] text-[#F1EFE9] pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-24 px-6 sm:px-12 lg:px-24 overflow-hidden border-none"
      aria-labelledby="practices-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <h2
            id="practices-heading"
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold uppercase tracking-[0.04em] leading-[0.98] text-[#F1EFE9]"
          >
            ÁREAS DE PRÁCTICA
          </h2>
        </div>

        {/* Works List without numbering and with tighter spacing */}
        <div className="space-y-14 sm:space-y-18 md:space-y-24">
          {practiceWorksItems.map((item, index) => {
            const rhythm = (index % 4) + 1; // 1, 2, 3, 4
            const isRightAligned = rhythm === 2 || rhythm === 4;

            const widthClass =
              rhythm === 1
                ? "md:max-w-[70%]"
                : rhythm === 2
                ? "md:max-w-[78%] md:ml-auto"
                : rhythm === 3
                ? "md:max-w-[66%]"
                : "md:max-w-[74%] md:ml-auto";

            return (
              <article
                key={item.id}
                id={item.id}
                className={`practice-work-item relative w-full ${widthClass}`}
              >
                <div className={`relative w-full ${isRightAligned ? "md:text-right" : "text-left"}`}>
                  {/* Work Title */}
                  <div className="relative z-10 mb-3 sm:mb-4">
                    {item.category && (
                      <span className="block font-sans text-xs uppercase tracking-[0.2em] font-medium text-[#C6B48F] mb-2">
                        {item.category}
                      </span>
                    )}
                    <h3 className="practice-work-title font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.02em] text-[#F1EFE9] leading-[1.08]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Media (Image with overflow hidden & scale transition) */}
                  <div className="relative w-full aspect-[16/9] max-h-[440px] overflow-hidden my-3 sm:my-4 bg-[#172628] z-10 rounded-sm">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 75vw"
                      className="practice-work-image object-cover transition-transform duration-700 ease-out hover:scale-105"
                      priority={index === 0}
                    />
                    {/* Light green tint filter */}
                    <div className="absolute inset-0 bg-[#101B1C]/25 mix-blend-multiply pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-[#143234]/20 mix-blend-color pointer-events-none z-10" />
                  </div>

                  {/* Work Services as Clean Text Below Media */}
                  <div className="relative z-10 pt-1">
                    {item.services && item.services.length > 0 && (
                      <ul
                        className={`practice-work-description flex flex-wrap items-center gap-x-4 gap-y-1.5 font-serif text-sm sm:text-base font-light text-[#F1EFE9]/85 tracking-wide ${
                          isRightAligned ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        {item.services.map((service, sIdx) => (
                          <li key={sIdx} className="inline-flex items-center gap-2">
                            {sIdx > 0 && (
                              <span
                                className="w-1 h-1 rounded-full bg-[#C6B48F]/80"
                                aria-hidden="true"
                              />
                            )}
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
