"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Plus } from "lucide-react";
import { partners } from "@/data/partners";

export default function Partners() {
  // By default, information is hidden (null) so user clicks a name to reveal it
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const togglePartner = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative bg-[#101B1C] text-[#F1EFE9] min-h-screen pt-32 sm:pt-40 md:pt-44 pb-28 sm:pb-36 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <span className="w-8 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
          <span className="font-sans text-xs uppercase tracking-[0.24em] font-medium text-[#C6B48F]">
            LIDERAZGO &amp; TRAYECTORIA
          </span>
        </div>

        {/* Section Headline matching Propuesta de Valor */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.06] tracking-[-0.025em] text-[#F1EFE9] max-w-4xl mb-6 sm:mb-8 text-balance">
          Las personas detrás de{" "}
          <span className="font-poppins font-semibold text-[#F1EFE9]">
            nuestra firma.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#F1EFE9]/80 max-w-3xl mb-16 sm:mb-20">
          Experiencia, visión estratégica y compromiso incondicional al servicio de nuestros clientes en Ecuador.
        </p>

        {/* Partners Accordion List - Names only by default, click to reveal details */}
        <div className="space-y-12 sm:space-y-16">
          {partners.map((partner) => {
            const isExpanded = expandedId === partner.id;

            return (
              <article key={partner.id} className="scroll-mt-32">
                {/* Clickable Partner Header */}
                <button
                  type="button"
                  onClick={() => togglePartner(partner.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`partner-info-${partner.id}`}
                  className="w-full text-left group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6B48F]"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-6 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
                        <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[#C6B48F]">
                          {partner.position}
                        </span>
                      </div>
                      <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F1EFE9] group-hover:text-[#C6B48F] transition-colors duration-300 leading-[1.08] tracking-[-0.02em]">
                        {partner.name}
                      </h2>
                    </div>

                    {/* Subtle toggle indicator */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#C6B48F]">
                      <Plus
                        size={28}
                        className={`transition-transform duration-300 ease-out ${
                          isExpanded ? "rotate-45" : "rotate-0 group-hover:scale-110"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </button>

                {/* Collapsible Partner Information (Hidden by default) */}
                <div
                  id={`partner-info-${partner.id}`}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isExpanded ? "grid-rows-[1fr] opacity-100 mt-10 sm:mt-12" : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden space-y-10 sm:space-y-12">
                    {/* Biographical & Professional Details */}
                    <div className="space-y-10 sm:space-y-12">
                      {partner.groups.map((group, gIdx) => (
                        <div key={group.title || gIdx} className="space-y-4">
                          <h3 className="font-sans text-xs uppercase tracking-[0.22em] font-medium text-[#C6B48F]">
                            {group.title}
                          </h3>
                          <div className="space-y-5">
                            {group.paragraphs.map((paragraph, pIdx) => (
                              <p
                                key={pIdx}
                                className="font-serif text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-[#F1EFE9]/85 max-w-4xl"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Direct Professional Contact */}
                    <div className="space-y-4 pt-2">
                      <h3 className="font-sans text-xs uppercase tracking-[0.22em] font-medium text-[#C6B48F]">
                        Contacto Directo
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                        <a
                          href={`mailto:${partner.email}`}
                          className="inline-flex items-center gap-2.5 text-sm sm:text-base text-[#F1EFE9]/90 hover:text-[#C6B48F] transition-colors group/link"
                        >
                          <Mail size={16} className="text-[#C6B48F] group-hover/link:scale-110 transition-transform" aria-hidden="true" />
                          <span>
                            {partner.email}
                          </span>
                        </a>
                        <a
                          href={partner.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm sm:text-base text-[#F1EFE9]/90 hover:text-[#C6B48F] transition-colors group/link"
                        >
                          <span>
                            Perfil de LinkedIn
                          </span>
                          <ArrowUpRight size={14} className="text-[#C6B48F] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" aria-hidden="true" />
                          <span className="sr-only"> (abre en una pestaña nueva)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
