"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionExperience() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".editorial-section h2, .pillar, .section-reveal").forEach((element) => {
          gsap.from(element, { y: 32, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 92%", once: true }, clearProps: "all" });
        });
        gsap.utils.toArray<HTMLElement>(".editorial-section").forEach((section) => {
          gsap.fromTo(section, { "--section-progress": 0 }, { "--section-progress": 1, ease: "none", scrollTrigger: { trigger: section, start: "top 90%", end: "center center", scrub: true } });
        });
      });
      return () => ctx.revert();
    });
    return () => media.revert();
  }, []);
  return null;
}
