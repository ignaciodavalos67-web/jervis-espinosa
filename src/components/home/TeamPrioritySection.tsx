"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TeamPrioritySection() {
  const containerRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);
  const line3Ref = useRef<SVGLineElement>(null);
  const groupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Continuous dynamic movement for all 3 colored lines
    const ctx = gsap.context(() => {
      // Line 1: Verde Claro (#B7C2B2) - Diagonal sweep
      if (line1Ref.current) {
        gsap.to(line1Ref.current, {
          x: 340,
          y: -170,
          duration: 4.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Line 2: Blanco / Marfil (#F1EFE9) - Counter-diagonal sweep
      if (line2Ref.current) {
        gsap.to(line2Ref.current, {
          x: -320,
          y: 180,
          duration: 5.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Line 3: Dorado / Champagne (#C6B48F) - Independent harmonic motion
      if (line3Ref.current) {
        gsap.to(line3Ref.current, {
          x: 290,
          y: 150,
          duration: 6.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Ambient sway of the whole geometric field
      if (groupRef.current) {
        gsap.to(groupRef.current, {
          rotation: 3,
          transformOrigin: "center center",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    // Mouse movement interactive response (Swiss dynamic subtlety)
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !groupRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
      const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(groupRef.current, {
        x: xNorm * 45,
        y: yNorm * 35,
        duration: 1.2,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      ctx.revert();
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="contacto"
      className="relative bg-white text-[#101B1C] pt-24 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-36 px-6 sm:px-12 lg:px-24 overflow-hidden flex flex-col items-center justify-center select-none border-b border-[#101B1C]/5"
      aria-label="Somos tu equipo, tú nuestra prioridad"
    >
      {/* Background Animated Diagonal Lines: 3 Distinct Colored Lines on White Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg
          className="w-full h-full opacity-85"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 700"
        >
          <g ref={groupRef}>
            {/* Línea 1: Verde Claro (#B7C2B2) */}
            <line
              ref={line1Ref}
              x1="-350"
              y1="750"
              x2="1450"
              y2="-250"
              stroke="#B7C2B2"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Línea 2: Beige Cálido (#D8CEBC) */}
            <line
              ref={line2Ref}
              x1="-250"
              y1="950"
              x2="1550"
              y2="-50"
              stroke="#D8CEBC"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Línea 3: Dorada / Champagne (#C6B48F) */}
            <line
              ref={line3Ref}
              x1="-150"
              y1="1150"
              x2="1650"
              y2="150"
              stroke="#C6B48F"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* Main Statement — High Contrast Editorial Serif */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-8">
        {/* Soft radial contrast halo that clears space behind text from background lines */}
        <div
          className="absolute inset-0 -m-12 sm:-m-24 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.75)_55%,rgba(255,255,255,0)_85%)]"
          aria-hidden="true"
        />

        <h2 className="relative z-10 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] xl:text-[6.25rem] font-semibold leading-[1.04] tracking-[-0.025em] text-[#101B1C] text-balance">
          Somos tu equipo, tú nuestra prioridad.
        </h2>

        {/* Canales y Redes Sociales: Instagram, LinkedIn, WhatsApp */}
        <div className="relative z-10 flex items-center justify-center gap-8 sm:gap-12 mt-10 sm:mt-14 text-[#101B1C]">
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-[#101B1C] hover:text-[#C6B48F] hover:scale-110 transition-all duration-300 select-none cursor-pointer"
            aria-label="Instagram"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-[#101B1C] hover:text-[#C6B48F] hover:scale-110 transition-all duration-300 select-none cursor-pointer"
            aria-label="LinkedIn"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/593999999999?text=Hola,%20quisiera%20coordinar%20una%20consulta%20con%20Jervis%20%26%20Espinosa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-[#101B1C] hover:text-[#C6B48F] hover:scale-110 transition-all duration-300 select-none cursor-pointer"
            aria-label="WhatsApp"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
