"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ValueProposition() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".value-reveal").forEach((element) => {
          gsap.fromTo(element, { opacity: 0.25, y: 18 }, {
            opacity: 1, y: 0, ease: "none",
            scrollTrigger: { trigger: element, start: "top 95%", end: "top 72%", scrub: true },
          });
        });

      }, root);
      return () => ctx.revert();
    });
    return () => media.revert();
  }, []);

  return (
    <section ref={root} id="propuesta-de-valor" className="value-section" aria-labelledby="value-heading">
      <div className="value-container">
        <div className="value-label"><span className="editorial-index" aria-hidden="true">01</span>PROPUESTA DE VALOR</div>
        <h2 id="value-heading" className="value-heading value-reveal">Somos un equipo que va <span className="value-modern">más allá de lo tradicional.</span></h2>
        <div className="value-support">
          <p className="value-reveal">Nos comprometemos con ser incondicionales en nuestro apoyo, creativos en nuestra estrategia y disruptivos en nuestra asesoría.</p>
          <p className="value-reveal value-promise">Nuestra promesa es ser tu socio estratégico que trabajará para proteger tus intereses y brindarte soluciones legales hechas a la medida, mientras te impulsamos y acompañamos en tu crecimiento de manera integral.</p>
          <p className="value-reveal value-expertise">Conocemos el mercado ecuatoriano y prestamos servicios únicamente en las áreas de práctica en las que nuestro equipo es experto, por lo que estamos conscientes de los desafíos actuales, lo cual nos permite brindar asesoría jurídica comercialmente viable, anticipando tus necesidades y mitigando contingencias de forma oportuna, creativa y eficiente.</p>
        <p className="value-reveal value-commitment">En Jervis &amp; Espinosa, no solo encontrarás los más altos estándares de calidad internacional, sino también un equipo comprometido en potenciar tu éxito.</p>
        <p className="value-reveal value-closing">Somos tu equipo, tú nuestra prioridad.</p>
        </div>
      </div>
    </section>
  );
}
