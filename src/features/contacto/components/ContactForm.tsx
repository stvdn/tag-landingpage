"use client";

import { useActionState, useRef, useState } from "react";
import { parsePhoneNumberFromString, type CountryCode } from "libphonenumber-js";
import { ArrowUpRightIcon } from "@/shared/ui/Icons";
import { sendContactEmail } from "../actions";
import type { ContactFormState } from "../types";

const initialState: ContactFormState = { status: "idle", message: "" };

type ContactFormProps = {
  defaultCountry: CountryCode;
  countries: Array<{ code: CountryCode; label: string }>;
};

export function ContactForm({ defaultCountry, countries }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState);
  const [country, setCountry] = useState<CountryCode>(defaultCountry);
  const [phoneError, setPhoneError] = useState("");
  const phoneRef = useRef<HTMLInputElement>(null);

  function validatePhone(value: string, selectedCountry = country) {
    const valid = Boolean(value.trim() && parsePhoneNumberFromString(value, selectedCountry)?.isValid());
    const message = valid ? "" : "Escribe un número válido para el país seleccionado.";
    setPhoneError(message);
    phoneRef.current?.setCustomValidity(message);
    return valid;
  }

  return (
    <form className="contact-form" action={formAction}>
      <div className="contact-field">
        <label htmlFor="contact-name">Nombre <span aria-hidden="true">*</span></label>
        <input
          id="contact-name"
          name="nombre"
          type="text"
          autoComplete="name"
          minLength={2}
          maxLength={80}
          required
          aria-invalid={Boolean(state.errors?.nombre)}
          aria-describedby={state.errors?.nombre ? "contact-name-error" : undefined}
        />
        {state.errors?.nombre && <span id="contact-name-error" className="field-error">{state.errors.nombre}</span>}
      </div>

      <div className="contact-phone-fields">
        <div className="contact-field">
          <label htmlFor="contact-country">País <span aria-hidden="true">*</span></label>
          <select
            id="contact-country"
            name="pais"
            value={country}
            required
            aria-invalid={Boolean(state.errors?.pais)}
            aria-describedby={state.errors?.pais ? "contact-country-error" : undefined}
            onChange={(event) => {
              const nextCountry = event.target.value as CountryCode;
              setCountry(nextCountry);
              if (phoneRef.current?.value) validatePhone(phoneRef.current.value, nextCountry);
            }}
          >
            {countries.map(({ code, label }) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>
          {state.errors?.pais && <span id="contact-country-error" className="field-error">{state.errors.pais}</span>}
        </div>

        <div className="contact-field">
          <label htmlFor="contact-phone">Teléfono <span aria-hidden="true">*</span></label>
          <input
            ref={phoneRef}
            id="contact-phone"
            name="telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            minLength={6}
            maxLength={30}
            required
            aria-invalid={Boolean(phoneError || state.errors?.telefono)}
            aria-describedby={phoneError || state.errors?.telefono ? "contact-phone-error" : "contact-phone-help"}
            onBlur={(event) => validatePhone(event.target.value)}
            onInput={(event) => {
              if (phoneError) validatePhone(event.currentTarget.value);
            }}
          />
          <span id="contact-phone-help" className="field-help">Puedes escribirlo con o sin prefijo internacional.</span>
          {(phoneError || state.errors?.telefono) && <span id="contact-phone-error" className="field-error">{phoneError || state.errors?.telefono}</span>}
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">Correo electrónico <span aria-hidden="true">*</span></label>
        <input
          id="contact-email"
          name="correo"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          aria-invalid={Boolean(state.errors?.correo)}
          aria-describedby={state.errors?.correo ? "contact-email-error" : undefined}
        />
        {state.errors?.correo && <span id="contact-email-error" className="field-error">{state.errors.correo}</span>}
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">Cuéntame sobre tu proyecto <span aria-hidden="true">*</span></label>
        <textarea
          id="contact-message"
          name="mensaje"
          rows={5}
          minLength={10}
          maxLength={2_000}
          required
          aria-invalid={Boolean(state.errors?.mensaje)}
          aria-describedby={state.errors?.mensaje ? "contact-message-error" : undefined}
        />
        {state.errors?.mensaje && <span id="contact-message-error" className="field-error">{state.errors.mensaje}</span>}
      </div>

      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Sitio web</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button className="button" type="submit" disabled={pending}>
        {pending ? "Enviando…" : "Enviar mensaje"}
        <ArrowUpRightIcon />
      </button>

      {state.message && (
        <p className={`contact-status contact-status--${state.status}`} role="status" aria-live="polite">
          {state.message}
        </p>
      )}
    </form>
  );
}
