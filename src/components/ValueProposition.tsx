"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ValueProposition() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".val-reveal").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0.2, y: 24 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "top 68%",
                scrub: true,
              },
            }
          );
        });
      }, root);
      return () => ctx.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={root}
      id="propuesta-de-valor"
      className="relative bg-[#101B1C] text-[#F1EFE9] pt-24 sm:pt-32 md:pt-40 pb-0 overflow-hidden border-none"
      aria-labelledby="value-heading"
    >
      {/* Top Editorial Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 mb-20 sm:mb-28">
        {/* Editorial Section Label */}
        <div className="val-reveal flex items-center gap-4 mb-10 sm:mb-14">
          <span className="w-8 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
          <span className="font-sans text-xs uppercase tracking-[0.24em] font-medium text-[#C6B48F]">
            PROPUESTA DE VALOR
          </span>
        </div>

        {/* Oversized Headline in Elegant Cormorant Garamond with Modern Accent */}
        <h2
          id="value-heading"
          className="val-reveal font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.06] tracking-[-0.025em] text-[#F1EFE9] max-w-5xl mb-16 sm:mb-20 text-balance"
        >
          No solo asesoramos. Construimos relaciones que{" "}
          <span className="font-poppins font-semibold tracking-tight text-[#F1EFE9]">
            impulsan tu crecimiento.
          </span>
        </h2>

        {/* Unified Editorial Block: Elegant letterforms */}
        <div className="val-reveal max-w-4xl space-y-6 sm:space-y-8">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#F1EFE9]/80">
            Somos un equipo que va más allá de lo tradicional: nos comprometemos con ser incondicionales en nuestro apoyo, creativos en nuestra estrategia y rigurosos en nuestra asesoría.
          </p>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#F1EFE9]/80">
            Nuestra promesa es ser tu socio estratégico, protegiendo tus intereses con los más altos estándares internacionales mientras te impulsamos y acompañamos en cada etapa de tus negocios en Ecuador.
          </p>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#F1EFE9]/80">
            Conocemos profundamente el mercado ecuatoriano y prestamos servicios con excelencia técnica en áreas neurálgicas, anticipando contingencias para brindar certezas sólidas en entornos dinámicos.
          </p>
        </div>
      </div>

      {/* Full-bleed Guayaquil Image Slogan Banner: No top/bottom fade, compact height cropped top & bottom */}
      <div className="val-reveal relative w-full h-[320px] sm:h-[380px] md:h-[440px] flex items-center overflow-hidden px-6 sm:px-12 lg:px-24 select-none">
        {/* Background Image of Cerro Santa Ana, Guayaquil in ultra high resolution */}
        <Image
          src="/assets/editorial/compromiso-guayaquil.jpg"
          alt="Cerro Santa Ana, Guayaquil"
          fill
          priority={false}
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_48%]"
        />

        {/* Uniform dark filter across the entire image */}
        <div className="absolute inset-0 bg-[#101B1C]/60 pointer-events-none" />

        {/* Slogan Content aligned with standard page margins */}
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="w-8 sm:w-12 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] font-medium text-[#C6B48F]">
                NUESTRO COMPROMISO
              </span>
            </div>

            <blockquote className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F1EFE9] leading-[1.14] tracking-[-0.02em] text-balance">
              “Somos tu equipo,
              <br />
              tú nuestra prioridad.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
