"use server";

import "server-only";
import { isSupportedCountry, parsePhoneNumberFromString, type CountryCode } from "libphonenumber-js";
import { Resend } from "resend";
import type { ContactFormState } from "./types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContactEmail(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const nombre = readField(formData, "nombre");
  const correo = readField(formData, "correo");
  const pais = readField(formData, "pais").toUpperCase();
  const telefono = readField(formData, "telefono");
  const mensaje = readField(formData, "mensaje");
  const website = readField(formData, "website");

  if (website) {
    return { status: "success", message: "Gracias. Tu mensaje fue enviado." };
  }

  const errors: ContactFormState["errors"] = {};

  if (nombre.length < 2 || nombre.length > 80) {
    errors.nombre = "Escribe un nombre de entre 2 y 80 caracteres.";
  }

  if (!emailPattern.test(correo) || correo.length > 254) {
    errors.correo = "Escribe un correo electrónico válido.";
  }

  const countryCode = pais as CountryCode;
  if (!isSupportedCountry(countryCode)) {
    errors.pais = "Selecciona un país válido.";
  }

  const phoneNumber = isSupportedCountry(countryCode)
    ? parsePhoneNumberFromString(telefono, countryCode)
    : undefined;

  if (!phoneNumber?.isValid()) {
    errors.telefono = "Escribe un número válido para el país seleccionado.";
  }

  if (mensaje.length < 10 || mensaje.length > 2_000) {
    errors.mensaje = "Escribe un mensaje de entre 10 y 2.000 caracteres.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos señalados.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    console.error("Missing Resend contact-form environment variables.");
    return {
      status: "error",
      message: "El formulario no está disponible en este momento. Inténtalo más tarde.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: correo,
      subject: `Nuevo mensaje del portafolio: ${nombre.replace(/[\r\n]/g, " ")}`,
      text: [
        `Nombre: ${nombre}`,
        `Correo: ${correo}`,
        `Teléfono: ${phoneNumber!.formatInternational()}`,
        `País: ${pais}`,
        "",
        "Mensaje:",
        mensaje,
      ].join("\n"),
    });

    if (!error) {
      return { status: "success", message: "Gracias. Tu mensaje fue enviado." };
    }

    console.error("Resend could not deliver the contact message:", error);
  } catch (error) {
    console.error("Resend request failed:", error);
  }

  return {
    status: "error",
    message: "No pudimos enviar tu mensaje. Inténtalo de nuevo.",
  };
}
