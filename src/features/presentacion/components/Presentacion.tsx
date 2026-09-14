import { presentacion } from "../content";

export function Presentacion() {
  return <>
    {presentacion.demostracion && <div className="demo-banner">PORTAFOLIO DE DEMOSTRACIÓN <span>Contenido ilustrativo · No representa una instalación real</span></div>}
    <header className="site-header container">
      <a className="wordmark" href="#inicio" aria-label={`${presentacion.nombre}: inicio`}><span className="brand-symbol" aria-hidden="true">T</span>{presentacion.nombre}</a>
      <nav aria-label="Navegación principal"><a href="#proyectos">El trabajo</a><a href="#contacto">Contacto <span aria-hidden="true">↗</span></a></nav>
    </header>
    <section className="hero container" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="short-line" />{presentacion.categoria}</p>
        <h1 id="hero-title">{presentacion.titulo}<br /><span>{presentacion.enfasis}</span></h1>
        <p className="hero-description">{presentacion.descripcion}</p>
        <a className="button" href="#proyectos">Explorar el proyecto <span aria-hidden="true">↗</span></a>
      </div>
      <div className="access-diagram" role="img" aria-label="Esquema conceptual de acceso: presentar un tag, validar la credencial y permitir la apertura si está autorizada.">
        <div className="diagram-top"><span>ESQUEMA DE ACCESO</span><span>01 — 03</span></div>
        <div className="diagram-center"><span className="diagram-orbit orbit-one" /><span className="diagram-orbit orbit-two" /><span className="diagram-orbit orbit-three" /><span className="diagram-node">TAG<span>Identificación</span></span></div>
        <div className="diagram-caption"><span>01 / PRESENTAR</span><p>El acceso comienza<br />con una credencial.</p></div>
        <div className="diagram-steps"><span>01 Tag</span><span aria-hidden="true">→</span><span>02 Validación</span><span aria-hidden="true">→</span><span>03 Apertura</span></div>
      </div>
    </section>
    <div className="specialties container" aria-label="Temas del portafolio">{presentacion.especialidades.map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}</div>
  </>;
}
