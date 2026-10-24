import CinematicIntro from "@/components/CinematicIntro";
import Navbar from "@/components/Navbar";
import PracticeAreasPreview from "@/components/PracticeAreasPreview";
import ValueProposition from "@/components/ValueProposition";
import SectorsPreview from "@/components/SectorsPreview";
import EditorialContact from "@/components/EditorialContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>
      <Navbar intro />
      <main id="inicio">
        {/* 1. Cinematic Quito automatic introduction */}
        <CinematicIntro />

        <div id="contenido-principal" tabIndex={-1}>
          {/* 2. Áreas de Práctica */}
          <PracticeAreasPreview />

          {/* 3. Propuesta de Valor & Nuestro Compromiso (en la mitad de Áreas de Práctica y Sectores) */}
          <ValueProposition />

          {/* 4. Sectores */}
          <SectorsPreview />

          {/* 5. Contacto */}
          <EditorialContact />
        </div>
      </main>
      <Footer />
    </>
  );
}
