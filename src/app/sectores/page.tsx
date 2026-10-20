import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpertiseStory from "@/components/ExpertiseStory";
import { sectors } from "@/data/sectors";

export const metadata: Metadata = { title: "Sectores | Jervis & Espinosa" };

export default function SectorsPage() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">Saltar al contenido</a>
      <Navbar />
      <main id="contenido-principal" className="practice-page" tabIndex={-1}>
        <ExpertiseStory areas={sectors} title="Sectores" sectionId="sectores" label="Sectores" sectionNumber="04" indexLabel="Índice de sectores" />
      </main>
      <Footer />
    </>
  );
}
