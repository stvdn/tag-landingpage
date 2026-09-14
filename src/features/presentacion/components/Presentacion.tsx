import { presentacion } from "../content";
import { ArrowDownIcon, ArrowUpRightIcon } from "@/shared/ui/Icons";

export function Presentacion() {
  return <>
    <div className="site-header-wrap">
      <header className="site-header shell">
        <a className="wordmark" href="#inicio" aria-label={`${presentacion.nombre}: inicio`}>
          <span className="brand-symbol" aria-hidden="true"><i /><i /></span>
          <span>{presentacion.nombre}</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#resenas">Reseñas</a>
          <a className="nav-contact" href="#contacto">Hablemos <ArrowUpRightIcon /></a>
        </nav>
      </header>
    </div>
    <section className="hero shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-kicker"><p className="eyebrow">{presentacion.categoria}</p>{presentacion.demostracion && <span className="demo-chip">DEMO</span>}</div>
        <h1 id="hero-title">{presentacion.titulo}<br /><em>{presentacion.enfasis}</em></h1>
        <p className="hero-description">{presentacion.descripcion}</p>
        <div className="hero-actions">
          <a className="button" href="#proyectos">Ver cómo trabajamos <ArrowDownIcon /></a>
          <a className="text-link" href="#contacto">Cuéntanos sobre tu puerta <ArrowUpRightIcon /></a>
        </div>
      </div>
      <div className="hero-visual" role="img" aria-label="Ilustración técnica de una puerta con lector de acceso activo.">
        <div className="placeholder-grid" aria-hidden="true" />
        <div className="visual-topline"><span>SIMULACIÓN / ACCESO</span><span>01—03</span></div>
        <div className="door-frame" aria-hidden="true"><span className="door-handle" /></div>
        <div className="reader" aria-hidden="true"><span /><i /><i /></div>
        <div className="visual-caption"><span>SISTEMA EN LÍNEA</span><strong>Entrada<br />autorizada.</strong><small>LECTOR · TAG · CERRADURA</small></div>
        <div className="access-card" aria-hidden="true"><span className="status-dot" /><small>ESTADO</small><b>LISTO</b></div>
      </div>
    </section>
  </>;
}
