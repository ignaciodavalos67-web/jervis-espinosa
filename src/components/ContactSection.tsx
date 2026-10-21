"use client";

import { useState } from "react";
import { Minus, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import BrandAmpersand from "./BrandAmpersand";
import "./modern-contact.css";

const TOPICS = [
  "Tributario e inversiones",
  "Corporativo y comercial",
  "Resolución de conflictos",
  "Legal Family Office",
  "Otra consulta jurídica",
];

export default function ContactSection() {
  const [openDrawer, setOpenDrawer] = useState<"whatsapp" | "form" | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>(TOPICS[0]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    mensaje: "",
  });

  const toggleDrawer = (drawer: "whatsapp" | "form") => {
    setOpenDrawer((prev) => (prev === drawer ? null : drawer));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="elegant-contact-section" aria-labelledby="contact-heading">
      <div className="elegant-contact-container">
        {/* Editorial Header */}
        <header className="elegant-contact-header">
          <p className="elegant-contact-label">
            CONTACTO & ASESORÍA
          </p>
          <div className="elegant-contact-title-wrap">
            <h2 id="contact-heading" className="elegant-contact-title">
              Iniciemos una conversación{" "}
              <span className="contact-modern-word">estratégica.</span>
            </h2>
            <p className="elegant-contact-intro">
              Atendemos cada requerimiento con discreción y rigor profesional. Selecciona el canal de tu preferencia para iniciar el diálogo.
            </p>
          </div>
        </header>

        {/* Collapsible Drawers Stack */}
        <div className="elegant-drawers-list">
          {/* Drawer 1: WhatsApp */}
          <div className={`elegant-drawer-item ${openDrawer === "whatsapp" ? "is-expanded" : ""}`}>
            <button
              type="button"
              onClick={() => toggleDrawer("whatsapp")}
              className="elegant-drawer-trigger"
              aria-expanded={openDrawer === "whatsapp"}
              aria-controls="drawer-whatsapp-content"
            >
              <div className="drawer-header-left">
                <span className="drawer-index" aria-hidden="true">01</span>
                <span className="drawer-heading-text">Atención directa por WhatsApp</span>
              </div>
              <div className="drawer-header-right">
                <span className="drawer-badge-status">Canal inmediato</span>
                <span className="drawer-icon-toggle">
                  {openDrawer === "whatsapp" ? <Minus size={18} /> : <BrandAmpersand size={18} />}
                </span>
              </div>
            </button>

            {openDrawer === "whatsapp" && (
              <div id="drawer-whatsapp-content" className="drawer-body-wrap animate-drawer">
                <div className="drawer-wa-body">
                  <p className="drawer-body-desc">
                    Diseñado para consultas ágiles o para coordinar una llamada preliminar directamente con nuestro equipo legal.
                  </p>
                  <a
                    href="https://wa.me/593999999999?text=Hola,%20quisiera%20coordinar%20una%20consulta%20con%20Jervis%20%26%20Espinosa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="drawer-wa-btn"
                  >
                    <span>Escribir por WhatsApp</span>
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Drawer 2: Form ("¿De qué manera podemos asesorarte?") */}
          <div className={`elegant-drawer-item ${openDrawer === "form" ? "is-expanded" : ""}`}>
            <button
              type="button"
              onClick={() => toggleDrawer("form")}
              className="elegant-drawer-trigger"
              aria-expanded={openDrawer === "form"}
              aria-controls="drawer-form-content"
            >
              <div className="drawer-header-left">
                <span className="drawer-index" aria-hidden="true">02</span>
                <span className="drawer-heading-text">¿De qué manera podemos asesorarte?</span>
              </div>
              <div className="drawer-header-right">
                <span className="drawer-badge-status">Formulario confidencial</span>
                <span className="drawer-icon-toggle">
                  {openDrawer === "form" ? <Minus size={18} /> : <BrandAmpersand size={18} />}
                </span>
              </div>
            </button>

            {openDrawer === "form" && (
              <div id="drawer-form-content" className="drawer-body-wrap animate-drawer">
                <div className="drawer-form-body">
                  {submitted ? (
                    <div className="contact-submitted-state" role="status">
                      <CheckCircle2 size={32} className="submitted-check" />
                      <h3 className="submitted-heading">Consulta recibida con reserva profesional</h3>
                      <p className="submitted-sub">
                        Un socio o abogado responsable revisará la información y se comunicará a la brevedad posible.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ nombre: "", email: "", empresa: "", mensaje: "" });
                        }}
                        className="submitted-back-btn"
                      >
                        Enviar una nueva consulta
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="concierge-form">
                      {/* Topic Selection */}
                      <div className="concierge-topic-group">
                        <span className="concierge-field-label">Área o materia principal</span>
                        <div className="concierge-topics-row">
                          {TOPICS.map((topic) => (
                            <button
                              key={topic}
                              type="button"
                              onClick={() => setSelectedTopic(topic)}
                              className={`concierge-topic-tag ${selectedTopic === topic ? "is-active" : ""}`}
                            >
                              {topic}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Fields */}
                      <div className="concierge-fields-grid">
                        <div className="concierge-field">
                          <label htmlFor="form-nombre" className="concierge-field-label">Nombre completo *</label>
                          <input
                            id="form-nombre"
                            type="text"
                            required
                            placeholder="Ej. Roberto Andrade"
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            className="concierge-input"
                          />
                        </div>

                        <div className="concierge-field">
                          <label htmlFor="form-email" className="concierge-field-label">Correo electrónico corporativo *</label>
                          <input
                            id="form-email"
                            type="email"
                            required
                            placeholder="roberto@empresa.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="concierge-input"
                          />
                        </div>
                      </div>

                      <div className="concierge-field">
                        <label htmlFor="form-empresa" className="concierge-field-label">Empresa u organización (opcional)</label>
                        <input
                          id="form-empresa"
                          type="text"
                          placeholder="Nombre de la compañía o grupo"
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          className="concierge-input"
                        />
                      </div>

                      <div className="concierge-field">
                        <label htmlFor="form-mensaje" className="concierge-field-label">Detalles de la consulta *</label>
                        <textarea
                          id="form-mensaje"
                          rows={3}
                          required
                          placeholder="Describe brevemente el contexto u objetivo legal..."
                          value={formData.mensaje}
                          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                          className="concierge-textarea"
                        />
                      </div>

                      <div className="concierge-footer">
                        <button type="submit" className="concierge-submit-btn">
                          <span>Enviar consulta confidencial</span>
                          <Send size={15} />
                        </button>
                        <span className="concierge-legal-note">
                          Información amparada bajo secreto profesional.
                        </span>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
