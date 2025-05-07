/**
 * Exercício 1: Variáveis com nomes ruins
 * Problema: As variáveis abaixo têm nomes ruins que não comunicam sua intenção.
 */


function calcularCustoTotal(carrinhoDeCompras, descontoPadrao, pesos) {
  let valorAcumulado = 0;
  for (let i = 0; i < carrinhoDeCompras.length; i++) {
    const valorDoItem = carrinhoDeCompras[i].preco * carrinhoDeCompras[i].quantidade;
    if (carrinhoDeCompras[i].tipo === "alimento") {
      valorAcumulado += valorDoItem * (1 + pesos.alimento);
    } else {
      valorAcumulado += valorDoItem * (1 + pesos.geral);
    }
  }
  return valorAcumulado - descontoPadrao;
}

const carrinhoDeCompras =  [
  { preco: 10, quantidade: 2, tipo: "alimento" },
  { preco: 10, quantidade: 2, tipo: "alimento" },
]
const descontoPadrao = 10;
const pesos = { alimento: 0.1, geral: 0.05 }

const valorFinal =  calcularCustoTotal(carrinhoDeCompras, descontoPadrao ,pesos);
console.log(valorFinal);
