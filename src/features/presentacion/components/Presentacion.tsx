import { presentacion } from "../content";

export function Presentacion() {
  return <>
    <header className="site-header shell">
      <a className="wordmark" href="#inicio" aria-label={`${presentacion.nombre}: inicio`}>
        <span className="brand-symbol" aria-hidden="true"><i /><i /></span>{presentacion.nombre}
      </a>
      <nav aria-label="Navegación principal">
        <a href="#proyectos">Proyectos</a>
        <a className="nav-contact" href="#contacto">Hablemos <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
    <section className="hero shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-kicker"><p className="eyebrow">{presentacion.categoria}</p>{presentacion.demostracion && <span className="demo-chip">DEMO</span>}</div>
        <h1 id="hero-title">{presentacion.titulo}<br /><em>{presentacion.enfasis}</em></h1>
        <p className="hero-description">{presentacion.descripcion}</p>
        <a className="button" href="#proyectos">Ver cómo trabajamos <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-visual" role="img" aria-label="Espacio reservado para una fotografía real de un sistema de acceso instalado.">
        <div className="placeholder-grid" aria-hidden="true" />
        <span className="visual-index">01</span>
        <div className="placeholder-copy"><span>FOTOGRAFÍA DEL PROYECTO</span><strong>Tu instalación<br />irá aquí.</strong><small>PLACEHOLDER · 4:5</small></div>
        <div className="access-card" aria-hidden="true"><span className="signal">)))</span><b>ACCESO</b><small>LISTO PARA VALIDAR</small></div>
      </div>
    </section>
    <div className="process-strip" aria-label="Proceso de acceso"><div className="shell">{presentacion.especialidades.map((item, index) => <p key={item}><span>0{index + 1}</span><b>{item}</b>{index < presentacion.especialidades.length - 1 && <i aria-hidden="true">→</i>}</p>)}</div></div>
  </>;
}
