"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PracticeArea } from "@/data/practiceAreas";
import "./practice-areas.css";

interface ExpertiseStoryProps {
  areas: PracticeArea[];
  title: string;
  sectionId: string;
  label?: string;
  sectionNumber?: string;
  introduction?: string;
  indexLabel?: string;
}

export default function ExpertiseStory({
  areas,
  title,
  sectionId,
  introduction,
}: ExpertiseStoryProps) {
  // All accordion items closed by default
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleArea = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id={sectionId} className="master-accordion-section" aria-labelledby="expertise-heading">
      {/* Background Ampersand Watermark (same as hero presentation) */}
      <div className="expertise-ampersand-bg" aria-hidden="true">
        <Image
          unoptimized
          priority
          src="/assets/ampersand.png"
          alt=""
          width={1024}
          height={905}
          className="expertise-ampersand-img"
        />
      </div>

      <div className="master-accordion-container">
        {/* Editorial Header */}
        <header className="master-accordion-header">
          <div className="master-accordion-title-wrap">
            <h1 id="expertise-heading" className="master-accordion-title">
              {title}
            </h1>
            {introduction ? (
              <p className="master-accordion-subtext">{introduction}</p>
            ) : (
              <p className="master-accordion-subtext">
                Asesoramiento jurídico integral con profundo entendimiento técnico, regulatorio y de negocios en los sectores neurálgicos del país.
              </p>
            )}
          </div>
        </header>

        {/* Master Accordion Stack */}
        <div className="master-accordion-stack" role="tablist">
          {areas.map((area) => {
            const isOpen = openId === area.id;

            return (
              <article
                key={area.id}
                id={area.id}
                className={`master-accordion-row ${isOpen ? "is-expanded" : ""}`}
              >
                {/* Accordion Row Trigger */}
                <button
                  type="button"
                  onClick={() => toggleArea(area.id)}
                  className="master-accordion-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`content-${area.id}`}
                >
                  <div className="trigger-left">
                    <h2 className="trigger-title">{area.title}</h2>
                  </div>
                </button>

                {/* Expanded Architectural Drawer */}
                {isOpen && (
                  <div
                    id={`content-${area.id}`}
                    className="master-accordion-drawer animate-drawer-open"
                  >
                    <div className="drawer-layout-grid">
                      {/* Left Column: Strategic Focus */}
                      <div className="drawer-overview-col">
                        <span className="drawer-col-tag">ENFOQUE ESTRATÉGICO</span>
                        <div className="drawer-desc-wrap">
                          {area.description.map((paragraph, idx) => (
                            <p key={idx} className="drawer-paragraph">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <div className="drawer-cta-wrap">
                          <Link href="/#contacto" className="drawer-consult-link">
                            <span>Coordinar consulta sobre {area.title}</span>
                            <ArrowUpRight size={16} />
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: Specialized Capabilities */}
                      <div className="drawer-services-col">
                        <span className="drawer-col-tag">CAPACIDADES & SERVICIOS</span>
                        <ol className="drawer-services-list" role="list">
                          {area.services.map((service, sIdx) => (
                            <li key={sIdx} className="drawer-service-item">
                              <div className="service-details">
                                <h3 className="service-name">
                                  {service.title.replace(/\.$/, "")}
                                </h3>
                                {service.description && (
                                  <p className="service-expl">{service.description}</p>
                                )}
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
