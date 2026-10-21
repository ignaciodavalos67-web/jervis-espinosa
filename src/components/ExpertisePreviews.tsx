"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const previews = [
  { id: "explorar-areas", title: "Áreas de Práctica", action: "Explorar áreas de práctica", href: "/area_de_practica" },
  { id: "explorar-sectores", title: "Sectores", action: "Explorar sectores", href: "/sectores" },
];

export default function ExpertisePreviews() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".expertise-preview h2").forEach((heading) => {
          gsap.fromTo(heading, { y: 20, opacity: 0.35 }, {
            y: 0, opacity: 1, ease: "none",
            scrollTrigger: { trigger: heading, start: "top 95%", end: "top 72%", scrub: true },
          });
        });
      }, root);
      return () => ctx.revert();
    });
    return () => media.revert();
  }, []);

  return (
    <div ref={root} className="expertise-previews">
      {previews.map((preview) => (
        <section key={preview.id} id={preview.id} className="expertise-preview" aria-labelledby={`${preview.id}-heading`}>
          <div className="expertise-preview-inner">
            <h2 id={`${preview.id}-heading`}>{preview.title}</h2>
            <Link href={preview.href}>{preview.action}<ArrowUpRight size={20} aria-hidden="true" /></Link>
          </div>
        </section>
      ))}
    </div>
  );
}
