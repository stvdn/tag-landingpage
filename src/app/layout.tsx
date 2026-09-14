import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tag / Acceso — Portafolio de sistemas para puertas",
  description: "Conoce el proceso detrás de los sistemas de acceso con tags para puertas. Portafolio de demostración: soluciones, proyectos y contacto.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a className="skip-link" href="#contenido">Saltar al contenido</a>{children}</body></html>;
}
