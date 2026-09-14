# Portafolio TAG/01

Un portafolio estático para presentar proyectos de control de acceso de forma clara y visual. Está construido con Next.js y TypeScript, sin CMS, base de datos ni panel administrativo.

Este repositorio también funciona como ejemplo educativo: muestra cómo organizar una aplicación pequeña por funcionalidades sin añadir capas que todavía no necesita.

## Qué puedes aprender aquí

- Cómo separar el contenido de los componentes visuales.
- Cómo organizar el código según las funcionalidades que ve el usuario.
- Cómo modelar contenido con TypeScript y validar su forma con `satisfies`.
- Cómo diseñar estados alternativos cuando aún no existen fotos o datos de contacto.
- Cómo generar un sitio estático con Next.js para publicarlo sin un servidor propio.
- Cómo incorporar detalles básicos de accesibilidad, como texto alternativo, navegación por teclado y un enlace para saltar al contenido.

Las pruebas automatizadas todavía no forman parte del ejemplo. Se añadirán como siguiente paso para enseñar cómo verificar componentes y contenido sin cambiar la estructura del proyecto.

## Tecnologías

- Next.js 16
- React 19
- TypeScript 6
- CSS
- ESLint

## Ejecutar el proyecto

Necesitas Node.js 22 o posterior y npm.

```sh
npm ci
npm run dev
```

Abre la dirección que muestre Next.js en la terminal.

## Recorrido por el código

```text
src/
├── app/                  # Página, metadatos y estilos globales
├── features/
│   ├── presentacion/     # Encabezado y presentación principal
│   ├── proyectos/        # Casos, fotografías y modelo Proyecto
│   ├── resenas/          # Testimonios
│   └── contacto/         # Datos y acciones de contacto
└── shared/ui/            # Componentes usados por varias funcionalidades
```

Un buen punto de partida es `src/app/page.tsx`: allí se componen las secciones de la página. Después, compara el archivo `content.ts` y la carpeta `components` de cualquier funcionalidad para ver cómo se mantienen separados los datos y su presentación.

Las reglas de arquitectura y de contribución están documentadas en [`AGENTS.md`](./AGENTS.md).

## Crear tu propia versión

El contenido incluido es demostrativo. Antes de compartir el sitio como un portafolio real, debes sustituir la marca, los proyectos, las reseñas, el contacto, las imágenes y los metadatos.

Sigue la guía [Personalizar el contenido](./docs/personalizar-contenido.md), que incluye las ubicaciones de cada dato y una lista de comprobación previa a la publicación.

## Validar y compilar

```sh
npm run lint
npm run typecheck
npm run build
```

La compilación genera la carpeta `out/`. Esa carpeta contiene el sitio estático que se publica; no hace falta ejecutar un servidor de Next.js en producción.

## Decisiones intencionales

- El contenido vive en archivos TypeScript para que el ejemplo sea fácil de leer y versionar.
- Los componentes muestran estados útiles cuando faltan fotos o datos, en lugar de dejar espacios vacíos.
- Las imágenes se sirven sin el optimizador de Next.js porque la salida es completamente estática.
- La demostración no se indexa en buscadores hasta que el contenido real esté listo.
- No se incluyen servicios, repositorios de datos ni un dashboard porque el alcance actual no los necesita.

Si más adelante una persona necesita editar el contenido sin tocar código, los archivos `content.ts` pueden sustituirse por lecturas desde un CMS, conservando los modelos y componentes visuales.
