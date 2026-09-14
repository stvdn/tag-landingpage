import { SectionHeading } from "@/shared/ui/SectionHeading";
import { ArrowUpRightIcon } from "@/shared/ui/Icons";
import { contacto } from "../content";

export function Contacto() {
  return <section id="contacto" className="contact-section"><div className="shell contact-grid">
    <SectionHeading number="03" eyebrow="CONTACTO" title={contacto.titulo} description={contacto.descripcion} />
    <div className="contact-actions" data-reveal>
      {contacto.correo && <a className="button" href={`mailto:${contacto.correo}`}>Escribir un correo <ArrowUpRightIcon /></a>}
      {contacto.telefono && <a className="contact-phone" href={`tel:${contacto.telefono.replace(/[^\d+]/g, "")}`}>{contacto.telefono}</a>}
      {!contacto.correo && !contacto.telefono && <div className="contact-pending"><div className="pending-status"><i aria-hidden="true" /><span>DATOS PENDIENTES</span></div><p>Agrega aquí el WhatsApp o correo antes de compartir el portafolio.</p></div>}
    </div>
  </div></section>;
}
