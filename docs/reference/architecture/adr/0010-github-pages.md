# 0010. Use GitHub Pages to serve documentation

## Status

Accepted

## Date

2026-10-20

## Context

The documentation site is generated with Hugo and Hextra ([0003-docs-site-generator.md](0003-docs-site-generator.md)) and only needs static hosting. The source already lives on GitHub.

Hosting the site inside the homelab would add infrastructure to maintain and make recovery documentation unavailable when the homelab is down. Other managed static hosting services would add another service to configure without a clear benefit for this site.

## Decision

Use [GitHub Pages](https://docs.github.com/en/pages) to serve the generated documentation at <https://vetlekise.github.io/homelab/>.

Build the site from the repository with GitHub Actions and deploy it to Pages when changes land on `main`. Keep Markdown in `docs/` as the source of truth; do not commit generated site files.

## Consequences

- Documentation remains accessible when the homelab is unavailable, as long as GitHub Pages is available.
- No web server or separate hosting service needs to be maintained.
- Published documentation is public. Keep secrets and sensitive operational details out of the site.
- Hosting is limited to static content and depends on GitHub's availability and Pages limits.
- Site links and assets must work under the `/homelab/` project path.
- A GitHub Actions deployment workflow and repository Pages configuration still need to be added.
