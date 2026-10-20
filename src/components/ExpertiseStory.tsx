"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Plus } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { PracticeArea } from "@/data/practiceAreas";
import "./practice-areas.css";

interface ExpertiseStoryProps {
  areas: PracticeArea[];
  title: string;
  sectionId: string;
  label: string;
  sectionNumber: string;
  introduction?: string;
  indexLabel: string;
}

export default function ExpertiseStory({ areas, title, sectionId, label, sectionNumber, introduction, indexLabel }: ExpertiseStoryProps) {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(areas[0].id);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = root.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      areas.forEach((area) => {
        const chapter = section.querySelector<HTMLElement>(`#${area.id}`);
        const progress = section.querySelector<HTMLElement>(`[data-progress="${area.id}"]`);
        ScrollTrigger.create({
          trigger: chapter, start: "top 40%", end: "bottom 40%",
          onToggle: (self) => { if (self.isActive) setActive(area.id); },
          onUpdate: (self) => { if (progress) progress.style.transform = `scaleX(${self.progress})`; },
        });
      });
    }, section);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const motion = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".expertise-reveal").forEach((element) => {
          gsap.fromTo(element, { opacity: 0.35, y: 16 }, {
            opacity: 1, y: 0, ease: "none",
            scrollTrigger: { trigger: element, start: "top 95%", end: "top 75%", scrub: true },
          });
        });
      }, section);
      return () => motion.revert();
    });
    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    observer.observe(section);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); media.revert(); ctx.revert(); };
  }, [areas]);

  const navigate = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    if (window.location.hash !== `#${id}`) window.history.pushState(null, "", `#${id}`);
    document.getElementById(`heading-${id}`)?.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  };

  return (
    <section ref={root} id={sectionId} className="expertise-section" aria-labelledby="expertise-heading">
      <div className="expertise-container">
        <header className="expertise-header">
          <div>
            <p className="expertise-label"><span aria-hidden="true">{sectionNumber}</span> {label}</p>
            <h1 id="expertise-heading">{title}</h1>
          </div>
          {introduction && <p>{introduction}</p>}
        </header>
        <div className="expertise-layout">
          <nav className="expertise-index" aria-label={indexLabel}>
            {areas.map((area) => (
              <a key={area.id} href={`#${area.id}`} onClick={(event) => navigate(event, area.id)} aria-current={active === area.id ? "location" : undefined}>
                <span className="expertise-index-number">{area.number}</span>
                <span>{area.title}</span>
                <ArrowDown size={14} aria-hidden="true" />
                <span className="expertise-progress" aria-hidden="true"><span data-progress={area.id} /></span>
              </a>
            ))}
          </nav>
          <div className="expertise-chapters">
            {areas.map((area) => (
              <article key={area.id} id={area.id} className="expertise-chapter" aria-labelledby={`heading-${area.id}`}>
                <div className="expertise-chapter-heading expertise-reveal">
                  <span className="expertise-chapter-number" aria-hidden="true">{area.number}</span>
                  <h2 id={`heading-${area.id}`} tabIndex={-1}>{area.title}</h2>
                </div>
                <div className="expertise-description expertise-reveal">
                  {area.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="expertise-services">
                  <h4>Nuestros servicios</h4>
                  <ol role="list">
                    {area.services.map((service, index) => (
                      <li key={service.title}>
                        {service.description ? (
                          <details>
                            <summary><span className="expertise-service-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{service.title}</span><Plus size={16} aria-hidden="true" /></summary>
                            <p className="expertise-service-description">{service.description}</p>
                          </details>
                        ) : (
                          <div className="expertise-service-statement"><span className="expertise-service-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p>{service.title}</p></div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
