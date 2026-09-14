# Personalizar el contenido

Esta guía convierte la demostración TAG/01 en un portafolio real. Haz los cambios en una rama propia y conserva únicamente información, fotografías y testimonios que tengas autorización para publicar.

## 1. Reemplaza la presentación

Edita `src/features/presentacion/content.ts`:

- `nombre`: nombre corto de la marca.
- `categoria`: servicio principal.
- `titulo`, `enfasis` y `descripcion`: propuesta de valor.
- `demostracion`: cambia el valor a `false` cuando todo el contenido sea real.

La identidad que aparece en el pie de página está en `src/app/page.tsx`. Actualízala para que coincida con la presentación.

## 2. Añade proyectos reales

Edita `src/features/proyectos/content.ts`. Cada objeto de `proyectos` representa un caso y debe tener un `id` único.

```ts
{
  id: "acceso-oficina-centro",
  titulo: "Acceso ágil para una oficina.",
  categoria: "CONTROL DE ACCESO",
  descripcion: "El problema que necesitaba resolver el cliente.",
  solucion: "La solución instalada y las decisiones principales.",
  resultado: "El resultado comprobado después de la instalación.",
  demostracion: false,
  fotografias: [
    {
      src: "/proyectos/acceso-oficina.webp",
      alt: "Lector de acceso instalado junto a la puerta de la oficina",
      width: 1200,
      height: 800,
      pie: "Instalación terminada"
    }
  ]
}
```

Guarda las imágenes en `public/proyectos/`. Usa WebP cuando sea posible, optimiza cada foto antes de incorporarla e intenta no superar 1600 px de ancho. `width` y `height` deben corresponder a las dimensiones reales del archivo; `alt` debe describir lo que aporta la imagen.

Si un proyecto aún no tiene fotografías, deja `fotografias: []` y la interfaz mostrará un estado de demostración. Si no hay proyectos, usa `proyectos = []` y aparecerá el mensaje de próximos proyectos.

No presentes estimaciones como resultados. Comprueba cualquier cifra o afirmación antes de publicarla.

## 3. Sustituye las reseñas

Los testimonios de `src/features/resenas/content.ts` son ejemplos. Sustituye cada `texto`, `nombre` y `contexto` por una experiencia autorizada. Si todavía no tienes testimonios reales, elimina los objetos de ejemplo y adapta la sección antes de publicar.

No inventes testimonios ni atribuyas una opinión a alguien sin su consentimiento.

## 4. Configura el contacto

Edita `src/features/contacto/content.ts` y sustituye `null` en `correo`, `telefono` o ambos.

```ts
correo: "hola@ejemplo.com",
telefono: "+57 300 000 0000",
```

Incluye el prefijo internacional en el teléfono. Los botones de contacto solo aparecen cuando existe el dato correspondiente; la web no contiene un formulario ni envía mensajes por sí misma.

## 5. Actualiza buscadores y publicación

Edita `src/app/layout.tsx` para cambiar el título y la descripción del sitio.

Mientras el contenido siga siendo una demostración, conserva:

```ts
robots: { index: false, follow: false }
```

Cambia esta política únicamente cuando el contenido sea real y quieras que los buscadores puedan indexarlo. Esta directiva no reemplaza el control de acceso privado del alojamiento.

La configuración `.openai/hosting.json` declara `out/` como salida estática para Sites. Si utilizas otro proveedor, configura allí la misma carpeta de publicación.

## 6. Comprueba antes de compartir

- No queda texto de TAG/01 que deba representar tu marca.
- Todos los elementos marcados como demostración fueron sustituidos o identificados claramente.
- Las reseñas y fotografías tienen autorización.
- Las imágenes cargan y su texto alternativo es útil.
- El correo y el teléfono abren la acción correcta.
- El título y la descripción representan el negocio real.
- La política de indexación coincide con la etapa del sitio.
- Revisaste el sitio en una pantalla pequeña y una grande.

Finalmente, ejecuta:

```sh
npm run lint
npm run typecheck
npm run build
```

Después de una compilación correcta, publica de nuevo el contenido de `out/`.
