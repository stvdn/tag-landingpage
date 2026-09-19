import { SectionHeading } from "@/shared/ui/SectionHeading";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { contacto } from "../content";
import { ContactForm } from "./ContactForm";

export function Contacto() {
  const displayNames = new Intl.DisplayNames(["es"], { type: "region" });
  const countries = getCountries()
    .map((code) => ({
      code,
      label: `${displayNames.of(code) ?? code} (+${getCountryCallingCode(code)})`,
    }))
    .sort((a, b) => a.label.localeCompare(b.label, "es"));

  return <section id="contacto" className="contact-section"><div className="shell contact-grid">
    <SectionHeading number="03" eyebrow="CONTACTO" title={contacto.titulo} description={contacto.descripcion} />
    <div className="contact-actions" data-reveal>
      <ContactForm defaultCountry={contacto.paisPredeterminado} countries={countries} />
      {(contacto.correo || contacto.telefono) && <div className="contact-direct" aria-label="Datos de contacto directo">
        {contacto.correo && <div><span>CORREO DIRECTO</span><a href={`mailto:${contacto.correo}`}>{contacto.correo}</a></div>}
        {contacto.telefono && <div><span>TELÉFONO / WHATSAPP</span><a href={`tel:${contacto.telefono.replace(/[^\d+]/g, "")}`}>{contacto.telefono}</a></div>}
      </div>}
    </div>
  </div></section>;
}
