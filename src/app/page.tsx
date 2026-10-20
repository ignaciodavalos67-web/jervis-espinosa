import HeroPresentation from "@/components/HeroPresentation";
import Navbar from "@/components/Navbar";
import ExpertisePreviews from "@/components/ExpertisePreviews";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MotionExperience from "@/components/MotionExperience";
import ValueProposition from "@/components/ValueProposition";
import PartnerOverview from "@/components/PartnerOverview";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido-principal">Saltar al contenido</a>
      <noscript><style>{`.site-header{visibility:visible}.cinematic-intro{height:auto}.intro-stage{height:auto;position:relative}.intro-brand-screen,.intro-discover,.intro-message-screen{display:none}.hero-enter{visibility:visible}.nav-logo-target{background:#F1EFE9;mask:url('/assets/logo-white.png') center/contain no-repeat}.hero{height:auto;min-height:100svh}`}</style></noscript>
      <Navbar intro />
      <main id="inicio">
        <HeroPresentation />
        <div id="contenido-principal" tabIndex={-1}>
          <ValueProposition />
          <ExpertisePreviews />
          <PartnerOverview />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <MotionExperience />
    </>
  );
}
