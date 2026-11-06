---
title: Preview the Documentation Site
---

Preview your documentation changes locally before they are published. For how the site is built and deployed, see [Documentation Publishing](../concepts/documentation-publishing.md).

## Preview site locally

From the repository root, run:

```sh
task docs:serve
```

This starts Hugo's local preview server, which builds its own preview and includes draft content. Open it in a browser by clicking the `localhost` URL in the terminal.

## Check local build

To check that Hugo can generate the static site and inspect its output, run:

```sh
task docs:build
```

This runs Hugo with garbage collection and minification enabled and writes the generated files to `public/`. It is useful for diagnosing build errors or checking generated output. The GitHub Actions workflow runs its own build for publishing, with the Pages base URL configured.
