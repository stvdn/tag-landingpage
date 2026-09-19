# Portafolio TAG/01

Un portafolio estático para presentar proyectos, está construido con Next.js y TypeScript.

Este repositorio funciona como ejemplo educativo: muestra cómo organizar una aplicación por funcionalidades (screaming architecture).

Puedes ver el proyecto en funcionamiento en la [demo en vivo](https://tag-landingpage-seven.vercel.app/).

## Qué puedes aprender aquí

- Cómo separar el contenido de los componentes visuales.
- Cómo organizar el código según las funcionalidades que ve el usuario.
- Cómo modelar contenido con TypeScript y validar su forma con `satisfies`.

El formulario de contacto incluye pruebas unitarias de la lógica de su acción de servidor.

## Tecnologías

- Next.js 16
- React 19
- TypeScript 6
- CSS

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

Ejecuta estas comprobaciones solo cuando se soliciten:

```sh
npm run lint
npm run typecheck
npm run test
npm run build
```

## Contribuir

Si quieres contribuir, crea un fork del repositorio, trabaja en una rama y abre un pull request. Explica qué cambiaste, por qué lo hiciste y cómo validaste el resultado. Todas las propuestas serán revisadas antes de integrarse en `main`.
