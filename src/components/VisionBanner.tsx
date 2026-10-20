import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export default function VisionBanner() {
  return (
    <section id="por-que-nosotros" className="editorial-section vision-section py-24 sm:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="relative rounded-3xl bg-petrol-900 text-ivory overflow-hidden p-8 sm:p-14 lg:p-20 shadow-xl">

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-celeste tracking-[0.25em] uppercase text-xs font-semibold flex items-center gap-3">
                <span className="editorial-index" aria-hidden="true">04</span>
                Nuestra Promesa
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] text-white">
                <em className="editorial-emphasis">“Somos tu equipo, tú nuestra prioridad.”</em> Una relación construida sobre la confianza, la proactividad y el rigor absoluto.
              </h2>

              <p className="font-sans text-ivory/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                Cada consulta recibe la atención directa de socios y especialistas dedicados a entender la profundidad de tus intereses y responder con soluciones ágiles.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-celeste text-petrol font-medium text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-md group"
              >
                <span>Agendar Consulta</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="tel:+59320000000"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-ivory/20 text-ivory hover:bg-white/10 text-sm font-medium tracking-wide transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-celeste" />
                <span>Llamar al estudio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
