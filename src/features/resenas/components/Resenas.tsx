import { SectionHeading } from "@/shared/ui/SectionHeading";
import { contenidoResenas, resenas } from "../content";

export function Resenas() {
  return <section className="reviews-section" id="resenas"><div className="shell">
    <SectionHeading number="02" eyebrow="RESEÑAS" title={contenidoResenas.titulo} description={contenidoResenas.descripcion} />
    <div className="reviews-grid">
      {resenas.map((resena, index) => <article className="review-card" key={resena.nombre} data-reveal>
        <div className="review-topline"><span>0{index + 1}</span><span aria-label="Calificación: 5 de 5">5.0 / 5</span></div>
        <blockquote>“{resena.texto}”</blockquote>
        <footer><span className="review-avatar" aria-hidden="true">{resena.nombre.charAt(0)}</span><div><strong>{resena.nombre}</strong><p>{resena.contexto}</p></div></footer>
      </article>)}
    </div>
    <p className="reviews-note">TESTIMONIOS DE MUESTRA · REEMPLAZAR CON EXPERIENCIAS REALES</p>
  </div></section>;
}
