function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let numeros = [];

  for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(obterNumeroAleatório(de, ate));
    while (numeros.includes(numero)) {
      numero = parseInt(obterNumeroAleatório(de, ate));
    }
    numeros.push(numero);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeros}</label>`;
  alterarStatusDoBotao();
  alterarStatusDoBotaoSortear();
}

function obterNumeroAleatório(mim, max) {
  return Math.floor(Math.random() * (max - mim + 1)) + mim;
}

function alterarStatusDoBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

function alterarStatusDoBotaoSortear() {
    let botaoSortear = document.getElementById("btn-sortear");
    if (botaoSortear.classList.contains("container__botao")) {
      botaoSortear.classList.remove("container__botao");
      botaoSortear.classList.add("container__botao-desabilitado");
    } else {
      botaoSortear.classList.remove("container__botao-desabilitado");
      botaoSortear.classList.add("container__botao");
    }    
}
function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("resultado").innerHTML =
    ' <label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
  alterarStatusDoBotao();
  alterarStatusDoBotaoSortear();
}
