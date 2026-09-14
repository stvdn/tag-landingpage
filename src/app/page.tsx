import { Presentacion } from "@/features/presentacion/components/Presentacion";
import { Proyectos } from "@/features/proyectos/components/Proyectos";
import { Resenas } from "@/features/resenas/components/Resenas";
import { Contacto } from "@/features/contacto/components/Contacto";
import { ArrowUpIcon } from "@/shared/ui/Icons";
import { MotionController } from "@/shared/ui/MotionController";

export default function Home() {
  return <>
    <MotionController />
    <main id="contenido"><Presentacion /><Proyectos /><Resenas /><Contacto /></main>
    <footer className="shell site-footer" data-reveal><span>TAG/01</span><p>Sistemas de acceso para puertas</p><a href="#inicio">ARRIBA <ArrowUpIcon /></a></footer>
  </>;
}
