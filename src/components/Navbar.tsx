"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { ArrowUpRight, X } from "lucide-react";

const destinations = [
  ["/", "Inicio"],
  ["/area_de_practica", "Áreas de Práctica"],
  ["/sectores", "Sectores"],
  ["/socios", "Socios"],
  ["/#contacto", "Contacto"],
];

export default function Navbar({ intro = false }: { intro?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const menu = dialog.current;
    menu?.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = oldOverflow; menu?.close(); };
  }, [open]);
  const close = () => { setOpen(false); toggle.current?.focus(); };
  return (
    <>
      <header style={intro ? undefined : { visibility: "visible" }} className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <Link href="/" className="nav-logo" aria-label="Jervis & Espinosa — Inicio">
          <span className="nav-logo-target" aria-hidden="true" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {destinations.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="nav-consult text-link" href="/#contacto">Consulta Legal <ArrowUpRight size={16} /></Link>
          <button ref={toggle} className="menu-toggle" onClick={() => setOpen(true)} aria-label="Abrir menú" aria-expanded={open} aria-controls="main-menu">
            <svg viewBox="0 0 80 88" fill="none" aria-hidden="true"><path d="M70 8H10V76H70V57" stroke="currentColor" strokeWidth="4" /><path d="M26 25H58M26 35H58M26 45H50" stroke="currentColor" strokeWidth="2" /></svg>
          </button>
        </div>
      </header>
      <dialog ref={dialog} id="main-menu" className="menu-dialog" aria-label="Menú de navegación" onCancel={(e) => { e.preventDefault(); close(); }} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
        <div className="menu-inner">
          <div className="menu-heading"><span className="eyebrow">Jervis & Espinosa / Abogados</span><button onClick={close} className="menu-toggle" aria-label="Cerrar menú"><X size={30} /></button></div>
          <nav aria-label="Navegación completa">{destinations.map(([href, label], index) => <Link href={href} key={href} onClick={close}><span className="menu-number">0{index + 1}</span><span>{label}</span><ArrowUpRight /></Link>)}</nav>
          <Link href="/#contacto" onClick={close} className="text-link menu-consult">Consulta Legal <ArrowUpRight size={18} /></Link>
        </div>
      </dialog>
    </>
  );
}
