/**
 * Exercício 3: 
 * Refatore o algoritmo de cálculo de preço, 
 * substituindo todos os números mágicos por constantes significativas.
 */

function calcularPrecoFinal(preco, quantidade) {
  let descontoPorQuantidade = descontoPorQuantidade(quantidade);

  const precoComDesconto = calcularDesconto(preco, descontoPorQuantidade);

  if (precoComDesconto > 1000) {
    const descontoPadrao = 0.93;
    return precoComDesconto * descontoPadrao;
  }

  return precoComDesconto;
}


function calcularDesconto(preco){
  return preco * (1 - descontoPorQuantidade);
}

function descontoPorQuantidade(quantidade){
  if (quantidade >= 10) {
    descontoPorQuantidade = 0.15;
  } else if (quantidade >= 5) {
    descontoPorQuantidade = 0.1;
  } else if (quantidade >= 3) {
    descontoPorQuantidade = 0.05;
  }
}