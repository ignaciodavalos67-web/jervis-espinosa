import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReinoWorksShowcase, { ReinoWorkItem } from "@/components/ReinoWorksShowcase";

export const metadata: Metadata = {
  title: "Sectores | Jervis & Espinosa",
  description: "Entendimiento profundo de los sectores neurálgicos de la economía ecuatoriana.",
};

const sectorWorksItems: ReinoWorkItem[] = [
  {
    id: "telecomunicaciones",
    serial: "01",
    title: "TELECOMUNICACIONES",
    category: "Conectividad & Infraestructura Digital",
    description:
      "Acompañamiento a operadores líderes en planificación jurídica, obtención de títulos habilitantes, concesión de frecuencias, cumplimiento normativo y defensa contenciosa ante entes reguladores.",
    image: "/assets/editorial/sector-telecom.jpg",
    alt: "Telecomunicaciones e infraestructura digital",
    href: "/#contacto",
    services: [
      "Títulos habilitantes",
      "Concesión de frecuencias",
      "Nuevas operaciones digitales",
      "Defensa regulatoria",
    ],
  },
  {
    id: "tecnologias-financieras",
    serial: "02",
    title: "TECNOLOGÍAS FINANCIERAS",
    category: "Fintech, Pagos & Capital de Riesgo",
    description:
      "Viabilización jurídica de plataformas fintech, licenciamiento ante entidades rectoras, mitigación de riesgos regulatorios y estructuración de rondas de inversión seed, Series A y capital transfronterizo.",
    image: "/assets/editorial/sector-financiero.jpg",
    alt: "Tecnologías financieras y fintech",
    href: "/#contacto",
    services: [
      "Licencias regulatorias",
      "Rondas de financiación",
      "Pasarelas de pagos y wallets",
      "Compliance financiero",
    ],
  },
  {
    id: "energia-y-recursos-naturales",
    serial: "03",
    title: "ENERGÍA & RECURSOS NATURALES",
    category: "Energías Renovables & Infraestructura",
    description:
      "Asesoría regulatoria y contractual en proyectos de transición energética, contratos de concesión, cumplimiento ambiental y estructuración de financiamientos en industrias estratégicas.",
    image: "/assets/editorial/sector-energia.jpg",
    alt: "Energía y recursos naturales estratégicos",
    href: "/#contacto",
    services: [
      "Concesiones estratégicas",
      "Energías renovables",
      "Marco regulatorio ambiental",
      "Estructuración de inversiones",
    ],
  },
  {
    id: "inmobiliario-y-construccion",
    serial: "04",
    title: "INMOBILIARIO & CONSTRUCCIÓN",
    category: "Desarrollo Urbano & Fideicomisos",
    description:
      "Estructuración legal y fiduciaria de desarrollos urbanísticos, permisos de construcción, régimen de propiedad horizontal y negociación de transacciones de activos de escala nacional.",
    image: "/assets/editorial/sector-inmobiliario.jpg",
    alt: "Inmobiliario y construcción",
    href: "/#contacto",
    services: [
      "Fideicomisos inmobiliarios",
      "Permisología y urbanismo",
      "Contratos de obra y EPC",
      "Régimen de propiedad horizontal",
    ],
  },
];

export default function SectorsPage() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido-principal" tabIndex={-1}>
        <ReinoWorksShowcase
          id="sectores"
          bannerTag="SECTORES ESTRATÉGICOS"
          bannerTitle="Entendimiento profundo de las industrias neurálgicas del país."
          bannerSubtitle="Acompañamos a corporaciones locales e internacionales en los sectores donde la certeza jurídica determina el éxito."
          items={sectorWorksItems}
        />
      </main>
      <Footer />
    </>
  );
}
