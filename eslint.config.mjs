import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const features = ["presentacion", "proyectos", "contacto"];
export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
  ...features.map((feature) => ({
    files: [`src/features/${feature}/**/*.{ts,tsx}`],
    rules: {
      "no-restricted-imports": ["error", { patterns: [
        { group: ["@/app/**", "**/app/**"], message: "Las funcionalidades no dependen de app." },
        ...features.filter((other) => other !== feature).map((other) => ({
          group: [`@/features/${other}`, `@/features/${other}/**`, `**/${other}`, `**/${other}/**`],
          message: "Compón funcionalidades independientes desde app."
        }))
      ] }]
    }
  })),
  { files: ["src/shared/**/*.{ts,tsx}"], rules: {
    "no-restricted-imports": ["error", { patterns: [
      { group: ["@/features/**", "@/app/**", "**/features/**", "**/app/**"], message: "shared no depende de funcionalidades ni rutas." }
    ] }]
  } }
]);
