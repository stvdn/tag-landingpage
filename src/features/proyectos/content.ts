import type { Proyecto } from "./types";

export const proyectos = [
  {
    id: "acceso-con-tag",
    titulo: "Acceso con tag, paso a paso.",
    categoria: "CONTROL DE ACCESO",
    descripcion: "Ejemplo de cómo documentaremos un proyecto de acceso para una puerta: desde la necesidad inicial hasta su puesta en funcionamiento.",
    solucion: "Una credencial se presenta al lector. El sistema verifica si está autorizada y, en ese caso, permite la apertura de la puerta.",
    resultado: "Este caso es ilustrativo. Las fotografías, las pruebas de funcionamiento y los resultados de la instalación se incorporarán cuando estén disponibles.",
    demostracion: true,
    fotografias: [],
  },
] satisfies ReadonlyArray<Proyecto>;

export const contenidoProyectos = {
  titulo: "Cada acceso tiene una historia.",
  descripcion: "Una mirada al proceso y a las decisiones detrás de cada proyecto.",
};
