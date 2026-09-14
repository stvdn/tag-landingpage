export type Proyecto = {
  id: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  solucion: string;
  resultado: string;
  demostracion: boolean;
  fotografias: ReadonlyArray<{
    src: string;
    alt: string;
    width: number;
    height: number;
    pie?: string;
  }>;
};
