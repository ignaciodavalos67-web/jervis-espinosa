import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { partners } from "@/data/partners";
import "./partners.css";

interface PartnerOverviewProps {
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export default function PartnerOverview({ selectedId, onSelect }: PartnerOverviewProps) {
  const Heading = onSelect ? "h1" : "h2";
  return (
    <section id="nuestros-socios" className="partners-overview" aria-labelledby="partners-heading">
      <div className="partners-container partners-editorial">
        <div className="partners-introduction">
          <p className="partners-label">NUESTROS SOCIOS</p>
          <Heading id="partners-heading" className="partners-headline">Las personas detrás de <span>nuestra firma.</span></Heading>
          <p className="partners-supporting">Experiencia, visión y compromiso al servicio de nuestros clientes.</p>
          {!onSelect && <Link className="partners-discover" href="/socios">Conócelos<ArrowRight size={20} aria-hidden="true" /></Link>}
        </div>
        <div className="partners-portraits">
          {partners.map((partner) => {
            const portrait = partner.portrait && (
              <div className="partner-portrait-frame">
                <Image
                  unoptimized
                  src={partner.portrait.src}
                  alt={partner.name}
                  width={partner.portrait.width}
                  height={partner.portrait.height}
                  sizes="(max-width: 600px) 44vw, (max-width: 1000px) 40vw, 30vw"
                  priority={Boolean(onSelect)}
                />
              </div>
            );
            return onSelect ? (
              <button key={partner.id} type="button" onClick={() => onSelect(partner.id)} className="partner-choice" aria-pressed={selectedId === partner.id} aria-controls="perfil-socio">
                {portrait}
                <span className="partner-choice-name">{partner.name}<ArrowDownRight size={20} aria-hidden="true" /></span>
              </button>
            ) : (
              <figure key={partner.id} className="partner-preview-figure">
                {portrait}
                <figcaption>{partner.name}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
