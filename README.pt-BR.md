# Instagram Post Link Collector

**Idioma:** [English](README.md) | Português (Brasil)

Um script JavaScript simples para **coletar links de publicações e Reels do Instagram** diretamente pelo console do navegador.

Ele percorre o perfil, reúne os links das publicações carregadas na página, remove duplicatas e gera um arquivo `.txt` com um endereço por linha.

> **Importante:** esta ferramenta coleta **apenas links**. Ela não baixa fotos ou vídeos e não garante encontrar todas as publicações de um perfil.

## Funcionalidades

- Coleta links de posts (`/p/`), Reels (`/reel/`) e vídeos antigos (`/tv/`).
- Reconhece links com ou sem o nome do perfil no endereço.
- Rola a página automaticamente para carregar mais publicações.
- Remove links duplicados.
- Exporta os resultados para `links-instagram-NOME_DO_PERFIL.txt`.
- Não exige instalação de bibliotecas ou extensões.

## Como usar

1. Abra o [Instagram](https://www.instagram.com/) no navegador e faça login, se necessário.
2. Entre no perfil que deseja consultar, por exemplo `https://www.instagram.com/nomedoperfil/`.
3. Aguarde até que as miniaturas das publicações apareçam.
4. No **Firefox**, pressione **Ctrl + Shift + K** para abrir o console. Em outros navegadores, abra as ferramentas de desenvolvedor e selecione **Console**.
5. Abra o arquivo [`instagram-post-link-collector.js`](instagram-post-link-collector.js), confira o código e cole todo o conteúdo no console.
6. Pressione **Enter**. Mantenha a aba aberta enquanto o script rola a página e coleta os links.
7. Ao terminar, o navegador salvará o arquivo `.txt` (normalmente na pasta Downloads).

### Exemplo de resultado

`links-instagram-nomedoperfil.txt`:

```text
https://www.instagram.com/p/EXEMPLO123/
https://www.instagram.com/reel/EXEMPLO456/
```

*Os endereços acima são exemplos ilustrativos.*

## Como funciona

O script lê os links da **página carregada no navegador**, identifica URLs de publicações e rola o perfil para solicitar mais conteúdo. Ele guarda os links únicos em um `Set` e os exporta como texto simples. A execução termina quando chega repetidamente ao fim da página sem encontrar novos links ou ao alcançar o limite de iterações.

## Limitações e uso responsável

- **A coleta pode ser incompleta.** O Instagram pode mudar o layout, restringir o acesso ou parar de carregar publicações antigas.
- O script só identifica links acessíveis na sua sessão atual. Ele não libera o acesso a publicações privadas, arquivadas ou excluídas.
- Ele **não** lê senhas ou cookies, não envia dados a servidores externos e não baixa arquivos de mídia.
- Evite executar várias instâncias ao mesmo tempo; a rolagem automática pode demorar.
- Use apenas em conteúdos aos quais você tem acesso autorizado e respeite os direitos dos criadores e os termos aplicáveis da plataforma.

## Solução de problemas

**“Nenhuma publicação encontrada”**

Confirme que você abriu a página de um **perfil do Instagram**, não a página inicial, e que as miniaturas carregaram antes de iniciar o script.

**Menos links do que o esperado**

Talvez o Instagram não tenha carregado todo o histórico. O arquivo contém apenas os links que o navegador conseguiu carregar durante a coleta.

**O navegador bloqueia a colagem no console**

Sempre confira o código antes de executá-lo no console de desenvolvedor. Siga as orientações de segurança do navegador.

## Estrutura do repositório

```text
instagram-post-link-collector/
├── instagram-post-link-collector.js
├── README.md
└── README.pt-BR.md
```

## Aviso

Este é um projeto independente, sem vínculo ou afiliação com Instagram ou Meta.
