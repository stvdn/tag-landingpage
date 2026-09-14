import { SectionHeading } from "@/shared/ui/SectionHeading";
import { contacto } from "../content";

export function Contacto() {
  return <section id="contacto" className="contact-section container">
    <SectionHeading number="02" eyebrow="CONVERSEMOS" title={contacto.titulo} description={contacto.descripcion} />
    <div className="contact-actions">
      {contacto.correo && <a className="button" href={`mailto:${contacto.correo}`}>Escribir un correo <span aria-hidden="true">↗</span></a>}
      {contacto.telefono && <a className="contact-phone" href={`tel:${contacto.telefono.replace(/[^\d+]/g, "")}`}>{contacto.telefono}</a>}
      {!contacto.correo && !contacto.telefono && <div className="contact-pending"><span className="eyebrow">PRÓXIMAMENTE</span><p>Los datos de contacto estarán disponibles al presentar el proyecto real.</p></div>}
    </div>
  </section>;
}
