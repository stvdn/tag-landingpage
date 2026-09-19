# Project architecture

This repository uses screaming architecture: top-level feature names describe what the portfolio does. Keep user-facing capabilities in `src/features/<feature>` and let each feature own its content, components, types, and future tests.

## Dependency direction

The allowed direction is `app -> features -> shared`.

- `src/app` composes features and owns route-level concerns, global styles, and metadata.
- A feature must not import another feature. Compose them in `src/app` instead.
- `src/shared` must not import from `src/features` or `src/app`.
- Use relative imports inside a feature and the `@/` alias across architectural layers.
- Keep the feature list in `eslint.config.mjs` synchronized when adding or removing features so import boundaries remain enforced.

Do not introduce persistence, service, repository, or CMS layers until the product has a concrete need for them.

## Content and UI

- Keep editable portfolio copy and records in each feature's `content.ts` file.
- Keep rendering and interaction in `components/`.
- Keep domain types beside the feature that owns them.
- Put a component in `src/shared/ui` only after it is reused across features.
- Preserve useful empty states for missing images, projects, or contact details.

## Documentation

- Keep `README.md` focused on orientation, learning goals, setup, and the shortest useful tour of the repository.
- Put operational how-to guides in `docs/` and link to them from the README.
- Update `docs/personalizar-contenido.md` whenever a new piece of demo content or publication metadata is introduced.

## Validation

Run the following checks after a change:

```sh
npm run lint
npm run typecheck
npm run test
npm run build
```

Keep feature-specific unit tests with the feature they verify.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
