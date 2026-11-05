"use client";

import Link from "next/link";
import Image from "next/image";

export default function TeamAndWhatWeDoSection() {
  return (
    <section
      id="que-hacemos"
      className="relative bg-white text-[#101B1C] pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none"
      aria-label="¿Qué hacemos? — Áreas de Práctica Jervis & Espinosa"
    >
      {/* ========================================================
          CONTENEDOR («Cuadrado recto con color celeste/petrol institucional #274E54»)
          - Esquinas totalmente rectas y cuadradas (sin bordes circulares)
          - Fondo petrol/celeste institucional de Jervis & Espinosa (#274E54)
          - Enmarca el título y las 3 imágenes horizontales cuadradas
         ======================================================== */}
      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto bg-[#274E54] rounded-none border border-white/20 shadow-[0_30px_90px_-20px_rgba(39,78,84,0.45)] px-5 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16 lg:px-20 lg:py-20">
        
        {/* Título y descripción centrados dentro del contenedor petrol/celeste */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14">
          <h2
            id="que-hacemos-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-[-0.025em] text-white"
          >
            ¿Qué hacemos<span className="text-[#C6B48F]">?</span>
          </h2>
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#F1EFE9]/90 max-w-2xl mx-auto mt-4 sm:mt-5 leading-relaxed font-light text-balance">
            Diseño jurídico de alta sofisticación para estructurar inversiones, blindar operaciones corporativas y preservar patrimonios con visión global.
          </p>
        </div>

        {/* ========================================================
            LAS 3 IMÁGENES HORIZONTALES CON TEXTO
            - Esquinas totalmente rectas y cuadradas (rounded-none)
            - 100% estáticas (sin zoom ni movimiento de imagen)
            - Filtro oscuro optimizado en versión computadora para disimular compresión
            - Texto centrado que se agranda al pasar el cursor en computadora
           ======================================================== */}
        <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-7">
          
          {/* --------------------------------------------------------
              IMAGEN 1: Corporativo y transaccional (Mural Rostro / Arte Urbano)
             -------------------------------------------------------- */}
          <Link
            href="/#contacto"
            className="group relative w-full h-[150px] sm:h-[190px] md:h-[230px] lg:h-[260px] xl:h-[280px] rounded-none overflow-hidden flex items-center justify-center shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C6B48F]"
            aria-label="Corporativo y transaccional"
          >
            {/* Imagen totalmente estática (scale-100 fijo) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <Image
                src="/assets/practice-bars/practice-corporativo.jpg"
                alt=""
                fill
                unoptimized
                quality={95}
                priority
                className="object-cover object-[center_42%] scale-100 transition-opacity duration-500 opacity-90 group-hover:opacity-100"
                sizes="(max-width: 1280px) 95vw, 1200px"
              />
              {/* Filtro oscuro elegante para versión computadora: disimula ruido y maximiza contraste */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/80 md:from-black/85 md:via-black/55 md:to-black/85 transition-opacity duration-500 opacity-85 group-hover:opacity-60 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Texto interior: Centrado, crece al hacer hover en desktop */}
            <span className="relative z-10 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-tight tracking-[-0.02em] text-white text-center px-4 drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform md:group-hover:scale-[1.12]">
              Corporativo y transaccional
            </span>
          </Link>

          {/* --------------------------------------------------------
              IMAGEN 2: Resolución de conflictos (Mural Aves / Fachada Geométrica)
             -------------------------------------------------------- */}
          <Link
            href="/#contacto"
            className="group relative w-full h-[150px] sm:h-[190px] md:h-[230px] lg:h-[260px] xl:h-[280px] rounded-none overflow-hidden flex items-center justify-center shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C6B48F]"
            aria-label="Resolución de conflictos"
          >
            {/* Imagen totalmente estática (scale-100 fijo) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <Image
                src="/assets/practice-bars/practice-patrimonial.jpg"
                alt=""
                fill
                unoptimized
                quality={95}
                priority
                className="object-cover object-[center_38%] scale-100 transition-opacity duration-500 opacity-90 group-hover:opacity-100"
                sizes="(max-width: 1280px) 95vw, 1200px"
              />
              {/* Filtro oscuro elegante para versión computadora: disimula ruido y maximiza contraste */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/80 md:from-black/85 md:via-black/55 md:to-black/85 transition-opacity duration-500 opacity-85 group-hover:opacity-60 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Texto interior: Centrado, crece al hacer hover en desktop */}
            <span className="relative z-10 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-tight tracking-[-0.02em] text-white text-center px-4 drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform md:group-hover:scale-[1.12]">
              Resolución de conflictos
            </span>
          </Link>

          {/* --------------------------------------------------------
              IMAGEN 3: Tributario, capital e inversiones (Mural Chaqueta Amarilla / Calle)
             -------------------------------------------------------- */}
          <Link
            href="/#contacto"
            className="group relative w-full h-[150px] sm:h-[190px] md:h-[230px] lg:h-[260px] xl:h-[280px] rounded-none overflow-hidden flex items-center justify-center shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C6B48F]"
            aria-label="Tributario, capital e inversiones"
          >
            {/* Imagen totalmente estática (scale-100 fijo) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <Image
                src="/assets/practice-bars/practice-tributario.jpg"
                alt=""
                fill
                unoptimized
                quality={95}
                priority
                className="object-cover object-[center_32%] scale-100 transition-opacity duration-500 opacity-90 group-hover:opacity-100"
                sizes="(max-width: 1280px) 95vw, 1200px"
              />
              {/* Filtro oscuro elegante para versión computadora: disimula ruido y maximiza contraste */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/80 md:from-black/85 md:via-black/55 md:to-black/85 transition-opacity duration-500 opacity-85 group-hover:opacity-60 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Texto interior: Centrado, crece al hacer hover en desktop */}
            <span className="relative z-10 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-tight tracking-[-0.02em] text-white text-center px-4 drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform md:group-hover:scale-[1.12]">
              Tributario, capital e inversiones
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}
