# Cadastro dos Kits — Danielli

Site com o catálogo dos kits de legumes, resumo de ingredientes por corte, e
os botões **Lançar pedido** / **Zerar produção do dia**. Sem framework — é
HTML/CSS/JS simples na raiz (`index.html`) mais funções serverless da Vercel
em `api/` que leem e gravam o estado num banco Redis (instalado pelo
Marketplace da Vercel — hoje em dia o caminho é esse; o antigo "Vercel KV"
nativo foi descontinuado em dezembro de 2024, veja o passo 3 abaixo).

## Estrutura

```
index.html            a ferramenta inteira (interface)
api/kits.js            GET  /api/kits            -> estado atual dos kits
api/kits/lancar.js      POST /api/kits/lancar      -> soma um pedido
api/kits/zerar.js       POST /api/kits/zerar       -> zera a produção do dia
lib/seed.js             dados iniciais (só usados na primeira leitura)
lib/store.js             leitura/escrita no banco (Redis via Marketplace)
lib/auth.js               confere a senha de administrador
```

## Como publicar (GitHub + Vercel)

**1. Suba este projeto para um repositório no GitHub**

```bash
cd danielli-kits
git init
git add .
git commit -m "Cadastro dos Kits - versão inicial"
```

Crie um repositório vazio no GitHub (github.com/new, sem README) e depois:

```bash
git remote add origin https://github.com/SEU-USUARIO/danielli-kits.git
git branch -M main
git push -u origin main
```

**2. Importe o repositório na Vercel**

- Entre em vercel.com, clique em **Add New… → Project**.
- Selecione o repositório `danielli-kits` que você acabou de criar.
- Framework: deixe em **Other** (não é Next.js nem nada parecido — a Vercel
  detecta sozinha os arquivos em `api/` como funções e o resto como estático).
- Clique em **Deploy**. Nesse primeiro deploy o site vai funcionar para
  *ver* os kits, mas os botões de escrita ainda vão dar erro — faltam os
  dois passos abaixo.

**3. Conecte um banco de dados (Redis, pelo Marketplace)**

O antigo "Vercel KV" nativo não existe mais — a Vercel migrou todo mundo
para o Marketplace em dezembro de 2024. O caminho atual:

1. Abra o projeto na Vercel e clique na aba **Storage** (barra de abas no
   topo do projeto: Project / Deployments / Analytics / Storage / ...).
2. Clique em **Create Database** (ou **Connect Database**, dependendo da
   versão do painel).
3. Vai abrir uma lista de provedores do Marketplace. Procure **Upstash**
   (aparece como "Upstash for Redis" ou "Upstash" — é o provedor de Redis
   recomendado pela própria Vercel e tem plano gratuito). Clique nele.
4. Clique em **Add Integration** / **Install** (o texto varia um pouco).
5. Vai pedir para confirmar a conta: se você nunca usou Upstash, escolha a
   opção de criar uma conta gerenciada pela própria Vercel (não precisa
   cadastro separado); se já tem conta Upstash, escolha "Connect existing
   account" e faça login.
6. Escolha o **plano** (o gratuito/"Free" atende esse projeto tranquilo) e a
   **região** — escolha uma perto de você/dos seus usuários (ex.: alguma em
   São Paulo/`sa-east-1` ou a mais próxima disponível) — e clique em
   **Continue**.
7. Dê um nome para o banco (ex.: `danielli-kits-db`) e clique em **Create**
   (ou **Create & Continue**).
8. Na tela seguinte ele pergunta a quais projetos conectar — marque o
   projeto `danielli-kits` (deve já vir selecionado, já que você abriu o
   fluxo de dentro dele) e confirme em **Connect**.
9. Pronto: a Vercel injeta sozinha as variáveis de ambiente do banco
   (algo como `KV_REST_API_URL` / `KV_REST_API_TOKEN` ou
   `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` — o nome exato pode
   variar; o código deste projeto já reconhece as duas formas, então não
   precisa mexer em nada). Você pode conferir em **Settings → Environment
   Variables** que novas linhas apareceram.

**4. Defina a senha de administrador**

1. Ainda dentro do projeto na Vercel, clique na aba **Settings** (mesma
   barra do passo 3).
2. No menu à esquerda, clique em **Environment Variables**.
3. No campo **Key**, digite: `ADMIN_PASSWORD`
4. No campo **Value**, digite uma senha à sua escolha (é o que você vai
   digitar no navegador para lançar pedidos ou zerar a produção — guarde em
   local seguro, tipo um gerenciador de senhas).
5. Em **Environments**, deixe marcado **Production** (marque também
   **Preview** e **Development** se for testar por esses ambientes).
6. Clique em **Save**.
7. Sem essa variável configurada, os botões de escrita ficam bloqueados por
   segurança (a consulta/leitura continua funcionando normalmente).

**5. Redeploy**

Variáveis de ambiente novas só valem a partir do próximo deploy — o deploy
que já rodou antes não é atualizado sozinho.

1. Clique na aba **Deployments** (mesma barra de topo do projeto).
2. Na lista, ache o deploy mais recente (primeira linha) e clique nos
   **três pontinhos (⋯)** à direita dele.
3. Clique em **Redeploy**.
4. Confirme clicando em **Redeploy** de novo na caixa de diálogo que abrir
   (pode deixar a opção "Use existing Build Cache" como estiver).
5. Espere o status mudar para **Ready** (leva menos de um minuto). Pronto —
   o link do projeto (ex.: `https://danielli-kits.vercel.app`) já está
   valendo com o banco conectado e a senha configurada.

Pronto — o link que a Vercel te der (algo como
`https://danielli-kits.vercel.app`) já é o site publicado, com os dados
persistindo no banco.

## Uso do dia a dia

- **Ver os kits / resumo de ingredientes**: aberto para qualquer pessoa com
  o link, sem senha.
- **Lançar pedido**: soma as quantidades informadas às que já estão em
  produção hoje (não substitui — então lançar o mesmo pedido duas vezes
  duplica a quantidade, tome cuidado).
- **Zerar produção do dia**: zera as quantidades de todos os kits (não apaga
  o cadastro — ingredientes, corte e peso por unidade continuam intactos).
  Pede confirmação antes de aplicar.
- Os dois botões de escrita pedem a senha (`ADMIN_PASSWORD`) na primeira
  vez em cada navegador/dispositivo; depois disso ficam salvos localmente
  naquele navegador.

## Atualizando o cadastro dos kits (novos produtos, ingredientes, corte)

Não tem tela para isso ainda — hoje é uma edição direta no código
(`lib/seed.js` só vale antes do primeiro acesso; depois disso o estado mora
no banco). Peça para eu (Claude) editar e sugerir o código atualizado, ou
avise se quiser que eu monte uma tela de administração para isso também.

## Rodando localmente (opcional)

Com a Vercel CLI (`npm i -g vercel`), dentro da pasta do projeto:

```bash
vercel dev
```

Isso sobe o site com as funções de API funcionando localmente (vai pedir
para linkar com o projeto na Vercel na primeira vez, para puxar as
variáveis de ambiente).
