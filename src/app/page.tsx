import CinematicIntro from "@/components/CinematicIntro";
import Navbar from "@/components/Navbar";
import ValueProposition from "@/components/ValueProposition";
import PracticeAreasPreview from "@/components/PracticeAreasPreview";
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
          {/* 2. Propuesta de valor (Warm Ivory) */}
          <ValueProposition />

          {/* 3. Áreas de Práctica (Dark Night Green, 50/50 layout, no arrows, no numbers) */}
          <PracticeAreasPreview />

          {/* 4. Sectores (Warm Ivory, photographic asymmetrical editorial) */}
          <SectorsPreview />

          {/* 5. Final Contact Experience (Howard-inspired, Dark Night Green, "Conversemos") */}
          <EditorialContact />
        </div>
      </main>
      <Footer />
    </>
  );
}
