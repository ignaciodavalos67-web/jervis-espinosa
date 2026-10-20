import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PracticeAreas from "@/components/PracticeAreas";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Áreas de Práctica | Jervis & Espinosa",
};

export default function PracticePage() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">Saltar al contenido</a>
      <Navbar />
      <main id="contenido-principal" className="practice-page" tabIndex={-1}>
        <PracticeAreas />
      </main>
      <Footer />
    </>
  );
}
