"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function EditorialContact() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const channelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom center",
            toggleActions: "play none none none",
            once: true,
          },
        });

        // 1. Category Tag reveals
        if (tagRef.current) {
          tl.from(tagRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          });
        }

        // 2. Monumental "CONTÁCTANOS" title rises up dramatically (exact Reino SAY HI style)
        if (titleRef.current) {
          tl.from(
            titleRef.current,
            {
              y: "100%",
              opacity: 0,
              duration: 1.2,
              ease: "power4.out",
            },
            "-=0.4"
          );
        }

        // 3. Arrow Circle Badge pops in
        if (badgeRef.current) {
          tl.from(
            badgeRef.current,
            {
              scale: 0.6,
              opacity: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
            },
            "-=0.9"
          );
        }

        // 4. Divider Line expands from left
        if (lineRef.current) {
          tl.from(
            lineRef.current,
            {
              scaleX: 0,
              transformOrigin: "left",
              duration: 1.0,
              ease: "power3.inOut",
            },
            "-=0.7"
          );
        }

        // 5. Direct Contact Channels stagger in sequentially
        if (channelsRef.current) {
          const items = channelsRef.current.children;
          tl.from(
            items,
            {
              y: 15,
              opacity: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.6"
          );
        }
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative bg-[#101B1C] text-[#F1EFE9] pt-14 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-24 overflow-hidden border-none"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Minimal Category Tag */}
        <div ref={tagRef} className="flex items-center gap-4 mb-6 sm:mb-8">
          <span className="font-mono text-xs text-[#C6B48F]/70 tracking-[0.2em]">05</span>
          <span className="w-8 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
          <span className="font-sans text-xs uppercase tracking-[0.24em] font-medium text-[#C6B48F]">
            CONTACTO & ALIANZAS
          </span>
        </div>

        {/* Monumental Reino Studio "SAY HI!" style title: CONTÁCTANOS */}
        <div className="mb-4 sm:mb-5 overflow-hidden">
          <a
            href="https://wa.me/593999999999?text=Hola,%20quisiera%20coordinar%20una%20consulta%20con%20Jervis%20%26%20Espinosa."
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
            aria-label="Contáctanos vía WhatsApp"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 overflow-hidden">
              <h2
                ref={titleRef}
                id="contact-heading"
                className="font-poppins text-[clamp(2.2rem,7.2vw,9rem)] font-bold uppercase tracking-[-0.035em] leading-[0.95] text-[#F1EFE9] group-hover:text-[#C6B48F] transition-colors duration-500 break-words will-change-transform"
              >
                CONTÁCTANOS
              </h2>
              <div
                ref={badgeRef}
                className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full border border-white/20 group-hover:border-[#C6B48F] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-105 group-hover:bg-[#C6B48F]/10 self-start sm:self-auto will-change-transform"
              >
                <ArrowUpRight className="w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 text-[#C6B48F] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </div>
            </div>
            <div
              ref={lineRef}
              className="w-full h-[2px] bg-white/15 group-hover:bg-[#C6B48F] transition-colors duration-500 mt-4 sm:mt-5 will-change-transform"
            />
          </a>
        </div>

        {/* Social Logos: Instagram, LinkedIn & WhatsApp (centrados y más grandes) */}
        <div className="flex items-center justify-center gap-10 sm:gap-14 mb-8 sm:mb-10 text-[#F1EFE9]">
          {/* Instagram Logo */}
          <div
            className="inline-flex items-center justify-center text-[#F1EFE9] hover:text-[#C6B48F] hover:scale-110 transition-all duration-300 select-none cursor-pointer"
            aria-label="Instagram"
          >
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>

          {/* LinkedIn Logo (freeform 'in' mark) */}
          <div
            className="inline-flex items-center justify-center text-[#F1EFE9] hover:text-[#C6B48F] hover:scale-110 transition-all duration-300 select-none cursor-pointer"
            aria-label="LinkedIn"
          >
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </div>

          {/* WhatsApp Logo */}
          <div
            className="inline-flex items-center justify-center text-[#F1EFE9] hover:text-[#C6B48F] hover:scale-110 transition-all duration-300 select-none cursor-pointer"
            aria-label="WhatsApp"
          >
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
        </div>

        {/* Direct Contact Channels arranged cleanly below title and line */}
        <div
          ref={channelsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto items-start"
        >
          {/* Phone / WhatsApp */}
          <a
            href="https://wa.me/593999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C6B48F]/50 transition-all duration-300 flex items-center gap-4 text-[#F1EFE9]"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C6B48F] group-hover:border-[#C6B48F] group-hover:scale-105 transition-all">
              <Phone size={20} />
            </div>
            <div>
              <span className="block font-sans text-[11px] uppercase tracking-[0.18em] text-[#C6B48F] font-semibold mb-1">
                Atención Inmediata
              </span>
              <span className="font-sans text-lg sm:text-xl font-medium tracking-tight">
                +593 99 999 9999
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@jervisespinosa.com"
            className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C6B48F]/50 transition-all duration-300 flex items-center gap-4 text-[#F1EFE9]"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C6B48F] group-hover:border-[#C6B48F] group-hover:scale-105 transition-all">
              <Mail size={20} />
            </div>
            <div>
              <span className="block font-sans text-[11px] uppercase tracking-[0.18em] text-[#C6B48F] font-semibold mb-1">
                Correo Corporativo
              </span>
              <span className="font-sans text-base sm:text-lg font-medium tracking-tight">
                info@jervisespinosa.com
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
