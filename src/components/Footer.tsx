"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <footer className="bg-[#202324] text-[#F1EFE9]/80 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-16 pb-16 sm:pb-20 border-b border-white/10">
          {/* Logo Jervis & Espinosa en formato monumental */}
          <div className="w-full lg:max-w-2xl xl:max-w-3xl">
            <div className="relative w-80 sm:w-[480px] md:w-[600px] lg:w-[720px] xl:w-[820px] h-28 sm:h-40 md:h-52 lg:h-64">
              <Image
                src="/assets/logo-white.png"
                alt="Jervis & Espinosa Abogados"
                fill
                priority
                className="object-contain object-left pointer-events-none"
              />
            </div>
          </div>

          {/* Sede & Atención */}
          <div className="space-y-4 max-w-md">
            <h4 className="font-sans text-xs uppercase tracking-[0.24em] text-[#C6B48F] font-semibold">
              Sede & Atención
            </h4>
            <div className="space-y-2.5 text-sm sm:text-base font-sans text-[#F1EFE9]/75">
              <p>
                <strong className="text-white font-medium">Quito:</strong> Edificio Torre 6, Piso 8, Av. 6 de Diciembre &amp; Whymper
              </p>
              <p>
                <strong className="text-white font-medium">Guayaquil:</strong> Cobertura corporativa
              </p>
              <p className="pt-1">
                <a
                  href="mailto:info@jervisespinosa.com"
                  className="hover:text-white transition-colors underline underline-offset-4 decoration-[#C6B48F]/50 hover:decoration-[#C6B48F]"
                >
                  info@jervisespinosa.com
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/593999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6B48F] transition-colors"
                >
                  WhatsApp: +593 99 999 9999
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F1EFE9]/50 font-sans">
          <p>© {new Date().getFullYear()} Jervis &amp; Espinosa Abogados. Todos los derechos reservados.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
