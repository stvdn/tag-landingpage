import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { sendMock } = vi.hoisted(() => ({
  sendMock: vi.fn(),
}));

vi.mock("server-only", () => ({}));
vi.mock("resend", () => ({
  Resend: class ResendMock {
    emails = { send: sendMock };
  },
}));

import { sendContactEmail } from "./actions";

const initialState = { status: "idle" as const, message: "" };

function validFormData(overrides: Record<string, string> = {}) {
  const values = {
    nombre: "Ana Torres",
    correo: "ana@example.com",
    pais: "CO",
    telefono: "300 123 4567",
    mensaje: "Necesito una puerta segura para mi proyecto.",
    website: "",
    ...overrides,
  };
  const formData = new FormData();

  Object.entries(values).forEach(([key, value]) => formData.set(key, value));
  return formData;
}

describe("sendContactEmail", () => {
  beforeEach(() => {
    vi.stubEnv("RESEND_API_KEY", "re_test");
    vi.stubEnv("CONTACT_EMAIL_FROM", "TAG/01 <contacto@example.com>");
    vi.stubEnv("CONTACT_EMAIL_TO", "ventas@example.com");
    sendMock.mockReset();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("devuelve los errores de todos los campos inválidos sin enviar", async () => {
    const result = await sendContactEmail(initialState, validFormData({
      nombre: "A",
      correo: "correo-invalido",
      pais: "ZZ",
      telefono: "123",
      mensaje: "Corto",
    }));

    expect(result).toEqual({
      status: "error",
      message: "Revisa los campos señalados.",
      errors: {
        nombre: "Escribe un nombre de entre 2 y 80 caracteres.",
        correo: "Escribe un correo electrónico válido.",
        pais: "Selecciona un país válido.",
        telefono: "Escribe un número válido para el país seleccionado.",
        mensaje: "Escribe un mensaje de entre 10 y 2.000 caracteres.",
      },
    });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("acepta silenciosamente el honeypot y no contacta a Resend", async () => {
    const result = await sendContactEmail(initialState, validFormData({ website: "https://spam.example" }));

    expect(result).toEqual({ status: "success", message: "Gracias. Tu mensaje fue enviado." });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("normaliza el teléfono y entrega el correo mediante Resend", async () => {
    sendMock.mockResolvedValue({ data: { id: "email-id" }, error: null });

    const result = await sendContactEmail(initialState, validFormData());

    expect(result).toEqual({ status: "success", message: "Gracias. Tu mensaje fue enviado." });
    expect(sendMock).toHaveBeenCalledOnce();
    expect(sendMock).toHaveBeenCalledWith({
      from: "TAG/01 <contacto@example.com>",
      to: "ventas@example.com",
      replyTo: "ana@example.com",
      subject: "Nuevo mensaje del portafolio: Ana Torres",
      text: [
        "Nombre: Ana Torres",
        "Correo: ana@example.com",
        "Teléfono: +57 300 1234567",
        "País: CO",
        "",
        "Mensaje:",
        "Necesito una puerta segura para mi proyecto.",
      ].join("\n"),
    });
  });

  it("informa que el formulario no está disponible si falta configuración", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined);

    const result = await sendContactEmail(initialState, validFormData());

    expect(result).toEqual({
      status: "error",
      message: "El formulario no está disponible en este momento. Inténtalo más tarde.",
    });
    expect(sendMock).not.toHaveBeenCalled();
    expect(consoleError).toHaveBeenCalledOnce();
  });

  it.each([
    ["un error de la API", async () => ({ data: null, error: { message: "rejected" } })],
    ["una excepción de red", async () => { throw new Error("offline"); }],
  ])("devuelve un error recuperable ante %s", async (_case, implementation) => {
    sendMock.mockImplementationOnce(implementation);
    vi.spyOn(console, "error").mockImplementation(() => undefined);

    const result = await sendContactEmail(initialState, validFormData());

    expect(result).toEqual({
      status: "error",
      message: "No pudimos enviar tu mensaje. Inténtalo de nuevo.",
    });
  });
});
