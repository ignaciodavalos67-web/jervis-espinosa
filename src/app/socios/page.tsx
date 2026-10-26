import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Nuestros Socios | Jervis & Espinosa" };

export default function PartnersPage() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">Saltar al contenido</a>
      <Navbar />
      <main id="contenido-principal" className="bg-[#101B1C]" tabIndex={-1}><Partners /></main>
      <Footer />
    </>
  );
}
