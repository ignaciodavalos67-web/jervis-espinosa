"use client";

import { useState } from "react";
import Link from "next/link";

export default function WhatWeDoSection() {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  return (
    <section
      id="que-hacemos"
      className="relative bg-[#D8CEBC] text-[#101B1C] pt-6 sm:pt-10 pb-24 sm:pb-32 md:pb-36 px-0 overflow-x-clip select-none"
      aria-labelledby="que-hacemos-heading"
    >
      <div className="w-full">
        {/* 
          BARRA 1 — TÍTULO «Qué hacemos.»
          - Fondo: verde salvia #B7C2B2
          - Centrada horizontalmente
          - Ancho inicial: 65vw | Ancho expandido: 100vw
          - Altura: 110px | 4 esquinas redondeadas: 22px
          - Texto centrado en verde noche #101B1C
          - Separación vertical: 40px con la primera área
        */}
        <div className="w-full flex justify-center mb-10 sm:mb-14 px-4 sm:px-0">
          <div
            onMouseEnter={() => setHoveredBar("title")}
            onMouseLeave={() => setHoveredBar(null)}
            className={`transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#202324] text-[#F1EFE9] h-[150px] sm:h-[175px] md:h-[185px] rounded-[26px] px-8 flex items-center justify-center cursor-default shadow-2xl overflow-hidden ${
              hoveredBar === "title" ? "w-full sm:w-[100vw]" : "w-full sm:w-[65vw]"
            }`}
          >
            <h2
              id="que-hacemos-heading"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-normal leading-none tracking-[-0.025em] whitespace-nowrap text-center select-none text-[#F1EFE9] drop-shadow-md"
            >
              ¿Qué hacemos?
            </h2>
          </div>
        </div>

        {/* 
          BARRAS DE PRÁCTICA 2, 3, 4
          - Altura: 130px cada una
          - Separación vertical: 24px
          - Distribución: Izquierda → Derecha → Izquierda
          - Ancho inicial: 65vw | Ancho expandido: 100vw
          - Duración de transición: 800ms
        */}
        <div className="w-full flex flex-col space-y-[24px]">
          {/* ========================================================
              BARRA 2: Tributario, capital e inversiones
              - Pegada al borde izquierdo (esquinas derechas redondeadas)
              - Fondo: verde salvia #B7C2B2
              - Geometría: Dos círculos grandes (180-260px) en la mitad derecha
             ======================================================== */}
          <div className="w-full flex justify-start">
            <Link
              href="/#contacto"
              onMouseEnter={() => setHoveredBar("tributario")}
              onMouseLeave={() => setHoveredBar(null)}
              className={`group relative transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#B7C2B2] text-[#101B1C] h-[130px] rounded-r-[22px] rounded-l-none flex items-center justify-between overflow-hidden shadow-2xl pl-8 sm:pl-16 lg:pl-24 pr-8 ${
                hoveredBar === "tributario" ? "w-full sm:w-[100vw]" : "w-full sm:w-[65vw]"
              }`}
              aria-label="Tributario, capital e inversiones"
            >
              {/* Geometría de fondo: Dos círculos grandes arquitectónicos */}
              <div
                className="absolute inset-0 pointer-events-none overflow-hidden z-0"
                aria-hidden="true"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1000 130"
                  preserveAspectRatio="xMaxYMid slice"
                  fill="none"
                >
                  <g className="anim-jye-circle-1">
                    <circle
                      cx="750"
                      cy="65"
                      r="105"
                      stroke="#101B1C"
                      strokeWidth="2.5"
                    />
                  </g>
                  <g className="anim-jye-circle-2">
                    <circle
                      cx="920"
                      cy="65"
                      r="125"
                      stroke="#101B1C"
                      strokeWidth="2.5"
                    />
                  </g>
                </svg>
              </div>

              {/* Texto de práctica en verde noche #101B1C */}
              <span className="relative z-10 font-serif text-lg sm:text-2xl md:text-3xl lg:text-[2.5rem] font-normal leading-none tracking-[-0.015em] text-[#101B1C] whitespace-nowrap">
                Tributario, capital e inversiones
              </span>
            </Link>
          </div>

          {/* ========================================================
              BARRA 3: Corporativo y transaccional
              - Pegada al borde derecho (esquinas izquierdas redondeadas)
              - Fondo: marfil #F1EFE9
              - Geometría: Dos diagonales largas en la mitad izquierda
             ======================================================== */}
          <div className="w-full flex justify-end">
            <Link
              href="/#contacto"
              onMouseEnter={() => setHoveredBar("corporativo")}
              onMouseLeave={() => setHoveredBar(null)}
              className={`group relative transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#F1EFE9] text-[#101B1C] h-[130px] rounded-l-[22px] rounded-r-none flex items-center justify-end overflow-hidden shadow-2xl pr-8 sm:pr-16 lg:pr-24 pl-8 ${
                hoveredBar === "corporativo" ? "w-full sm:w-[100vw]" : "w-full sm:w-[65vw]"
              }`}
              aria-label="Corporativo y transaccional"
            >
              {/* Geometría de fondo: Dos diagonales largas que cruzan la altura */}
              <div
                className="absolute inset-0 pointer-events-none overflow-hidden z-0"
                aria-hidden="true"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1000 130"
                  preserveAspectRatio="xMinYMid slice"
                  fill="none"
                >
                  <g className="anim-jye-diagonal-1">
                    <line
                      x1="120"
                      y1="160"
                      x2="280"
                      y2="-30"
                      stroke="#101B1C"
                      strokeWidth="2.5"
                    />
                  </g>
                  <g className="anim-jye-diagonal-2">
                    <line
                      x1="220"
                      y1="160"
                      x2="380"
                      y2="-30"
                      stroke="#101B1C"
                      strokeWidth="2.5"
                    />
                  </g>
                </svg>
              </div>

              {/* Texto de práctica en verde noche #101B1C */}
              <span className="relative z-10 font-serif text-lg sm:text-2xl md:text-3xl lg:text-[2.5rem] font-normal leading-none tracking-[-0.015em] text-[#101B1C] whitespace-nowrap">
                Corporativo y transaccional
              </span>
            </Link>
          </div>

          {/* ========================================================
              BARRA 4: Patrimonial y trascendencia
              - Pegada al borde izquierdo (esquinas derechas redondeadas)
              - Fondo: champagne #C6B48F
              - Geometría: Dos arcos grandes en la mitad derecha
             ======================================================== */}
          <div className="w-full flex justify-start">
            <Link
              href="/#contacto"
              onMouseEnter={() => setHoveredBar("patrimonial")}
              onMouseLeave={() => setHoveredBar(null)}
              className={`group relative transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#C6B48F] text-[#101B1C] h-[130px] rounded-r-[22px] rounded-l-none flex items-center justify-between overflow-hidden shadow-2xl pl-8 sm:pl-16 lg:pl-24 pr-8 ${
                hoveredBar === "patrimonial" ? "w-full sm:w-[100vw]" : "w-full sm:w-[65vw]"
              }`}
              aria-label="Patrimonial y trascendencia"
            >
              {/* Geometría de fondo: Dos arcos grandes arquitectónicos */}
              <div
                className="absolute inset-0 pointer-events-none overflow-hidden z-0"
                aria-hidden="true"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1000 130"
                  preserveAspectRatio="xMaxYMid slice"
                  fill="none"
                >
                  <g className="anim-jye-arc-1">
                    <path
                      d="M 680 140 A 130 130 0 0 1 940 140"
                      stroke="#101B1C"
                      strokeWidth="2.5"
                      fill="none"
                    />
                  </g>
                  <g className="anim-jye-arc-2">
                    <path
                      d="M 780 150 A 150 150 0 0 1 1080 150"
                      stroke="#101B1C"
                      strokeWidth="2.5"
                      fill="none"
                    />
                  </g>
                </svg>
              </div>

              {/* Texto de práctica en verde noche #101B1C */}
              <span className="relative z-10 font-serif text-lg sm:text-2xl md:text-3xl lg:text-[2.5rem] font-normal leading-none tracking-[-0.015em] text-[#101B1C] whitespace-nowrap">
                Patrimonial y trascendencia
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
