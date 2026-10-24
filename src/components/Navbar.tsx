"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, X, Menu } from "lucide-react";

const destinations = [
  ["/", "Inicio"],
  ["/area_de_practica", "Áreas de Práctica"],
  ["/sectores", "Sectores"],
  ["/socios", "Socios"],
  ["/#contacto", "Contacto"],
];

export default function Navbar({ intro = false }: { intro?: boolean }) {
  // Visible state: whether the floating pill navbar is on-screen
  const [isVisible, setIsVisible] = useState(!intro);
  const [open, setOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      // When past initial top zone
      if (currentScrollY > 80) {
        if (delta < -6) {
          // Scrolling UP -> Reveal Zipline navbar
          setIsVisible(true);
        } else if (delta > 6) {
          // Scrolling DOWN -> Hide navbar
          setIsVisible(false);
        }
      } else {
        // At the very top
        if (intro) {
          // Keep cinematic opening hero clean and unobstructed
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [intro]);

  useEffect(() => {
    if (!open) return;
    const menu = dialog.current;
    menu?.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
      menu?.close();
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    toggle.current?.focus();
  };

  return (
    <>
      {/* Floating Zipline-Style Rounded Capsule Navbar */}
      <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6">
        <header
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#101B1C]/85 backdrop-blur-xl border border-[#F1EFE9]/15 shadow-[0_12px_40px_rgba(0,0,0,0.45)] w-full max-w-4xl lg:max-w-5xl ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-24 opacity-0 scale-95 pointer-events-none"
          }`}
          aria-label="Navegación principal"
        >
          {/* Logo on Left */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0 transition-opacity hover:opacity-85"
            aria-label="Jervis & Espinosa — Inicio"
          >
            <div className="relative w-28 sm:w-36 h-7 sm:h-8">
              <Image
                src="/assets/logo-white.png"
                alt="Jervis & Espinosa Abogados"
                fill
                sizes="(max-width: 640px) 112px, 144px"
                className="object-contain object-left pointer-events-none"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links in Center */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Enlaces">
            {destinations.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="font-poppins text-[11px] lg:text-xs uppercase tracking-[0.16em] font-medium text-[#F1EFE9]/75 hover:text-[#F1EFE9] px-3.5 py-1.5 rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right Action: Rounded Pill CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <Link
              href="/#contacto"
              className="font-poppins text-[11px] sm:text-xs uppercase tracking-[0.14em] font-semibold bg-[#F1EFE9] text-[#101B1C] hover:bg-[#C6B48F] transition-all duration-200 py-1.5 sm:py-2 px-3.5 sm:px-5 rounded-full inline-flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <span>Contacto</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>

            <button
              ref={toggle}
              onClick={() => setOpen(true)}
              className="md:hidden p-2 text-[#F1EFE9] hover:text-[#C6B48F] transition-colors rounded-full hover:bg-white/5"
              aria-label="Abrir menú"
              aria-expanded={open}
              aria-controls="main-menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Modal Dialog */}
      <dialog
        ref={dialog}
        id="main-menu"
        className="menu-dialog fixed inset-0 z-50 bg-[#101B1C] text-[#F1EFE9] w-full h-full max-w-full max-h-full m-0 p-0"
        aria-label="Menú de navegación"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="menu-inner flex flex-col justify-between h-full p-8 sm:p-14 max-w-4xl mx-auto">
          <div className="menu-heading flex items-center justify-between pb-8 border-b border-ivory/10">
            <span className="eyebrow text-xs uppercase tracking-[0.22em] text-[#C6B48F]">
              Jervis & Espinosa Abogados
            </span>
            <button
              onClick={close}
              className="p-2 text-[#F1EFE9] hover:text-[#C6B48F] transition-colors"
              aria-label="Cerrar menú"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-12" aria-label="Navegación completa">
            {destinations.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                className="group flex items-center justify-between text-2xl sm:text-4xl font-serif font-light text-[#F1EFE9] hover:text-[#C6B48F] transition-colors py-2 border-b border-ivory/5"
              >
                <span>{label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C6B48F] text-xl">
                  &rarr;
                </span>
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-ivory/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-[#F1EFE9]/60 tracking-wider">
            <Link
              href="/#contacto"
              onClick={close}
              className="text-[#C6B48F] hover:text-white transition-colors uppercase font-medium tracking-[0.16em]"
            >
              Consulta confidencial
            </Link>
            <p>Quito, Ecuador &bull; Cobertura Nacional</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
