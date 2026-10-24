"use client";

import { useEffect, useRef } from "react";
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
      className="relative bg-[#F1EFE9] text-[#101B1C] py-28 sm:py-36 md:py-48 px-6 sm:px-12 lg:px-24 overflow-hidden"
      aria-labelledby="value-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Editorial Section Label */}
        <div className="val-reveal flex items-center gap-4 mb-10 sm:mb-14">
          <span className="w-8 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
          <span className="font-sans text-xs uppercase tracking-[0.24em] font-medium text-[#101B1C]/70">
            PROPUESTA DE VALOR
          </span>
        </div>

        {/* Oversized Headline in Modern Reino Studio Poppins */}
        <h2
          id="value-heading"
          className="val-reveal font-poppins text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.06] tracking-[-0.03em] text-[#101B1C] max-w-5xl mb-16 sm:mb-20 text-balance"
        >
          No solo asesoramos. Construimos relaciones que{" "}
          <span className="font-light tracking-tight text-[#101B1C]/90">
            impulsan tu crecimiento.
          </span>
        </h2>

        {/* Unified Editorial Block: Elegant letterforms */}
        <div className="val-reveal max-w-4xl space-y-6 sm:space-y-8 mb-20 sm:mb-28">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#101B1C]/90">
            Somos un equipo que va más allá de lo tradicional: nos comprometemos con ser incondicionales en nuestro apoyo, creativos en nuestra estrategia y rigurosos en nuestra asesoría.
          </p>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#101B1C]/90">
            Nuestra promesa es ser tu socio estratégico, protegiendo tus intereses con los más altos estándares internacionales mientras te impulsamos y acompañamos en cada etapa de tus negocios en Ecuador.
          </p>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#101B1C]/90">
            Conocemos profundamente el mercado ecuatoriano y prestamos servicios con excelencia técnica en áreas neurálgicas, anticipando contingencias para brindar certezas sólidas en entornos dinámicos.
          </p>
        </div>

        {/* Standout Focal Commitment: Elegant signature quote */}
        <div className="val-reveal relative rounded-3xl bg-[#101B1C] text-[#F1EFE9] p-8 sm:p-14 md:p-20 overflow-hidden shadow-2xl">
          <div
            className="absolute -right-12 -bottom-16 w-80 h-80 opacity-[0.06] pointer-events-none select-none"
            style={{
              mask: "url('/assets/ampersand.png') center / contain no-repeat",
              WebkitMask: "url('/assets/ampersand.png') center / contain no-repeat",
              backgroundColor: "#F1EFE9",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-6 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#C6B48F]">
                NUESTRO COMPROMISO
              </span>
            </div>
            <blockquote className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F1EFE9] leading-[1.12]">
              “Somos tu equipo, tú nuestra prioridad.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
