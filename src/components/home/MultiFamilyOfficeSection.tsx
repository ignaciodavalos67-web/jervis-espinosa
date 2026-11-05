"use client";

import Image from "next/image";
import Link from "next/link";

interface FamilyOfficeCard {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const cards: FamilyOfficeCard[] = [
  {
    id: "gobernanza",
    title: "Protocolo & Alineación Familiar",
    imageSrc: "/assets/family-office/gobernanza-familiar.png",
    imageAlt: "Espacio de diálogo íntimo y confidencial entre asesores y familia",
  },
  {
    id: "fiduciaria",
    title: "Estructuras Fiduciarias & Blindaje",
    imageSrc: "/assets/family-office/estructuras-fiduciarias.jpg",
    imageAlt: "Arquitectura contemporánea sólida en hormigón y luz natural",
  },
  {
    id: "trascendencia",
    title: "Preservación del Legado",
    imageSrc: "/assets/family-office/trascendencia-patrimonial.jpg",
    imageAlt: "Mesa de diseño con planos arquitectónicos y detalles de legado",
  },
  {
    id: "activos",
    title: "Inversión & Private Wealth",
    imageSrc: "/assets/family-office/activos-estrategicos.jpg",
    imageAlt: "Ventanales de arquitectura corporativa de vanguardia con reflejos bronce",
  },
];

export default function MultiFamilyOfficeSection() {
  // Duplicated list to create the seamless infinite loop gliding to the right
  const marqueeCards = [...cards, ...cards];

  return (
    <section
      id="multi-family-office"
      className="relative bg-[#202324] text-[#F1EFE9] pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-32 md:pb-40 overflow-hidden border-t border-white/10 select-none"
      aria-labelledby="mfo-heading"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <div className="w-full h-full grid grid-cols-6 grid-rows-4 divide-x divide-y divide-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 mb-14 sm:mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2
            id="mfo-heading"
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-[-0.025em] text-[#F1EFE9] mx-auto text-balance"
          >
            Multi Family Office.
          </h2>

          <p className="font-serif text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-[#F1EFE9]/85 max-w-2xl mx-auto">
            Gobernanza patrimonial, estructuras fiduciarias y preservación intergeneracional para familias empresariales de alta exigencia.
          </p>
        </div>
      </div>

      {/* 
        MÓVIL (< md): Touch-scrollable nativo con snap.
        El usuario puede scrolear horizontalmente con el dedo para ver todas las fotos
        sin tener que esperar a que vuelva a aparecer la animación automática.
      */}
      <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 px-6 py-2 pb-6 scroll-smooth select-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cards.map((card, idx) => (
          <Link
            key={`mobile-${card.id}-${idx}`}
            href="/#contacto"
            className="group relative flex-shrink-0 snap-center w-[78vw] max-w-[320px] h-[480px] rounded-none overflow-hidden border-none shadow-2xl bg-[#202324] transition-all duration-300 active:scale-[0.98]"
            aria-label={`${card.title} — Ir a contacto`}
          >
            {/* Photographic Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                sizes="320px"
                className="object-cover object-center"
                priority={idx < 2}
              />
            </div>

            {/* Sophisticated Dark Gradient Vignette for High Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 via-45% to-transparent pointer-events-none" />

            {/* Solo el título blanco en la parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="font-serif text-2xl font-normal leading-snug text-[#F1EFE9]">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* 
        ESCRITORIO (>= md): Deslizamiento infinito continuo automático (.animate-marquee-right)
        - Deslizamiento suave continuo
        - El texto crece en hover
      */}
      <div className="hidden md:block relative w-full overflow-hidden">
        {/* Soft edge fade masks matching the dark grey background */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#202324] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#202324] to-transparent z-20 pointer-events-none" />

        <div className="flex gap-4 w-max animate-marquee-right py-2 px-2">
          {marqueeCards.map((card, idx) => (
            <Link
              key={`${card.id}-${idx}`}
              href="/#contacto"
              className="group relative flex-shrink-0 w-[350px] md:w-[400px] h-[550px] md:h-[620px] rounded-none overflow-hidden border-none shadow-2xl bg-[#202324] transition-all duration-500"
              aria-label={`${card.title} — Ir a contacto`}
            >
              {/* Photographic Background */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 350px, 400px"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-106"
                  priority={idx < 4}
                />
              </div>

              {/* Sophisticated Dark Gradient Vignette for High Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 via-45% to-transparent transition-opacity duration-500 group-hover:opacity-90 pointer-events-none" />

              {/* Solo el título blanco en la parte inferior — se agranda al pasar el cursor */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-[2rem] font-normal leading-snug text-[#F1EFE9] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-bottom-left group-hover:scale-115 sm:group-hover:scale-120 will-change-transform inline-block">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 
        Enlace único abajo de las imágenes: "Explorar servicios"
        Las letras crecen de forma visible y fluida al pasar el cursor por encima
      */}
      <div className="flex justify-center pt-12 sm:pt-16 px-6">
        <Link
          href="/#contacto"
          className="group inline-flex items-center justify-center py-4 px-8 transition-all duration-300 cursor-pointer"
          aria-label="Explorar servicios de Multi Family Office"
        >
          <span className="font-sans text-lg sm:text-xl md:text-2xl uppercase tracking-[0.22em] font-medium text-[#C6B48F] transition-all duration-300 ease-out group-hover:scale-125 group-hover:tracking-[0.26em] group-hover:text-[#F1EFE9] inline-block transform-origin-center will-change-transform">
            Explorar servicios
          </span>
        </Link>
      </div>
    </section>
  );
}