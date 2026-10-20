"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <footer className="bg-petrol-950 text-ivory/80 pt-20 pb-12 border-t border-petrol-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-petrol-800/60">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative w-48 h-16">
              <Image
                src="/assets/logo-white.png"
                alt="Jervis & Espinosa Abogados"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-serif text-lg text-ivory/90 italic">
              “Somos tu equipo, tú nuestra prioridad.”
            </p>
            <p className="text-xs sm:text-sm text-ivory/60 font-sans max-w-sm leading-relaxed">
              Firma legal ecuatoriana con sede principal en Quito y alcance nacional en Guayaquil y las principales plazas comerciales del país.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-celeste font-semibold">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/area_de_practica"
                  className="hover:text-white transition-colors"
                >
                  Áreas de Práctica
                </Link>
              </li>
              <li><Link href="/sectores" className="hover:text-white transition-colors">Sectores</Link></li>
              <li><Link href="/socios" className="hover:text-white transition-colors">Socios</Link></li>
              <li>
                <Link
                  href="/#contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto Directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas Summary */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-celeste font-semibold">
              Áreas Principales
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-ivory/60">
              <span>Corporativo & M&A</span>
              <span>Litigio & Arbitraje</span>
              <span>Tributario & Fiscal</span>
              <span>Laboral & Migratorio</span>
              <span>Banca & Finanzas</span>
              <span>Propiedad Intelectual</span>
              <span>Inmobiliario</span>
              <span>Contratación Pública</span>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-celeste hover:text-white transition-colors group"
              >
                <span>Volver al inicio</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>
            © {new Date().getFullYear()} Jervis & Espinosa Abogados. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-ivory/80 cursor-pointer">Aviso de Privacidad</span>
            <span className="hover:text-ivory/80 cursor-pointer">Términos Legales</span>
            <span>Ecuador</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
