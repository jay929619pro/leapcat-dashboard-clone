# Leapcat Dashboard Clone

A static front-end recreation of the Leapcat dashboard, built with React, Vite, Tailwind CSS, and pnpm.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
pnpm preview
```

## Deploy with GitHub Actions

1. Create a public GitHub repository and push this project to the `main` branch.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` again or run the `Deploy To GitHub Pages` workflow manually.

The workflow automatically computes the correct Vite base path:

- `https://username.github.io/` style repos use `/`
- normal project repos use `/<repo-name>/`
