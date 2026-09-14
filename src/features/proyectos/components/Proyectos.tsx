import Image from "next/image";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { contenidoProyectos, proyectos } from "../content";
import type { Proyecto } from "../types";

function ProyectoCard({ proyecto, index }: { proyecto: Proyecto; index: number }) {
  return <article className="project" aria-labelledby={`proyecto-${proyecto.id}`}>
    <div className="project-intro">
      <div className="project-meta"><span>PROYECTO {String(index + 1).padStart(2, "0")}</span>{proyecto.demostracion && <span className="demo-label">Caso de demostración</span>}</div>
      <p className="eyebrow project-category">{proyecto.categoria}</p>
      <h3 id={`proyecto-${proyecto.id}`}>{proyecto.titulo}</h3>
      <p>{proyecto.descripcion}</p>
      <div className="project-footnote"><span aria-hidden="true">↳</span> De la necesidad a la solución</div>
    </div>
    <div className="project-details">
      <div><span className="detail-number">01</span><div><h4>La solución</h4><p>{proyecto.solucion}</p></div></div>
      <div><span className="detail-number">02</span><div><h4>El resultado</h4><p>{proyecto.resultado}</p></div></div>
    </div>
    {proyecto.fotografias.length > 0 && <div className="project-gallery">{proyecto.fotografias.map((foto) => <figure key={foto.src}><Image src={foto.src} alt={foto.alt} width={foto.width} height={foto.height} sizes="(max-width: 720px) 100vw, 50vw" />{foto.pie && <figcaption>{foto.pie}</figcaption>}</figure>)}</div>}
  </article>;
}

export function Proyectos() {
  return <section className="projects-section" id="proyectos"><div className="container">
    <SectionHeading number="01" eyebrow="EL TRABAJO" title={contenidoProyectos.titulo} description={contenidoProyectos.descripcion} />
    {proyectos.length ? proyectos.map((proyecto, index) => <ProyectoCard key={proyecto.id} proyecto={proyecto} index={index} />) : <p className="empty-state">Pronto compartiremos aquí los primeros proyectos.</p>}
  </div></section>;
}
