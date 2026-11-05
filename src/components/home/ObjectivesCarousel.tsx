"use client";

import { useState } from "react";

interface Pillar {
  id: string;
  title: string;
  description: string;
  shapeKey: "estrategia" | "rigor" | "trascendencia";
  lineColor: string; // Color único de cada línea
}

const pillars: Pillar[] = [
  {
    id: "estrategia",
    title: "Estrategia e Inversión",
    description:
      "Alineamos cada estructura jurídica con los objetivos financieros y de crecimiento del negocio. Diseñamos vehículos de inversión, estructuración corporativa y transacciones complejas que maximizan certezas y aceleran el valor empresarial.",
    shapeKey: "estrategia",
    lineColor: "#B7C2B2", // Verde salvia
  },
  {
    id: "rigor",
    title: "Rigor & Mitigación de Riesgos",
    description:
      "Construimos estructuras preventivas con matemática exactitud jurídica. Anticipamos contingencias regulatorias, fiscales y societarias mediante blindajes normativos diseñados para resguardar la continuidad y la solvencia institucional.",
    shapeKey: "rigor",
    lineColor: "#C6B48F", // Dorado champagne
  },
  {
    id: "trascendencia",
    title: "Trascendencia Patrimonial",
    description:
      "Diseñamos protocolos de gobernanza familiar, fideicomisos y arquitecturas sucesorias que garantizan una transición patrimonial armónica y protegen el legado de familias empresariales a través de las generaciones.",
    shapeKey: "trascendencia",
    lineColor: "#E5DDCF", // Marfil / Blanco cálido
  },
];

