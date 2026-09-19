import type { CountryCode } from "libphonenumber-js";

export const contacto: {
  titulo: string;
  descripcion: string;
  correo: string | null;
  telefono: string | null;
  paisPredeterminado: CountryCode;
} = {
  titulo: "Abramos la puerta a tu próximo proyecto.",
  descripcion: "Cuéntanos qué necesitas. Te ayudamos a convertir tu idea en una solución de acceso clara, segura y lista para funcionar.",
  correo: "correopublico@ejemplo.com",
  telefono: "123-456-7890",
  paisPredeterminado: "CO",
};
