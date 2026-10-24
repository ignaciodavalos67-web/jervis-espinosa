"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <footer className="bg-[#101B1C] text-[#F1EFE9]/80 pt-16 pb-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative w-44 h-12">
              <Image
                src="/assets/logo-white.png"
                alt="Jervis & Espinosa Abogados"
                fill
                className="object-contain object-left pointer-events-none"
              />
            </div>
            <p className="font-poppins text-lg text-[#F1EFE9] font-medium">
              “Somos tu equipo, tú nuestra prioridad.”
            </p>
            <p className="text-xs sm:text-sm text-[#F1EFE9]/60 font-poppins max-w-sm leading-relaxed">
              Firma legal ecuatoriana con sede principal en Quito y alcance integral en Guayaquil y las principales plazas comerciales del país.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-poppins text-xs uppercase tracking-[0.2em] text-[#C6B48F] font-semibold">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-poppins">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/area_de_practica" className="hover:text-white transition-colors">
                  Áreas de Práctica
                </Link>
              </li>
              <li>
                <Link href="/sectores" className="hover:text-white transition-colors">
                  Sectores
                </Link>
              </li>
              <li>
                <Link href="/socios" className="hover:text-white transition-colors">
                  Socios
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-poppins text-xs uppercase tracking-[0.2em] text-[#C6B48F] font-semibold">
              Sede & Atención
            </h4>
            <div className="space-y-2 text-xs sm:text-sm font-poppins text-[#F1EFE9]/70">
              <p>
                <strong className="text-white font-medium">Quito:</strong> Edificio Torre 6, Piso 8, Av. 6 de Diciembre &amp; Whymper
              </p>
              <p>
                <strong className="text-white font-medium">Guayaquil:</strong> Cobertura corporativa
              </p>
              <p className="pt-2">
                <a
                  href="mailto:info@jervisespinosa.com"
                  className="hover:text-white transition-colors underline underline-offset-4"
                >
                  info@jervisespinosa.com
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/593999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +593 99 999 9999
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F1EFE9]/50 font-poppins">
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
