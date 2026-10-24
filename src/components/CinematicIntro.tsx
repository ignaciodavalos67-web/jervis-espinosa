"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface CinematicIntroProps {
  onComplete?: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const scrollInviteRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Start background video playback immediately
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion fallback: show video and logo immediately
    if (prefersReducedMotion) {
      if (logoRef.current) {
        logoRef.current.style.opacity = "1";
        logoRef.current.style.transform = "none";
      }
      if (scrollInviteRef.current) {
        scrollInviteRef.current.style.opacity = "1";
      }
      window.dispatchEvent(new CustomEvent("intro-revealed"));
      onComplete?.();
      return;
    }

    // Set initial logo and scroll invite states
    gsap.set(logoRef.current, { opacity: 0, scale: 0.94, y: 10 });
    gsap.set(scrollInviteRef.current, { opacity: 0, y: 8 });

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
      logoRef.current,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 3.2,
        ease: "power1.out",
      },
      0.8
    );

    // 3. Reveal scroll invitation smoothly
    tl.to(
      scrollInviteRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      3.4
    );

    tl.add(() => {
      window.dispatchEvent(new CustomEvent("intro-revealed"));
    }, 3.6);

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
      className="relative w-full h-[100svh] min-h-[640px] bg-[#101B1C] overflow-hidden select-none cursor-pointer"
      aria-label="Presentación cinematográfica de Jervis & Espinosa"
    >
      {/* 
        Full Viewport Quito Aerial Footage:
        Plays directly full-screen with natural colors, zero ampersand mask.
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
        {/* Subtle cinematic gradient for perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#101B1C]/40 via-transparent to-[#101B1C]/60 pointer-events-none" />
      </div>

      {/* 
        Full Jervis & Espinosa Logo: 
        Fades in very slowly and majestically in the center of the screen.
      */}
      <div
        ref={logoRef}
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none px-6"
        style={{ opacity: 0 }}
      >
        <div className="relative w-[280px] sm:w-[380px] md:w-[460px] aspect-[1884/1418] drop-shadow-2xl">
          <Image
            src="/assets/logo-white.png"
            alt="Jervis & Espinosa Abogados"
            fill
            priority
            className="object-contain pointer-events-none"
          />
        </div>
      </div>

      {/* 
        Scroll Invitation:
        Fades in gently at the bottom.
      */}
      <div
        ref={scrollInviteRef}
        className="absolute bottom-8 sm:bottom-12 inset-x-0 z-30 flex flex-col items-center justify-center gap-2 pointer-events-none text-center"
        style={{ opacity: 0 }}
      >
        <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#F1EFE9]/90 font-medium drop-shadow-md">
          Desliza para descubrir
        </span>
        <div className="w-[1.5px] h-7 bg-gradient-to-b from-[#C6B48F] via-[#F1EFE9] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
