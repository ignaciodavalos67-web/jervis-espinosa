"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroPresentation() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const intro = root.current;
    if (!intro) return;
    media.add("(prefers-reduced-motion: no-preference)", () => {
      let opening: gsap.core.Timeline;
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({ scrollTrigger: {
          trigger: intro, start: "top top", end: "bottom bottom", scrub: true,
          invalidateOnRefresh: true,
        } });
        timeline
          .to({}, { duration: 0.45 }, 0)
          .to(".intro-brand-screen", { clipPath: "inset(0% 0% 100% 0%)", duration: 0.5, ease: "power2.inOut" }, 0.48)
          .fromTo(".hero-enter", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, stagger: 0.012, duration: 0.35, ease: "power2.out" }, 0.6)
          .to(".intro-discover", { opacity: 0, duration: 0.15 }, 0.45)
          .to({}, { duration: 0.02 }, 0.98);
        opening = gsap.timeline()
          .fromTo(".intro-message-line", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out" })
          .to(".intro-message-line", { opacity: 0, y: -6, duration: 0.5, ease: "power2.in" }, "+=1.5")
          .to(".intro-message-screen", { autoAlpha: 0, duration: 0.15, ease: "none" })
          .set(".intro-logo-gate", { visibility: "visible" })
          .fromTo(".intro-logo", { opacity: 0, y: 14, scale: 0.97, clipPath: "inset(0% 0% 100% 0%)" }, { opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.45, ease: "power2.out" });
        // Restored positions and deliberate scrolling bypass only the opening text.
        if (window.scrollY > 2 || window.location.hash) opening.progress(1);
        gsap.fromTo(".site-header", { autoAlpha: 0 }, { autoAlpha: 1, ease: "none", scrollTrigger: {
          trigger: "#contenido-principal", start: "top 95%", end: "top 50%", scrub: true,
        } });
      });
      const skipOpeningOnScroll = () => {
        if (window.scrollY > 2 && opening.progress() < 1) opening.progress(1);
      };
      window.addEventListener("scroll", skipOpeningOnScroll, { passive: true });
      return () => { window.removeEventListener("scroll", skipOpeningOnScroll); ctx.revert(); };
    });
    return () => media.revert();
  }, []);

  return (
    <div ref={root} className="cinematic-intro">
      <div className="intro-stage">
        <div className="intro-message-screen">
          <p className="intro-message">
            <span className="intro-message-line">Una relación construida sobre la confianza, </span>
            <span className="intro-message-line">la proactividad y el rigor absoluto.</span>
          </p>
        </div>
        <div className="intro-brand-screen">
          <div className="intro-logo-gate">
            <div className="intro-logo" role="img" aria-label="Jervis & Espinosa Abogados" />
          </div>
        </div>
        <div className="intro-discover" aria-hidden="true">
          <span>SCROLL PARA DESCUBRIR</span>
          <span className="intro-scroll-line" />
        </div>
        <section className="hero" aria-label="Presentación de Jervis & Espinosa">
          <div className="hero-media" aria-hidden="true">
            <div className="hero-ampersand-bg">
              <Image
                src="/assets/ampersand.png"
                alt=""
                width={1024}
                height={905}
                priority
                className="hero-ampersand-img"
              />
            </div>
          </div>
          <div className="hero-top hero-enter">
            <span>JERVIS & ESPINOSA <span className="hero-top-sub">/ ABOGADOS</span></span>
          </div>
          <div className="hero-body">
            <div className="hero-copy">
              <p className="eyebrow hero-enter">Ecuador · Quito & Guayaquil</p>
              <h1 className="hero-enter">Somos tu equipo,<br />tú nuestra prioridad.</h1>
              <p className="hero-description hero-enter">Estudio jurídico con enfoque corporativo, litigio estratégico y asesoría multidisciplinaria.</p>
            </div>
          </div>
          <div className="hero-bottom hero-enter">
            <a href="#contenido-principal" className="explore-link">
              <ArrowDown size={18} />
              <span>Desliza para explorar</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
