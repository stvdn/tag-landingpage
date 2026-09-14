import { Presentacion } from "@/features/presentacion/components/Presentacion";
import { Proyectos } from "@/features/proyectos/components/Proyectos";
import { Contacto } from "@/features/contacto/components/Contacto";

export default function Home() {
  return <>
    <main id="contenido"><Presentacion /><Proyectos /><Contacto /></main>
    <footer className="container site-footer"><span>TAG / ACCESO</span><p>Sistemas de acceso para puertas</p><a href="#inicio">Volver al inicio ↑</a></footer>
  </>;
}
