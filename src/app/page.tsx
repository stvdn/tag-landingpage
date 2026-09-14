import { Presentacion } from "@/features/presentacion/components/Presentacion";
import { Proyectos } from "@/features/proyectos/components/Proyectos";
import { Contacto } from "@/features/contacto/components/Contacto";

export default function Home() {
  return <>
    <main id="contenido"><Presentacion /><Proyectos /><Contacto /></main>
    <footer className="shell site-footer"><span>TAG/01</span><p>Sistemas de acceso para puertas</p><a href="#inicio">ARRIBA ↑</a></footer>
  </>;
}