export default function ObjectivesCarousel() {
  // Trascendencia Patrimonial activa por defecto (índice 2)
  const [activeIdx, setActiveIdx] = useState(2);
  const activePillar = pillars[activeIdx];

  // Dynamic Theme according to active objective:
  // 0 -> Blanco puro (bg-white)
  // 1 -> Gris oscuro (#202324)
  // 2 -> Celeste / Petrol Jervis & Espinosa (#274E54)
  const themeClasses = [
    "bg-white text-[#101B1C]",
    "bg-[#202324] text-[#F1EFE9]",
    "bg-[#274E54] text-[#F1EFE9]",
  ][activeIdx];

  const wireframeLineColor = [
    "#101B1C", // Verde oscuro sobre fondo blanco
    "#B7C2B2", // Verde salvia sobre fondo gris
    "#E5DDCF", // Marfil / Blanco cálido sobre fondo celeste/petrol
  ][activeIdx];

  return (
    <section
      id="nuestro-objetivo"
      className={`relative w-full pt-6 sm:pt-10 md:pt-12 pb-24 sm:pb-32 md:pb-40 px-6 sm:px-12 lg:px-20 overflow-hidden select-none transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${themeClasses}`}
      aria-label="Nuestro objetivo es cumplir tus objetivos"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ========================================================
            LAYOUT MÓVIL (Versión Teléfono):
            1. Animación arriba (más grande)
            2. Título de "Nuestro objetivo es cumplir tus objetivos" debajo de la animación
            3. Objetivo activo (Título + Descripción)
            4. Las 3 líneas interactivas de cambio
           ======================================================== */}
        <div className="flex flex-col md:hidden">
          {/* 1. ANIMACIÓN ARRIBA */}
          <div className="w-full flex justify-center mb-8">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square flex items-center justify-center">
              <KineticSculpture
                activeShape={activePillar.shapeKey}
                lineColor={wireframeLineColor}
              />
            </div>
          </div>

          {/* 2. TÍTULO DEBAJO DE LA ANIMACIÓN */}
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-[-0.025em] text-balance">
              Nuestro objetivo es cumplir tus objetivos
            </h2>
          </div>

          {/* 3. SUBTÍTULO (OBJETIVO ACTIVO) Y SU DESCRIPCIÓN */}
          <div className="text-center mb-10 px-2 min-h-[160px] flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-3 transition-all duration-500">
              {activePillar.title}
            </h3>
            <p className="font-serif text-base sm:text-lg leading-relaxed opacity-85 transition-opacity duration-500">
              {activePillar.description}
            </p>
          </div>

          {/* 4. LAS 3 LÍNEAS DE CAMBIO (Interactivas, más anchas, crecen al toque/hover) */}
          <div className="flex items-center gap-3 w-full max-w-xs mx-auto pt-4">
            {pillars.map((pillar, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Cambiar a ${pillar.title}`}
                  className="flex-1 py-3 group focus:outline-none cursor-pointer"
                >
                  <div
                    style={{ backgroundColor: pillar.lineColor }}
                    className={`rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? "h-[6px] opacity-100 shadow-md scale-y-110"
                        : "h-[4px] opacity-40 group-hover:h-[6px] group-hover:opacity-90"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            LAYOUT DESCRITORIO (Desktop Editorial Asimétrico):
            - Columna Izquierda: Título general + Título del objetivo + Descripción + Líneas
            - Columna Derecha: Escultura Paramétrica Viva (más grande y protagónica)
           ======================================================== */}
        <div className="hidden md:grid grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Columna Izquierda: Textos y Controladores */}
          <div className="col-span-6 lg:col-span-6 space-y-8 pr-2">
            {/* Título de la sección */}
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-normal leading-[1.08] tracking-[-0.025em]">
              Nuestro objetivo es cumplir tus objetivos<span style={{ color: activePillar.lineColor }}>.</span>
            </h2>

            {/* Objetivo Activo (Inspirado en la imagen de Lenz & Staehelin: Stronger, together) */}
            <div className="space-y-4 pt-4 border-t border-current/15 min-h-[220px] flex flex-col justify-center">
              <h3 className="font-serif text-3xl lg:text-4xl xl:text-[2.75rem] font-medium leading-tight tracking-[-0.02em] transition-all duration-500">
                {activePillar.title}
              </h3>
              <p className="font-serif text-lg lg:text-xl font-light leading-relaxed opacity-85 max-w-2xl transition-opacity duration-500">
                {activePillar.description}
              </p>
            </div>

            {/* Selector de 3 Líneas de Colores (Estilo Lenz & Staehelin)
                - Cada línea es de un color diferente
                - Son más anchas
                - Crecen cuando el cursor pasa por encima
            */}
            <div className="pt-6">
              <div className="flex items-center gap-4 max-w-md" role="tablist">
                {pillars.map((pillar, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Cambiar a ${pillar.title}`}
                      onMouseEnter={() => setActiveIdx(idx)}
                      onClick={() => setActiveIdx(idx)}
                      className="flex-1 py-4 group focus:outline-none cursor-pointer relative"
                    >
                      <div
                        style={{ backgroundColor: pillar.lineColor }}
                        className={`rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive
                            ? "h-[6px] opacity-100 shadow-md scale-y-125"
                            : "h-[4px] opacity-35 group-hover:opacity-90 group-hover:h-[7px] group-hover:scale-y-150"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Escultura Paramétrica Viva Ampliada */}
          <div className="col-span-6 lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[500px] lg:max-w-[580px] xl:max-w-[650px] aspect-square flex items-center justify-center p-2">
              <KineticSculpture
                activeShape={activePillar.shapeKey}
                lineColor={wireframeLineColor}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// ESCULTURA VECTORIAL VIVA (Líneas Verdes)
// - Forma 1 (Estrategia): Lente parabólica concéntrica Macfarlanes
// - Forma 2 (Rigor): Red ortogonal de rombos concéntricos y calibradores de alta precisión
// - Forma 3 (Trascendencia): Lazos armónicos continuos de transición intergeneracional
// =========================================================================
function KineticSculpture({
  activeShape,
  lineColor,
}: {
  activeShape: "estrategia" | "rigor" | "trascendencia";
  lineColor: string;
}) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 
        =================================================================
        FORMA 1: ESTRATEGIA E INVERSIÓN (Spindle Parabólico Macfarlanes)
        =================================================================
      */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          activeShape === "estrategia"
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          className="w-full h-full animate-[spin_45s_linear_infinite]"
        >
          {/* Vertical axis line */}
          <line
            x1="200"
            y1="20"
            x2="200"
            y2="380"
            stroke={lineColor}
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />
          {/* Horizontal axis line */}
          <line
            x1="20"
            y1="200"
            x2="380"
            y2="200"
            stroke={lineColor}
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />

          {/* Concentric vertical lens arcs (Macfarlanes guilloché left side) */}
          {[22, 40, 58, 76, 94, 112, 130, 148, 166, 184].map((offset, i) => (
            <path
              key={`lens-l-${i}`}
              d={`M 200 30 Q ${200 - offset} 200 200 370`}
              stroke={lineColor}
              strokeWidth={i % 2 === 0 ? "1.6" : "1.1"}
              strokeOpacity={0.85 - i * 0.05}
            />
          ))}

          {/* Concentric vertical lens arcs (Macfarlanes guilloché right side) */}
          {[22, 40, 58, 76, 94, 112, 130, 148, 166, 184].map((offset, i) => (
            <path
              key={`lens-r-${i}`}
              d={`M 200 30 Q ${200 + offset} 200 200 370`}
              stroke={lineColor}
              strokeWidth={i % 2 === 0 ? "1.6" : "1.1"}
              strokeOpacity={0.85 - i * 0.05}
            />
          ))}

          {/* Upper converging parabolic clefts */}
          {[25, 45, 65, 85, 105, 125].map((h, i) => (
            <path
              key={`cleft-t-${i}`}
              d={`M ${200 - h} 200 Q 200 ${200 - h * 1.3} ${200 + h} 200`}
              stroke={lineColor}
              strokeWidth="1.2"
              strokeOpacity={0.7 - i * 0.08}
            />
          ))}

          {/* Lower converging parabolic clefts */}
          {[25, 45, 65, 85, 105, 125].map((h, i) => (
            <path
              key={`cleft-b-${i}`}
              d={`M ${200 - h} 200 Q 200 ${200 + h * 1.3} ${200 + h} 200`}
              stroke={lineColor}
              strokeWidth="1.2"
              strokeOpacity={0.7 - i * 0.08}
            />
          ))}

          {/* Center focal nodes */}
          <circle cx="200" cy="200" r="4" fill={lineColor} />
          <circle cx="200" cy="30" r="3" fill={lineColor} />
          <circle cx="200" cy="370" r="3" fill={lineColor} />
        </svg>
      </div>

      {/* 
        =================================================================
        FORMA 2: RIGOR & MITIGACIÓN (Red Ortogonal de Precisión y Blindaje)
        =================================================================
      */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          activeShape === "rigor"
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          className="w-full h-full animate-[spin_60s_linear_infinite]"
        >
          {/* Outer circular caliper guides */}
          <circle
            cx="200"
            cy="200"
            r="185"
            stroke={lineColor}
            strokeWidth="1.2"
            strokeDasharray="4 6"
            strokeOpacity="0.45"
          />
          <circle
            cx="200"
            cy="200"
            r="145"
            stroke={lineColor}
            strokeWidth="1"
            strokeOpacity="0.3"
          />

          {/* Concentric mathematical diamonds (Rombos concéntricos de rigor) */}
          {[170, 145, 120, 95, 70, 48, 28].map((size, i) => (
            <polygon
              key={`diamond-${i}`}
              points={`200,${200 - size} ${200 + size},200 200,${200 + size} ${200 - size},200`}
              stroke={lineColor}
              strokeWidth={i % 2 === 0 ? "1.8" : "1.2"}
              strokeOpacity={0.9 - i * 0.08}
            />
          ))}

          {/* Intersecting diagonal tension cross-braces */}
          <line
            x1="45"
            y1="45"
            x2="355"
            y2="355"
            stroke={lineColor}
            strokeWidth="1.4"
            strokeOpacity="0.75"
          />
          <line
            x1="355"
            y1="45"
            x2="45"
            y2="355"
            stroke={lineColor}
            strokeWidth="1.4"
            strokeOpacity="0.75"
          />

          {/* Secondary structural tension chords */}
          <line
            x1="200"
            y1="30"
            x2="200"
            y2="370"
            stroke={lineColor}
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
          <line
            x1="30"
            y1="200"
            x2="370"
            y2="200"
            stroke={lineColor}
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />

          {/* Caliper ticks along the axes */}
          {[-120, -80, -40, 40, 80, 120].map((pos, i) => (
            <g key={`tick-${i}`}>
              <line
                x1={200 + pos}
                y1="195"
                x2={200 + pos}
                y2="205"
                stroke={lineColor}
                strokeWidth="1.2"
              />
              <line
                x1="195"
                y1={200 + pos}
                x2="205"
                y2={200 + pos}
                stroke={lineColor}
                strokeWidth="1.2"
              />
            </g>
          ))}

          {/* Solid central lock coordinate */}
          <rect
            x="195"
            y="195"
            width="10"
            height="10"
            fill={lineColor}
            transform="rotate(45 200 200)"
          />
        </svg>
      </div>

      {/* 
        =================================================================
        FORMA 3: TRASCENDENCIA PATRIMONIAL (Lazos Armónicos de Transición)
        =================================================================
      */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          activeShape === "trascendencia"
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          className="w-full h-full animate-[spin_50s_linear_infinite]"
        >
          {/* Concentric infinity loops representing generational transition */}
          {[1, 2, 3, 4, 5, 6, 7].map((step, i) => {
            const spread = step * 12;
            const r = 40 + step * 16;
            return (
              <g key={`infinity-group-${i}`}>
                {/* Left generational orbit */}
                <path
                  d={`M 200 200 C ${160 - spread} ${120 - spread}, ${90 - spread} ${
                    140 + spread
                  }, ${140} ${200 + spread * 0.5} C ${180} ${
                    230 + spread * 0.5
                  }, 200 200, 200 200`}
                  stroke={lineColor}
                  strokeWidth="1.3"
                  strokeOpacity={0.8 - i * 0.08}
                />
                {/* Right generational orbit (Harmonic transition crossing) */}
                <path
                  d={`M 200 200 C ${240 + spread} ${120 - spread}, ${310 + spread} ${
                    140 + spread
                  }, ${260} ${200 + spread * 0.5} C ${220} ${
                    230 + spread * 0.5
                  }, 200 200, 200 200`}
                  stroke={lineColor}
                  strokeWidth="1.3"
                  strokeOpacity={0.8 - i * 0.08}
                />
                {/* Encircling harmonic rings */}
                <ellipse
                  cx="200"
                  cy="200"
                  rx={r * 1.4}
                  ry={r * 0.75}
                  stroke={lineColor}
                  strokeWidth="1.1"
                  strokeOpacity={0.45 - i * 0.05}
                  transform={`rotate(${i * 18} 200 200)`}
                />
              </g>
            );
          })}

          {/* Concentric orbital rings of perpetual legacy */}
          <circle
            cx="200"
            cy="200"
            r="175"
            stroke={lineColor}
            strokeWidth="1.2"
            strokeDasharray="6 8"
            strokeOpacity="0.4"
          />

          {/* Central convergence node */}
          <circle cx="200" cy="200" r="5" fill={lineColor} />
          <circle cx="140" cy="200" r="3" fill={lineColor} opacity="0.7" />
          <circle cx="260" cy="200" r="3" fill={lineColor} opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}
