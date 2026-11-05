import CinematicIntro from "@/components/CinematicIntro";
import Navbar from "@/components/Navbar";
import ValueProposition from "@/components/ValueProposition";
import TeamAndWhatWeDoSection from "@/components/home/TeamAndWhatWeDoSection";
import MultiFamilyOfficeSection from "@/components/home/MultiFamilyOfficeSection";
import ObjectivesCarousel from "@/components/home/ObjectivesCarousel";
import TeamPrioritySection from "@/components/home/TeamPrioritySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>
      <Navbar intro />
      <main id="inicio" className="relative">
        {/* SECCIÓN 1 — HERO / VÍDEO DE QUITO (Fijado detrás con revelado tipo cortina Lenz & Staehelin) */}
        <CinematicIntro />

        <div
          id="contenido-principal"
          className="relative z-10 bg-[#202324] shadow-[0_-20px_50px_rgba(0,0,0,0.6)]"
          tabIndex={-1}
        >
          {/* SECCIÓN 2 — EL VALOR DE LAS DECISIONES BIEN ESTRUCTURADAS */}
          <ValueProposition />

          {/* SECCIÓN 3 Y 4 — SOMOS TU EQUIPO & QUÉ HACEMOS */}
          <TeamAndWhatWeDoSection />

          {/* SECCIÓN 5 — NUESTRO OBJETIVO ES CUMPLIR TUS OBJETIVOS */}
          <ObjectivesCarousel />

          {/* SECCIÓN 6 — MULTI FAMILY OFFICE */}
          <MultiFamilyOfficeSection />

          {/* SECCIÓN 7 — SOMOS TU EQUIPO, TÚ NUESTRA PRIORIDAD & REDES */}
          <TeamPrioritySection />
        </div>
      </main>
      <Footer />
    </>
  );
}
