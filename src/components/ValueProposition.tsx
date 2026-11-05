"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ValueProposition() {
  const root = useRef<HTMLElement>(null);
  const ampersandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".val-reveal").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0.15, y: 24 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                end: "top 64%",
                scrub: true,
              },
            }
          );
        });

        // Subtle ampersand watermark parallax on scroll
        if (ampersandRef.current) {
          gsap.to(ampersandRef.current, {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      }, root);
      return () => ctx.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={root}
      id="propuesta-de-valor"
      className="relative bg-[#202324] text-[#F1EFE9] pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-32 md:pb-36 px-6 sm:px-12 lg:px-24 overflow-hidden border-b border-white/10"
      aria-labelledby="value-heading"
    >
      {/* Background Ampersand Watermark (Logo Jervis & Espinosa en blanco clásico) */}
      <div
        ref={ampersandRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="relative w-[340px] sm:w-[500px] md:w-[680px] lg:w-[800px] aspect-[1024/905] opacity-[0.06] sm:opacity-[0.08]">
          <Image
            src="/assets/ampersand.png"
            alt=""
            fill
            className="object-contain pointer-events-none select-none"
            priority={false}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline — Softer, elegant and centered */}
        <h2
          id="value-heading"
          className="val-reveal font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.2] tracking-[-0.015em] text-[#F1EFE9] mx-auto mb-6 sm:mb-8 text-balance"
        >
          El valor de las decisiones bien estructuradas.
        </h2>

        {/* Supporting Copy — Centered and harmonious */}
        <p className="val-reveal font-serif text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-[#F1EFE9]/80 max-w-3xl mx-auto mb-10 sm:mb-14">
          Integramos derecho, negocios y visión financiera para asesorar a empresas, inversionistas y familias en decisiones que definen el desarrollo de sus negocios y la evolución de sus patrimonios.
        </p>

        {/* Text link: "Nuestra propuesta" (crece de forma visible y fluida al pasar el cursor) */}
        <div className="val-reveal flex justify-center pt-2">
          <Link
            href="/propuesta-de-valor"
            className="group inline-flex items-center justify-center py-4 px-8 transition-all duration-300 cursor-pointer"
            aria-label="Ir a nuestra propuesta de valor"
          >
            <span className="font-sans text-lg sm:text-xl md:text-2xl uppercase tracking-[0.22em] font-medium text-[#C6B48F] transition-all duration-300 ease-out group-hover:scale-125 group-hover:tracking-[0.26em] group-hover:text-[#F1EFE9] inline-block will-change-transform">
              Nuestra propuesta
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
