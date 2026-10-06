const grid = document.getElementById("grid");
const campoBusca = document.getElementById("busca");
const contador = document.getElementById("contador");
const vazio = document.getElementById("vazio");

// Converte "1979-08-27" em "27/08/1979" (sem usar Date, evitando problemas de fuso horário)
function formatarData(data) {
  const partes = data.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

// Renderiza no grid a lista de atores (dados.js)
function renderizarAtores(lista) {
  grid.innerHTML = "";

  lista.forEach(function (ator) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
      '<img src="' + ator.foto + '" alt="Foto de ' + ator.nome + '" loading="lazy">' +
      '<div class="info">' +
        "<h2>" + ator.nome + "</h2>" +
        "<p><strong>País:</strong> " + ator.pais + "</p>" +
        "<p><strong>Nascimento:</strong> " + formatarData(ator.nascimento) + "</p>" +
      "</div>";
    grid.appendChild(card);
  });

  vazio.hidden = lista.length > 0;
  contador.textContent = lista.length + " de " + atores.length + " exibidos";
}

// Chamada a cada tecla digitada (oninput): filtra pelo nome com filter() e includes()
function filtrarAtores() {
  const termo = campoBusca.value.toLowerCase().trim();

  const filtrados = atores.filter(function (ator) {
    return ator.nome.toLowerCase().includes(termo);
  });

  renderizarAtores(filtrados);
}

function limparBusca() {
  campoBusca.value = "";
  filtrarAtores();
  campoBusca.focus();
}

// Ao abrir a página, mostra todos
renderizarAtores(atores);