# Publicar no GitHub Pages

O projeto já está versionado com Git. Falta só conectar à sua conta GitHub.

## Passo 1 — Login no GitHub (uma vez)

No PowerShell, na pasta do site:

```powershell
cd "c:\Users\hadas\Documents\Hadassa\Hadassa\Site diversões maracanã"
```

Se aparecer **«gh não é reconhecido»**, o terminal ainda não carregou o PATH. Use **uma** destas opções:

**Opção A — Atualizar o PATH nesta janela (recomendado):**

```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
gh auth login
```

**Opção B — Caminho completo do programa:**

```powershell
& "C:\Program Files\GitHub CLI\gh.exe" auth login
```

**Opção C — Feche o terminal do Cursor e abra um novo**, depois rode `gh auth login` de novo.

Escolha:
- **GitHub.com**
- **HTTPS**
- **Login with a web browser** (mais fácil)
- Copie o código e autorize no navegador

## Passo 2 — Criar repositório e enviar o site

```powershell
gh repo create diversoes-maracana --public --source=. --remote=origin --push
```

(Se o nome já existir na sua conta, use outro, ex.: `site-diversoes-maracana`)

## Passo 3 — Ativar GitHub Pages

```powershell
gh api repos/{owner}/diversoes-maracana/pages -X POST -f build_type=legacy -f source[branch]=master -f source[path]=/
```

Ou pelo site: **Repositório → Settings → Pages → Branch: master → Folder: / (root) → Save**

## Passo 4 — Ver no celular

Em alguns minutos o site ficará em:

**https://SEU-USUARIO.github.io/diversoes-maracana/**

Substitua `SEU-USUARIO` pelo seu login do GitHub.

---

## Atualizar o site depois

```powershell
git add .
git commit -m "Atualiza conteúdo do site"
git push
```
