"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

export default function TeamAndWhatWeDoSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Background animated diagonal lines on the beige canvas
  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);
  const line3Ref = useRef<SVGLineElement>(null);
  const groupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Continuous dynamic movement for all 3 colored lines across the beige canvas
    const ctx = gsap.context(() => {
      // Line 1: Verde Claro (#B7C2B2)
      if (line1Ref.current) {
        gsap.to(line1Ref.current, {
          x: 320,
          y: -160,
          duration: 7.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Line 2: Blanco (#F1EFE9)
      if (line2Ref.current) {
        gsap.to(line2Ref.current, {
          x: -300,
          y: 170,
          duration: 8.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Line 3: Dorado (#C6B48F)
      if (line3Ref.current) {
        gsap.to(line3Ref.current, {
          x: 280,
          y: 150,
          duration: 9.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Ambient sway of the geometric field
      if (groupRef.current) {
        gsap.to(groupRef.current, {
          rotation: 2.5,
          transformOrigin: "center center",
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    // Mouse movement interactive response across the entire section
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !groupRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
      const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(groupRef.current, {
        x: xNorm * 45,
        y: yNorm * 35,
        duration: 1.4,
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
      id="que-hacemos"
      className="relative bg-[#EDE9E1] text-[#101B1C] pt-16 sm:pt-24 md:pt-28 pb-24 sm:pb-32 md:pb-36 px-0 overflow-hidden select-none"
      aria-label="¿Qué hacemos? — Áreas de Práctica Jervis & Espinosa"
    >
      {/* 
        Background Animated Diagonal Lines (Lienzo Blanco exterior):
        Spans continuously across "¿Qué hacemos?" and Practice Bars
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <svg
          className="w-full h-full opacity-85"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 1400"
        >
          <g ref={groupRef}>
            {/* Línea 1: Verde Claro (#B7C2B2) */}
            <line
              ref={line1Ref}
              x1="-300"
              y1="820"
              x2="1500"
              y2="-80"
              stroke="#B7C2B2"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* Línea 2: Beige Cálido (#D8CEBC) */}
            <line
              ref={line2Ref}
              x1="-300"
              y1="940"
              x2="1500"
              y2="40"
              stroke="#D8CEBC"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* Línea 3: Dorada / Champagne (#C6B48F) */}
            <line
              ref={line3Ref}
              x1="-300"
              y1="1060"
              x2="1500"
              y2="160"
              stroke="#C6B48F"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* ========================================================
          HEADER EDITORIAL «¿Qué hacemos?»
         ======================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-14 sm:mb-20">
        {/* Monumental Editorial Split: Título + Enfoque */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <h2
              id="que-hacemos-heading"
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal leading-[0.92] tracking-[-0.035em] text-[#101B1C]"
            >
              ¿Qué hacemos<span className="text-[#C6B48F]">?</span>
            </h2>
          </div>

          <div className="lg:col-span-5 pb-2">
            <p className="font-serif text-lg sm:text-xl md:text-2xl font-light text-[#101B1C]/75 leading-relaxed text-balance">
              Diseño jurídico de alta sofisticación para estructurar inversiones, blindar operaciones corporativas y preservar patrimonios con visión global.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          BARRAS DE PRÁCTICA 2, 3, 4
         ======================================================== */}
      <div className="relative z-10 w-full">

        {/* 
          BARRAS DE PRÁCTICA 2, 3, 4
          - Altura monumental: 185px - 230px cada una
          - Separación vertical: 28px - 32px
          - Distribución: Izquierda → Derecha → Izquierda
          - Ancho inicial: 65vw | Ancho expandido: 100vw
          - Al desplegarse, el texto interior crece de forma prominente (scale-128)
        */}
        {/* 
          BARRAS DE PRÁCTICA:
          - Layout asimétrico escalonado con traslape vertical en computadora (cierra el vacío lateral)
          - Imágenes ampliadas de mayor impacto arquitectónico
          - Texto interactivo que se agranda al pasar el cursor
        */}
        <div className="w-full flex flex-col space-y-8 sm:space-y-10 md:space-y-0">
          {/* ========================================================
              BLOQUE 1: Tributario, capital e inversiones
              - Pegado al borde izquierdo (ampliado)
              - Imagen fija 100% estática sin zoom
              - Al hover: El texto se agranda
             ======================================================== */}
          <div className="w-full flex justify-start relative z-0">
            <Link
              href="/#contacto"
              className="group relative bg-[#9EAE9A] text-[#101B1C] h-[260px] sm:h-[300px] md:h-[345px] lg:h-[385px] xl:h-[415px] w-full md:w-[50vw] lg:w-[48vw] xl:w-[47vw] rounded-none flex items-center justify-start overflow-hidden shadow-2xl pl-8 sm:pl-14 lg:pl-18 pr-8"
              aria-label="Tributario, capital e inversiones"
            >
              {/* Fotografía de fondo: Totalmente estática */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <Image
                  src="/assets/practice-bars/practice-tributario.jpg"
                  alt=""
                  fill
                  unoptimized
                  quality={95}
                  priority
                  className="object-cover object-[center_32%] opacity-75 group-hover:opacity-90 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#9EAE9A]/65 via-[#9EAE9A]/30 to-transparent transition-opacity duration-500 opacity-70 group-hover:opacity-35 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Texto de práctica: Crece con total fluidez al pasar el cursor */}
              <span className="relative z-10 font-serif text-2xl sm:text-3xl md:text-3xl lg:text-[2.65rem] xl:text-[3.05rem] font-normal leading-tight tracking-[-0.02em] text-[#101B1C] inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left will-change-transform group-hover:scale-[1.12]">
                Tributario, capital e inversiones
              </span>
            </Link>
          </div>

          {/* ========================================================
              BLOQUE 2: Corporativo y transaccional
              - Pegado al borde derecho (con traslape vertical para cerrar el vacío)
              - Imagen fija 100% estática sin zoom
              - Al hover: El texto se agranda
             ======================================================== */}
          <div className="w-full flex justify-end md:-mt-24 lg:-mt-32 xl:-mt-38 relative z-10">
            <Link
              href="/#contacto"
              className="group relative bg-[#D5D1C3] text-[#101B1C] h-[260px] sm:h-[300px] md:h-[345px] lg:h-[385px] xl:h-[415px] w-full md:w-[50vw] lg:w-[48vw] xl:w-[47vw] rounded-none flex items-center justify-end overflow-hidden shadow-2xl pr-8 sm:pr-14 lg:pr-18 pl-8"
              aria-label="Corporativo y transaccional"
            >
              {/* Fotografía de fondo: Totalmente estática */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <Image
                  src="/assets/practice-bars/practice-corporativo.jpg"
                  alt=""
                  fill
                  unoptimized
                  quality={95}
                  priority
                  className="object-cover object-[center_42%] opacity-75 group-hover:opacity-90 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-l from-[#D5D1C3]/65 via-[#D5D1C3]/30 to-transparent transition-opacity duration-500 opacity-70 group-hover:opacity-35 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Texto de práctica: Crece con total fluidez al pasar el cursor */}
              <span className="relative z-10 font-serif text-2xl sm:text-3xl md:text-3xl lg:text-[2.65rem] xl:text-[3.05rem] font-normal leading-tight tracking-[-0.02em] text-[#101B1C] inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-right will-change-transform group-hover:scale-[1.12]">
                Corporativo y transaccional
              </span>
            </Link>
          </div>

          {/* ========================================================
              BLOQUE 3: Patrimonial y trascendencia
              - Pegado al borde izquierdo (con traslape vertical para acercarse al bloque 1)
              - Imagen fija 100% estática sin zoom
              - Al hover: El texto se agranda
             ======================================================== */}
          <div className="w-full flex justify-start md:-mt-24 lg:-mt-32 xl:-mt-38 relative z-20">
            <Link
              href="/#contacto"
              className="group relative bg-[#B4A076] text-[#101B1C] h-[260px] sm:h-[300px] md:h-[345px] lg:h-[385px] xl:h-[415px] w-full md:w-[50vw] lg:w-[48vw] xl:w-[47vw] rounded-none flex items-center justify-start overflow-hidden shadow-2xl pl-8 sm:pl-14 lg:pl-18 pr-8"
              aria-label="Patrimonial y trascendencia"
            >
              {/* Fotografía de fondo: Totalmente estática */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <Image
                  src="/assets/practice-bars/practice-patrimonial.jpg"
                  alt=""
                  fill
                  unoptimized
                  quality={95}
                  priority
                  className="object-cover object-[center_38%] opacity-75 group-hover:opacity-90 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#B4A076]/65 via-[#B4A076]/30 to-transparent transition-opacity duration-500 opacity-70 group-hover:opacity-35 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Texto de práctica: Crece con total fluidez al pasar el cursor */}
              <span className="relative z-10 font-serif text-2xl sm:text-3xl md:text-3xl lg:text-[2.65rem] xl:text-[3.05rem] font-normal leading-tight tracking-[-0.02em] text-[#101B1C] inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left will-change-transform group-hover:scale-[1.12]">
                Patrimonial y trascendencia
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}