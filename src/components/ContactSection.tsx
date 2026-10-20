"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    area: "Corporativo",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="editorial-section contact-section py-24 sm:py-32 bg-ivory text-petrol-900 border-b border-ivory-border"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="editorial-index" aria-hidden="true">04</span>
                <span className="text-xs uppercase tracking-[0.25em] text-petrol font-semibold">
                  Contacto
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-petrol-900 tracking-tight">
                Conversemos sobre tu caso o proyecto.
              </h2>
            </div>

            <p className="font-sans text-petrol-900/80 leading-relaxed text-base">
              Nuestro equipo está disponible para evaluar tus necesidades legales de manera confidencial y coordinar una sesión de trabajo estratégica.
            </p>

            <div className="space-y-6 pt-4 border-t border-ivory-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-celeste/40 flex items-center justify-center text-petrol shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-petrol uppercase tracking-wider">
                    Sede Quito
                  </h4>
                  <p className="text-sm text-petrol-900/75 mt-0.5">
                    Av. República del Salvador y Shyris, Edificio Impaqto, Piso 7. Quito, Ecuador.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-celeste/40 flex items-center justify-center text-petrol shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-petrol uppercase tracking-wider">
                    Correo Electrónico
                  </h4>
                  <a
                    href="mailto:contacto@jervisespinosa.com"
                    className="text-sm text-petrol hover:underline"
                  >
                    contacto@jervisespinosa.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-celeste/40 flex items-center justify-center text-petrol shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-petrol uppercase tracking-wider">
                    Teléfono & WhatsApp
                  </h4>
                  <a
                    href="tel:+593999999999"
                    className="text-sm text-petrol hover:underline"
                  >
                    +593 (2) 382-0000 / +593 99 999 9999
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-ivory-light p-8 sm:p-12 rounded-3xl border border-ivory-border shadow-xs">
            {submitted ? (
              <div role="status" className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-petrol/10 text-petrol rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-petrol font-medium">
                  Mensaje recibido exitosamente
                </h3>
                <p className="text-petrol-900/80 font-sans max-w-md mx-auto text-sm sm:text-base">
                  Gracias por comunicarte con Jervis & Espinosa. Uno de nuestros abogados coordinadores se pondrá en contacto contigo a la brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full border border-petrol text-petrol text-xs uppercase tracking-wider font-medium hover:bg-petrol hover:text-white transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-nombre" className="block text-xs uppercase tracking-wider text-petrol font-medium mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Roberto Andrade"
                      id="contact-nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border focus:border-petrol focus:ring-1 focus:ring-petrol outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-petrol font-medium mb-2">
                      Correo corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border focus:border-petrol focus:ring-1 focus:ring-petrol outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-empresa" className="block text-xs uppercase tracking-wider text-petrol font-medium mb-2">
                      Empresa u Organización
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Grupo Empresarial Andino"
                      id="contact-empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={(e) =>
                        setFormData({ ...formData, empresa: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border focus:border-petrol focus:ring-1 focus:ring-petrol outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-area" className="block text-xs uppercase tracking-wider text-petrol font-medium mb-2">
                      Área de interés
                    </label>
                    <select
                      id="contact-area"
                      name="area"
                      value={formData.area}
                      onChange={(e) =>
                        setFormData({ ...formData, area: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border focus:border-petrol focus:ring-1 focus:ring-petrol outline-none text-sm transition-all"
                    >
                      <option value="Corporativo">Derecho Corporativo & M&A</option>
                      <option value="Litigio">Litigio & Arbitraje</option>
                      <option value="Tributario">Derecho Tributario</option>
                      <option value="Laboral">Laboral & Migratorio</option>
                      <option value="Banca">Banca & Finanzas</option>
                      <option value="Propiedad">Propiedad Intelectual</option>
                      <option value="Otro">Otra consulta jurídica</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-mensaje" className="block text-xs uppercase tracking-wider text-petrol font-medium mb-2">
                    Resumen de la consulta *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe brevemente el contexto de tu consulta..."
                    id="contact-mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border focus:border-petrol focus:ring-1 focus:ring-petrol outline-none text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-petrol text-ivory font-medium text-xs uppercase tracking-widest hover:bg-petrol-900 transition-all duration-300 shadow-md group"
                >
                  <span>Enviar Consulta Confidencial</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-center text-petrol-900/60 font-sans">
                  Garantizamos absoluta reserva y confidencialidad bajo secreto profesional.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
