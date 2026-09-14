import type { Metadata } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tag / Acceso — Portafolio de sistemas para puertas",
  description: "Conoce el proceso detrás de los sistemas de acceso con tags para puertas. Portafolio de demostración: soluciones, proyectos y contacto.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${manrope.variable} ${dmMono.variable}`}><a className="skip-link" href="#contenido">Saltar al contenido</a>{children}</body></html>;
}
