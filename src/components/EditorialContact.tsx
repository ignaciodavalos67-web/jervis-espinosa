"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
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
              y: 40,
              opacity: 0,
              stagger: 0.15,
              duration: 0.8,
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
      className="relative bg-[#101B1C] text-[#F1EFE9] pt-28 sm:pt-40 md:pt-48 pb-24 sm:pb-32 px-6 sm:px-12 lg:px-24 overflow-hidden border-none"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Minimal Category Tag */}
        <div ref={tagRef} className="flex items-center gap-4 mb-10 sm:mb-14">
          <span className="w-8 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
          <span className="font-poppins text-xs uppercase tracking-[0.24em] font-medium text-[#C6B48F]">
            CONTACTO & ALIANZAS
          </span>
        </div>

        {/* Monumental Reino Studio "SAY HI!" style title: CONTÁCTANOS */}
        <div className="mb-14 sm:mb-20 overflow-hidden">
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
              className="w-full h-[2px] bg-white/15 group-hover:bg-[#C6B48F] transition-colors duration-500 mt-8 will-change-transform"
            />
          </a>
        </div>

        {/* Social Logos: Instagram & LinkedIn (justo abajo de Contáctanos) */}
        <div className="flex items-center gap-8 mb-12 sm:mb-16 text-[#F1EFE9]">
          {/* Instagram Logo */}
          <div
            className="inline-flex items-center justify-center text-[#F1EFE9] hover:text-[#C6B48F] transition-colors duration-300 select-none"
            aria-label="Instagram"
          >
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
            className="inline-flex items-center justify-center text-[#F1EFE9] hover:text-[#C6B48F] transition-colors duration-300 select-none"
            aria-label="LinkedIn"
          >
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </div>
        </div>

        {/* Direct Contact Channels arranged cleanly below title and line */}
        <div
          ref={channelsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 items-start"
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
              <span className="block font-poppins text-[11px] uppercase tracking-[0.18em] text-[#C6B48F] font-semibold mb-1">
                Atención Inmediata
              </span>
              <span className="font-poppins text-lg sm:text-xl font-medium tracking-tight">
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
              <span className="block font-poppins text-[11px] uppercase tracking-[0.18em] text-[#C6B48F] font-semibold mb-1">
                Correo Corporativo
              </span>
              <span className="font-poppins text-base sm:text-lg font-medium tracking-tight">
                info@jervisespinosa.com
              </span>
            </div>
          </a>

          {/* Location */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4 text-[#F1EFE9]/90 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C6B48F] flex-shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <span className="block font-poppins text-[11px] uppercase tracking-[0.18em] text-[#C6B48F] font-semibold mb-1">
                Sede Principal
              </span>
              <span className="font-poppins text-base sm:text-lg font-medium">
                Quito, Ecuador &bull; Cobertura Nacional
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
