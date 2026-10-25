(async () => {
  const perfil = window.location.pathname.split("/").filter(Boolean)[0];

  if (!perfil || ["p", "reel", "reels", "explore", "direct"].includes(perfil)) {
    alert("Abra a página de um perfil do Instagram antes de executar o script.");
    return;
  }

  const links = new Set();
  const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function coletar() {
    document.querySelectorAll("a[href]").forEach((elemento) => {
      try {
        const url = new URL(elemento.href);
        if (!(["instagram.com", "www.instagram.com"].includes(url.hostname))) return;

        const match = url.pathname.match(
          /^\/(?:([^/]+)\/)?(p|reel|tv)\/([A-Za-z0-9_-]+)\/?$/
        );
        if (!match) return;

        const [, prefixo, tipo, codigo] = match;
        if (prefixo && prefixo.toLowerCase() !== perfil.toLowerCase()) return;

        links.add(`https://www.instagram.com/${tipo}/${codigo}/`);
      } catch {
        // Ignora URLs inválidas.
      }
    });
  }

  let semNovidades = 0;
  console.log(`Iniciando coleta de @${perfil}...`);

  for (let i = 0; i < 1000; i++) {
    const quantidadeAnterior = links.size;
    coletar();

    window.scrollBy(0, Math.floor(window.innerHeight * 0.8));
    await esperar(1600);
    coletar();

    const noFinal =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 120;

    semNovidades = noFinal && links.size === quantidadeAnterior
      ? semNovidades + 1
      : 0;

    if (i % 5 === 0) {
      console.log(`${links.size} publicações encontradas`);
    }
    if (semNovidades >= 12) break;
  }

  coletar();
  console.log(`TOTAL: ${links.size} publicações`);

  if (!links.size) {
    alert("Nenhuma publicação encontrada. Confirme que as miniaturas aparecem na página.");
    return;
  }

  const arquivo = new Blob([[...links].join("\n") + "\n"], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(arquivo);
  const link = document.createElement("a");
  link.href = url;
  link.download = `links-instagram-${perfil}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);

  alert(`${links.size} links encontrados e salvos!`);
})();
