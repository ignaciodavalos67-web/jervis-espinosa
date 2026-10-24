import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReinoWorksShowcase, { ReinoWorkItem } from "@/components/ReinoWorksShowcase";

export const metadata: Metadata = {
  title: "Áreas de Especialidad | Jervis & Espinosa",
  description: "Áreas de práctica y asesoría legal estratégica de Jervis & Espinosa Abogados en Ecuador.",
};

const practiceWorksItems: ReinoWorkItem[] = [
  {
    id: "tributario",
    serial: "01",
    title: "TRIBUTARIO E INVERSIONES",
    category: "Estructuras Fiscales & Capital",
    description:
      "Asesoramiento tributario sofisticado y estructuras fiscales para optimizar y proteger inversiones de alto impacto, previniendo contingencias y defendiendo intereses en litigios contencioso-tributarios.",
    image: "/assets/editorial/practice-tributario.jpg",
    alt: "Asesoría tributaria y planificación fiscal internacional",
    href: "/#contacto",
    services: [
      "Planificación fiscal",
      "Private Wealth",
      "Inversiones transfronterizas",
      "Litigio contencioso-tributario",
      "Planificación sucesoria",
    ],
  },
  {
    id: "corporativo",
    serial: "02",
    title: "CORPORATIVO Y COMERCIAL",
    category: "Sociedades, Fusiones & M&A",
    description:
      "Estructuración de operaciones complejas, reorganizaciones societarias, viabilización de modelos de negocio extranjeros y acuerdos de accionistas con los más altos estándares internacionales.",
    image: "/assets/editorial/practice-corporativo.jpg",
    alt: "Derecho corporativo y transacciones comerciales complejas",
    href: "/#contacto",
    services: [
      "Aterrizaje corporativo en Ecuador",
      "M&A y venta de activos",
      "Reestructuraciones de grupos",
      "Gobernanza ESG",
    ],
  },
  {
    id: "litigio",
    serial: "03",
    title: "RESOLUCIÓN DE CONFLICTOS",
    category: "Litigio Estratégico & Arbitraje",
    description:
      "Defensa rigurosa en controversias de alta complejidad en sede judicial, arbitral, administrativa y constitucional, protegiendo el patrimonio y la continuidad de las empresas.",
    image: "/assets/editorial/practice-litigio.jpg",
    alt: "Resolución de conflictos y arbitraje",
    href: "/#contacto",
    services: [
      "Arbitraje comercial",
      "Negociación de controversias",
      "Litigio constitucional",
      "Conflictos societarios",
    ],
  },
  {
    id: "legal-family-office",
    serial: "04",
    title: "LEGAL FAMILY OFFICE",
    category: "Gobernanza & Patrimonio Familiar",
    description:
      "Soluciones jurídicas integrales para preservar, ordenar y proyectar el patrimonio familiar hacia futuras generaciones, articulando protocolos familiares, vehículos fiduciarios y cumplimiento transfronterizo.",
    image: "/assets/editorial/practice-family-office.jpg",
    alt: "Legal Family Office y gobernanza familiar",
    href: "/#contacto",
    services: [
      "Protocolos familiares",
      "Fideicomisos y vehículos de inversión",
      "Sucesión estratégica",
      "Protección de activos",
    ],
  },
];

export default function PracticePage() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido-principal" tabIndex={-1}>
        <ReinoWorksShowcase
          id="areas-de-especialidad"
          bannerTag="ÁREAS DE ESPECIALIDAD"
          bannerTitle="Asesoramiento jurídico con rigor estratégico y visión global."
          bannerSubtitle="Acompañamos a organizaciones líderes e inversionistas en los momentos clave de su trayectoria en Ecuador."
          items={practiceWorksItems}
        />
      </main>
      <Footer />
    </>
  );
}
