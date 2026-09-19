export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"nombre" | "correo" | "pais" | "telefono" | "mensaje", string>>;
};
