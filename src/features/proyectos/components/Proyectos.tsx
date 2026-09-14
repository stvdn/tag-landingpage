import Image from "next/image";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { contenidoProyectos, proyectos } from "../content";
import type { Proyecto } from "../types";

function ProyectoCard({ proyecto, index }: { proyecto: Proyecto; index: number }) {
  return <article className="project" aria-labelledby={`proyecto-${proyecto.id}`}>
    <div className="project-media">
      {proyecto.fotografias.length > 0
        ? proyecto.fotografias.map((foto) => <figure key={foto.src}><Image src={foto.src} alt={foto.alt} width={foto.width} height={foto.height} sizes="(max-width: 1000px) 100vw, 54vw" />{foto.pie && <figcaption>{foto.pie}</figcaption>}</figure>)
        : <div className="photo-placeholder" role="img" aria-label="Espacio reservado para fotografías del proyecto real"><span>01 / FOTO PRINCIPAL</span><strong>ANTES<br /><em>DESPUÉS</em></strong><small>Agrega aquí una foto real de la instalación</small></div>}
    </div>
    <div className="project-intro">
      <div className="project-meta"><span>PROYECTO {String(index + 1).padStart(2, "0")}</span>{proyecto.demostracion && <span className="demo-label">CASO DEMO</span>}</div>
      <p className="eyebrow project-category">{proyecto.categoria}</p>
      <h3 id={`proyecto-${proyecto.id}`}>{proyecto.titulo}</h3>
      <p>{proyecto.descripcion}</p>
    </div>
    <div className="project-details">
      <div><span className="detail-number">01</span><div><h4>La solución</h4><p>{proyecto.solucion}</p></div></div>
      <div><span className="detail-number">02</span><div><h4>El resultado</h4><p>{proyecto.resultado}</p></div></div>
    </div>
  </article>;
}

export function Proyectos() {
  return <section className="projects-section" id="proyectos"><div className="shell">
    <SectionHeading number="01" eyebrow="PROYECTOS" title={contenidoProyectos.titulo} description={contenidoProyectos.descripcion} />
    {proyectos.length ? proyectos.map((proyecto, index) => <ProyectoCard key={proyecto.id} proyecto={proyecto} index={index} />) : <p className="empty-state">Pronto compartiremos aquí los primeros proyectos.</p>}
  </div></section>;
}
