import { ShieldCheck, Scale, Compass, Award } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: Scale,
      title: "Rigor & Precisión",
      desc: "Análisis exhaustivo de cada escenario normativo para brindar certezas sólidas en entornos dinámicos.",
    },
    {
      icon: ShieldCheck,
      title: "Enfoque Preventivo",
      desc: "Anticipamos contingencias antes de que se conviertan en litigios o costos imprevistos para tu empresa.",
    },
    {
      icon: Compass,
      title: "Visión de Negocios",
      desc: "No somos simples consultores legales; entendemos los objetivos comerciales y la rentabilidad de cada decisión.",
    },
    {
      icon: Award,
      title: "Ética Intachable",
      desc: "Compromiso absoluto con la transparencia, la confidencialidad y los más altos estándares éticos del país.",
    },
  ];

  return (
    <section id="la-firma" className="editorial-section about-section py-24 sm:py-32 bg-ivory text-petrol-900 border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="editorial-index" aria-hidden="true">02</span>
          <span className="text-xs uppercase tracking-[0.25em] text-petrol font-semibold">
            La Firma
          </span>
        </div>

        {/* Main Editorial Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal leading-[1.18] text-petrol-900">
              Arquitectura jurídica diseñada para <em className="editorial-emphasis">proteger el valor</em> de tu negocio y potenciar su crecimiento en Ecuador.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6 text-petrol-900/80 font-sans leading-relaxed text-base sm:text-lg">
            <p>
              En <strong className="text-petrol font-semibold">Jervis & Espinosa</strong> combinamos la sobriedad y la profundidad del derecho tradicional con la agilidad y visión contemporánea que demandan los negocios de hoy.
            </p>
            <p>
              Nuestra práctica se fundamenta en un principio claro: <em>somos tu equipo, tú nuestra prioridad</em>. Acompañamos a corporaciones locales, grupos multinacionales y familias empresariales con un servicio cercano, estratégico y de máxima excelencia técnica.
            </p>

            <div className="pt-4 flex items-center gap-8 border-t border-ivory-border">
              <div>
                <span className="block font-serif text-3xl sm:text-4xl font-normal text-petrol">
                  100%
                </span>
                <span className="text-xs uppercase tracking-wider text-petrol-900/70">
                  Compromiso y dedicación
                </span>
              </div>
              <div className="w-[1px] h-10 bg-ivory-border" />
              <div>
                <span className="block font-serif text-3xl sm:text-4xl font-normal text-petrol">
                  Quito & Guayaquil
                </span>
                <span className="text-xs uppercase tracking-wider text-petrol-900/70">
                  Cobertura en todo el país
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mt-20 pt-16 border-t border-ivory-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="pillar group p-6 rounded-2xl bg-ivory-light border border-ivory-border/70 hover:border-petrol/40 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-celeste/40 flex items-center justify-center text-petrol mb-5 group-hover:bg-petrol group-hover:text-celeste transition-colors duration-300">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl text-petrol font-medium mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-petrol-900/75 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
