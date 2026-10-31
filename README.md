> [!WARNING]
> This project is **currently** a work in progress and changes quickly. Expect breaking changes, renamed files and shifting conventions without notice.

<h1>
  <img src="hugo/static/images/logo.svg"
       alt="House enclosing two server bays"
       width="68" height="56" align="absmiddle">
  Vetle's Homelab
</h1>

A personal homelab built around automation and reproducible infrastructure, with a primary focus on hosting my media library and the services that support it.

Feel free to copy whatever, and even use it as a framework to build your own.

## Local development

Development tools are pinned in [mise.toml](mise.toml) and installed with [mise](https://mise.jdx.dev/), on Linux, macOS, and Windows.

1. [Install mise](https://mise.jdx.dev/installing-mise.html).
2. Activate mise in your shell once. This lets mise add the repository's pinned tool versions to your `PATH` automatically, so commands run with the versions specified for this project.

macOS (zsh), in `~/.zshrc`:

```sh
eval "$(mise activate zsh)"
```

Bash, in `~/.bashrc`:

```bash
eval "$(mise activate bash)"
```

PowerShell, in `$PROFILE`:

```powershell
(&mise activate pwsh) | Out-String | Invoke-Expression
```

3. From the repository root, install the tools and set up the Git hooks:

```sh
mise install
task setup
```

Run `task --list` to see the available tasks.
