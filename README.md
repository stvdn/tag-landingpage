# Portafolio de sistemas de acceso

Next.js + TypeScript. Página estática en español, sin CMS, base de datos ni panel administrativo.

## Desarrollo y validación

Requiere Node.js 22 o posterior y npm.

```sh
npm ci
npm run dev
```

Abre la dirección que indique Next.js. Para validar y generar la versión publicable:

```sh
npm run lint
npm run typecheck
npm run build
```

La compilación genera `out/`. Se publica esa carpeta como sitio estático. No se necesita un servidor de Next.js en producción; las imágenes se sirven sin el optimizador de servidor. Optimiza las fotos a WebP antes de incorporarlas, idealmente hasta 1600 px de ancho. Las fuentes se cargan desde Google Fonts y tienen alternativas locales si no están disponibles.

## Screaming architecture

`src/features/presentacion`, `src/features/proyectos` y `src/features/contacto` expresan las funcionalidades del portafolio. Cada una es dueña de sus componentes y contenido; proyectos también define su modelo. `src/app` compone la página y define estilos globales y metadatos. `src/shared/ui` contiene únicamente componentes reutilizados por varias funcionalidades.

Dirección de dependencias: **app → features → shared**. Las funcionalidades no se importan entre sí y shared no importa app ni features. ESLint protege los límites con restricciones de importación. Dentro de una funcionalidad se usan imports relativos; entre capas, el alias `@/`. No se introducen capas de persistencia, servicios ni repositorios sin necesidad.

## Cambiar contenido

- Presentación: `src/features/presentacion/content.ts`.
- Proyectos: `src/features/proyectos/content.ts`.
- Contacto: `src/features/contacto/content.ts`.
- Título y descripción para buscadores: `src/app/layout.tsx`.
- Identidad del pie de página: `src/app/page.tsx`.

La marca TAG / ACCESO y el caso inicial son demostrativos. Antes de presentar el portafolio a clientes, reemplaza los textos, incorpora material autorizado y marca `demostracion: false` tanto en presentación como en cada proyecto real. No publiques resultados sin comprobarlos.

Para añadir un proyecto, duplica un objeto de `proyectos` con un `id` único, completa sus campos y agrega las fotografías. No es necesario editar componentes. Ejemplo de una entrada de `fotografias` (primero agrega tu archivo):

```ts
{
  src: "/proyectos/lector-entrada.webp",
  alt: "Lector de tags instalado junto a la puerta de entrada",
  width: 1200,
  height: 800,
  pie: "Detalle del lector instalado"
}
```

Los valores width y height deben coincidir con el archivo. Si no hay fotografías, no se muestran imágenes vacías. Si se elimina todo el listado de proyectos, se muestra un mensaje de próximos proyectos.

## Contacto y publicación

Reemplaza `null` en correo y/o teléfono con datos reales. Usa el número con prefijo internacional. Los enlaces de correo y llamada aparecen únicamente cuando existen datos; no hay formulario ni mensajes enviados por la web.

Tras un cambio, ejecuta las tres validaciones, revisa el contenido y publica nuevamente `out/`. La configuración `.openai/hosting.json` vincula el proyecto con Sites y declara la salida estática. La primera publicación es privada. La demostración tiene `robots: { index: false, follow: false }`; cambia esa política únicamente cuando el contenido real esté listo y decidas publicarlo para buscadores. La directiva robots no sustituye el control de acceso privado del alojamiento.

## Evolución a CMS

Cuando el familiar necesite editar por su cuenta, reemplaza la fuente de datos de cada funcionalidad por una lectura desde el CMS. Conserva el modelo Proyecto y los componentes visuales; la integración deberá resolver la lectura de contenido y la reconstrucción del sitio al publicar. No hace falta crear un dashboard propio.
