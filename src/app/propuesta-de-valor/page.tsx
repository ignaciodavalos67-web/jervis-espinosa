import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Propuesta de Valor | Jervis & Espinosa",
  description:
    "Construimos valor, protegemos lo que trasciende y perfeccionamos las estructuras que respaldan tu futuro. Conoce la filosofía y visión de Jervis & Espinosa.",
};

const valuePillars = [
  {
    tag: "01 / VISIÓN INTEGRAL",
    title: "Derecho, Negocios & Estrategia",
    description:
      "Entendemos que el derecho no es un fin en sí mismo, sino una herramienta para viabilizar negocios, optimizar inversiones y catalizar el crecimiento sostenible de nuestros clientes.",
  },
  {
    tag: "02 / EXCELENCIA TÉCNICA",
    title: "Rigor sin Concesiones",
    description:
      "Abordamos cada asunto con profundidad analítica y estándares de clase mundial, anticipando escenarios regulatorios y blindando cada operación ante contingencias futuras.",
  },
  {
    tag: "03 / RELACIONES DURADERAS",
    title: "Compromiso Incondicional",
    description:
      "No somos consultores externos circunstanciales. Nos integramos como aliados estratégicos permanentes, cuidando el patrimonio de familias empresariales y corporaciones con absoluta lealtad.",
  },
];

export default function ValuePropositionPage() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>
      <Navbar />

      <main
        id="contenido-principal"
        className="relative bg-[#101B1C] text-[#F1EFE9] min-h-screen pt-36 sm:pt-44 md:pt-52 pb-28 sm:pb-36 px-6 sm:px-12 lg:px-24 overflow-hidden"
        tabIndex={-1}
      >
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <span className="w-8 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
            <span className="font-sans text-xs uppercase tracking-[0.24em] font-medium text-[#C6B48F]">
              NUESTRA PROPUESTA DE VALOR
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.14] tracking-[-0.02em] text-[#F1EFE9] max-w-4xl mb-12 sm:mb-16 text-balance">
            Construimos valor, protegemos lo que trasciende y perfeccionamos las estructuras que{" "}
            <span className="font-poppins font-semibold text-[#F1EFE9]">
              respaldan tu futuro.
            </span>
          </h1>

          {/* Core Editorial Narrative */}
          <div className="space-y-8 sm:space-y-10 max-w-3xl mb-20 sm:mb-28">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#F1EFE9]/85">
              Somos un equipo que va más allá de lo tradicional: nos comprometemos con ser incondicionales en nuestro apoyo, creativos en nuestra estrategia y rigurosos en nuestra asesoría.
            </p>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#F1EFE9]/85">
              Nuestra promesa es ser tu socio estratégico, protegiendo tus intereses con los más altos estándares internacionales mientras te impulsamos y acompañamos en cada etapa de tus negocios en Ecuador.
            </p>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#F1EFE9]/85">
              Conocemos profundamente el mercado ecuatoriano y prestamos servicios con excelencia técnica en áreas neurálgicas, anticipando contingencias para brindar certezas sólidas en entornos dinámicos.
            </p>
          </div>

          {/* Value Pillars */}
          <div className="border-t border-white/10 pt-16 sm:pt-20 mb-20 sm:mb-28">
            <div className="flex items-center gap-3 mb-12 sm:mb-16">
              <span className="w-6 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
              <h2 className="font-sans text-xs uppercase tracking-[0.24em] font-semibold text-[#C6B48F]">
                EJES DE NUESTRA PRÁCTICA
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
              {valuePillars.map((pillar, idx) => (
                <div key={idx} className="space-y-4">
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#C6B48F]/80 font-medium block">
                    {pillar.tag}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F1EFE9] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-serif text-base sm:text-lg font-light leading-relaxed text-[#F1EFE9]/75">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="border-t border-white/10 pt-12 sm:pt-16 flex flex-wrap items-center justify-between gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] text-[#F1EFE9]/70 hover:text-[#C6B48F] transition-colors"
            >
              <ArrowLeft size={16} className="text-[#C6B48F]" />
              <span>Volver al Inicio</span>
            </Link>

            <Link
              href="/#contacto"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-[#C6B48F]/40 bg-[#C6B48F]/10 hover:bg-[#C6B48F] text-[#F1EFE9] hover:text-[#101B1C] transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] font-semibold"
            >
              <span>Iniciar una conversación</span>
              <ArrowRight
                size={16}
                className="text-[#C6B48F] group-hover:text-[#101B1C] group-hover:translate-x-1 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
