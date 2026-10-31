# Setup Local Development

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
