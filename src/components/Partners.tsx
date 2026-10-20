"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { gsap } from "gsap";
import { partners } from "@/data/partners";
import PartnerOverview from "./PartnerOverview";
import "./partners.css";

export default function Partners() {
  const [selectedId, setSelectedId] = useState(partners[0].id);
  const currentId = useRef(selectedId);
  const panel = useRef<HTMLDivElement>(null);
  const profile = useRef<HTMLElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const tween = useRef<gsap.core.Tween | null>(null);
  const version = useRef(0);
  const renderedId = useRef(selectedId);
  const selected = partners.find((partner) => partner.id === selectedId)!;

  const scrollToProfile = () => {
    heading.current?.focus({ preventScroll: true });
    profile.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  };

  useLayoutEffect(() => {
    currentId.current = selectedId;
    if (renderedId.current === selectedId) return;
    renderedId.current = selectedId;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(panel.current, { clearProps: "opacity,visibility,transform" });
    } else {
      tween.current = gsap.fromTo(panel.current, { autoAlpha: 0, y: 5 }, { autoAlpha: 1, y: 0, duration: 0.18, ease: "power2.out", clearProps: "opacity,visibility,transform" });
    }
    scrollToProfile();
  }, [selectedId]);

  useEffect(() => () => { version.current += 1; tween.current?.kill(); }, []);

  const selectPartner = (id: string) => {
    const request = ++version.current;
    tween.current?.kill();
    if (id === currentId.current) {
      gsap.set(panel.current, { clearProps: "opacity,visibility,transform" });
      scrollToProfile();
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setSelectedId(id); return; }
    tween.current = gsap.to(panel.current, { autoAlpha: 0, y: -4, duration: 0.14, ease: "power1.in", onComplete: () => {
      if (request === version.current) setSelectedId(id);
    } });
  };

  return (
    <>
      <PartnerOverview selectedId={selectedId} onSelect={selectPartner} />
      <section ref={profile} id="perfil-socio" className="partner-profile" aria-labelledby="partner-profile-heading">
        <div ref={panel} className={`partners-container partner-profile-layout ${selected.portrait ? "" : "without-portrait"}`}>
          {selected.portrait && <div className="partner-profile-portrait">
            <Image unoptimized src={selected.portrait.src} alt={selected.name} width={selected.portrait.width} height={selected.portrait.height} sizes="(max-width: 800px) 75vw, 440px" />
          </div>}
          <div className="partner-profile-copy">
            <p className="partner-position">{selected.position}</p>
            <h2 ref={heading} id="partner-profile-heading" tabIndex={-1}>{selected.name}</h2>
            {selected.groups.map((group) => (
              <div key={group.title} className="partner-information">
                <h3>{group.title}</h3>
                {group.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            ))}
            <div className="partner-information partner-contact">
              <h3>Contacto profesional</h3>
              <a href={`mailto:${selected.email}`}><Mail size={17} aria-hidden="true" />{selected.email}</a>
              <a href={selected.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (abre en otra pestaña)</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
