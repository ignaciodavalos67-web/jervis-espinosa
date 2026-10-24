"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface ReinoWorkItem {
  id: string;
  serial: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
  category?: string;
  services?: string[];
}

interface ReinoWorksShowcaseProps {
  id?: string;
  bannerTag?: string;
  bannerTitle: string;
  bannerSubtitle?: string;
  items: ReinoWorkItem[];
}

export default function ReinoWorksShowcase({
  id = "works",
  bannerTag,
  bannerTitle,
  bannerSubtitle,
  items,
}: ReinoWorksShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const workItems = containerRef.current?.querySelectorAll(".reino-work-item");
        if (!workItems) return;

        workItems.forEach((element) => {
          const serial = element.querySelector(".reino-work-item-serial");
          const title = element.querySelector(".reino-work-item-title");
          const image = element.querySelector(".reino-work-item-image");
          const desc = element.querySelector(".reino-work-item-description");

          // 1. Serial Parallax (slides behind image from y: 10% to 110%)
          if (serial) {
            gsap.fromTo(
              serial,
              { y: "10%" },
              {
                y: "110%",
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.6,
                },
              }
            );
          }

          // 2. Title entrance (opacity & subtle rise faster than page)
          if (title) {
            gsap.from(title, {
              opacity: 0.2,
              y: "25%",
              duration: 1,
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                end: "bottom center",
                scrub: 0.6,
              },
            });
          }

          // 3. Image subtle scroll scale
          if (image) {
            gsap.to(image, {
              scale: 1.08,
              duration: 2,
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          }

          // 4. Description entrance
          if (desc) {
            gsap.from(desc, {
              opacity: 0.3,
              y: 20,
              duration: 1,
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 60%",
                scrub: 0.6,
              },
            });
          }
        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <div ref={containerRef} id={id} className="relative bg-[#101B1C] text-[#F1EFE9] min-h-screen">
      {/* Banner Section (Exact Reino Studio typography & spacing) */}
      <section className="pt-36 sm:pt-44 md:pt-52 pb-16 sm:pb-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        {bannerTag && (
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <span className="w-8 h-[1px] bg-[#C6B48F]" aria-hidden="true" />
            <span className="font-poppins text-xs uppercase tracking-[0.24em] font-medium text-[#C6B48F]">
              {bannerTag}
            </span>
          </div>
        )}
        <h1 className="font-poppins text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-[-0.035em] text-[#F1EFE9] max-w-5xl uppercase">
          {bannerTitle}
        </h1>
        {bannerSubtitle && (
          <p className="mt-8 font-poppins text-lg sm:text-2xl font-normal text-[#F1EFE9]/70 max-w-3xl leading-relaxed tracking-[-0.01em]">
            {bannerSubtitle}
          </p>
        )}
      </section>

      {/* Works List (Exact Reino Studio asymmetric rhythm & parallax numbers) */}
      <section className="pb-32 sm:pb-48 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="space-y-36 sm:space-y-48 md:space-y-64">
          {items.map((item, index) => {
            const rhythm = (index % 4) + 1; // 1, 2, 3, 4
            const isRightAligned = rhythm === 2 || rhythm === 4;

            // Widths matching Reino:
            // Item 1: 68% left
            // Item 2: 82% right
            // Item 3: 62% left
            // Item 4: 78% right
            const widthClass =
              rhythm === 1
                ? "md:max-w-[70%]"
                : rhythm === 2
                ? "md:max-w-[82%] md:ml-auto"
                : rhythm === 3
                ? "md:max-w-[64%]"
                : "md:max-w-[78%] md:ml-auto";

            return (
              <article
                key={item.id}
                id={item.id}
                className={`reino-work-item relative w-full ${widthClass}`}
              >
                <div className={`relative w-full ${isRightAligned ? "md:text-right" : "text-left"}`}>
                  {/* Huge Serial Parallax Number sitting behind media */}
                  <div
                    aria-hidden="true"
                    className={`reino-work-item-serial absolute top-[-5rem] sm:top-[-8rem] font-poppins text-[7rem] sm:text-[11rem] md:text-[14rem] lg:text-[16rem] font-bold text-[#F1EFE9]/[0.08] leading-none select-none pointer-events-none z-0 ${
                      isRightAligned ? "left-[-2rem] sm:left-[-6rem]" : "right-[-2rem] sm:right-[-6rem]"
                    }`}
                  >
                    {item.serial}
                  </div>

                  {/* Work Title */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    {item.category && (
                      <span className="block font-poppins text-xs uppercase tracking-[0.2em] font-medium text-[#C6B48F] mb-3">
                        {item.category}
                      </span>
                    )}
                    <h2 className="reino-work-item-title font-poppins text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.025em] text-[#F1EFE9] leading-[1.12]">
                      {item.title}
                    </h2>
                  </div>

                  {/* Media (Image with overflow hidden & scale transition) */}
                  <div className="reino-work-item-media relative w-full aspect-[16/10] overflow-hidden my-6 sm:my-8 bg-[#172628] z-10 rounded-sm">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="reino-work-item-image object-cover transition-transform duration-700 ease-out hover:scale-105"
                      priority={index === 0}
                    />
                  </div>

                  {/* Work Services as Clean Text Below Media (Subtle, refined small bullets) */}
                  <div className="relative z-10 space-y-4 pt-1">
                    {item.services && item.services.length > 0 && (
                      <ul
                        className={`reino-work-item-description flex flex-wrap items-center gap-x-4 gap-y-2 font-poppins text-xs sm:text-sm font-normal text-[#F1EFE9]/70 tracking-normal ${
                          isRightAligned ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        {item.services.map((service, sIdx) => (
                          <li key={sIdx} className="inline-flex items-center gap-2">
                            {sIdx > 0 && (
                              <span
                                className="w-1 h-1 rounded-full bg-[#C6B48F]/80"
                                aria-hidden="true"
                              />
                            )}
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.href && (
                      <div className={`pt-3 ${isRightAligned ? "md:flex md:justify-end" : ""}`}>
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-2 font-poppins text-xs uppercase tracking-[0.18em] font-semibold text-[#C6B48F] hover:text-white transition-colors pb-1 border-b border-[#C6B48F]/40 hover:border-white"
                        >
                          <span>Consulta estratégica sobre {item.title}</span>
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
