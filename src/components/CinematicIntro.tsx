"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CinematicIntroProps {
  onComplete?: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoScrollRef = useRef<HTMLDivElement>(null);
  const logoRevealRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Start background video playback immediately
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion fallback: show video and logo immediately
    if (prefersReducedMotion) {
      if (logoRevealRef.current) {
        logoRevealRef.current.style.opacity = "1";
        logoRevealRef.current.style.transform = "none";
      }
      window.dispatchEvent(new CustomEvent("intro-revealed"));
      onComplete?.();
      return;
    }

    // Set initial logo reveal state
    gsap.set(logoRevealRef.current, { opacity: 0, scale: 0.94, y: 10 });

    // Master Timeline: Pure cinematic video with a very slow, majestic logo reveal
    const tl = gsap.timeline({
      onComplete: () => {
        window.dispatchEvent(new CustomEvent("intro-revealed"));
        onComplete?.();
      },
    });
    timelineRef.current = tl;

    // 1. Initial brief pause (0.8s) letting the aerial footage of Quito be appreciated
    tl.to({}, { duration: 0.8 });

    // 2. Slow, majestic appearance of the full Jervis & Espinosa logo in the center (3.2 seconds duration)
    tl.to(
      logoRevealRef.current,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 3.2,
        ease: "power1.out",
      },
      0.8
    );

    tl.add(() => {
      window.dispatchEvent(new CustomEvent("intro-revealed"));
    }, 3.6);

    // Scroll-driven logo motion (Lenz & Staehelin style):
    // As the user scrolls down, the logo glides upwards towards the top of the screen
    const scrollAnimation = gsap.to(logoScrollRef.current, {
      y: -280,
      opacity: 0,
      ease: "power1.out",
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=95%",
      scrub: 0.3,
      animation: scrollAnimation,
    });

    // Pause video when completely scrolled out of view to save GPU resources
    const pauseTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "bottom top",
      onEnter: () => videoRef.current?.pause(),
      onLeaveBack: () => videoRef.current?.play().catch(() => {}),
    });

    // Allow user scroll, wheel, touch or click to bypass intro immediately
    const handleEarlyBypass = () => {
      if (tl.progress() < 1) {
        tl.progress(1);
      }
      window.dispatchEvent(new CustomEvent("intro-revealed"));
    };

    window.addEventListener("scroll", handleEarlyBypass, { passive: true });
    window.addEventListener("wheel", handleEarlyBypass, { passive: true });
    window.addEventListener("touchmove", handleEarlyBypass, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleEarlyBypass);
      window.removeEventListener("wheel", handleEarlyBypass);
      window.removeEventListener("touchmove", handleEarlyBypass);
      scrollTrigger.kill();
      pauseTrigger.kill();
      scrollAnimation.kill();
      tl.kill();
    };
  }, [onComplete]);

  const handleSkipClick = () => {
    if (timelineRef.current && timelineRef.current.progress() < 1) {
      timelineRef.current.progress(1);
      window.dispatchEvent(new CustomEvent("intro-revealed"));
    }
  };

  return (
    <section
      ref={containerRef}
      onClick={handleSkipClick}
      className="sticky top-0 w-full h-[100svh] min-h-[640px] bg-[#202324] overflow-hidden select-none cursor-pointer z-0"
      aria-label="Presentación cinematográfica de Jervis & Espinosa"
    >
      {/* 
        Full Viewport Quito Aerial Footage:
        Stays completely static at top:0 while content slides up over it.
      */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          src="/assets/TOMA_AEREA_CENTRO_HISTORICO.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover select-none pointer-events-none"
        />
        {/* Subtle dark graphite grey tone to harmonize footage with firm palette */}
        <div className="absolute inset-0 bg-[#202324]/40 mix-blend-multiply pointer-events-none" />

        {/* Clean cinematic gradient: keeps footage crisp and visible right to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#202324]/50 via-transparent to-[#202324]/35 pointer-events-none" />
      </div>

      {/* 
        Full Jervis & Espinosa Logo: 
        Fades in majestically in the center and moves upwards when the user scrolls down.
      */}
      <div
        ref={logoScrollRef}
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none px-6 will-change-transform"
      >
        <div
          ref={logoRevealRef}
          className="relative w-[280px] sm:w-[380px] md:w-[460px] aspect-[1884/1418] drop-shadow-2xl"
          style={{ opacity: 0 }}
        >
          <Image
            src="/assets/logo-white.png"
            alt="Jervis & Espinosa Abogados"
            fill
            priority
            className="object-contain pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
