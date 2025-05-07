/**
 * Exercício 2: Constantes mágicas
 * Problema: O código abaixo contém valores numéricos "mágicos" e métodos e outros valores sem significado claro.
 */

function calculoDoDescontoPorDepartamento(produto) {
  let precoBase = produto.preco;
  let descontoVestuario = 0.92;
  let descontoTecnologia = 0.94;  
  let descontoHigiene = 0.9;

  let vestuario = 1;
  let tecnologia = 2;
  let higiene = 3;

  if (produto.tipo === vestuario) {
    return precoBase * descontoVestuario;
  } else if (produto.tipo === tecnologia) {
    return precoBase * descontoTecnologia;
  } else if (produto.tipo === higiene) {
    return precoBase * descontoHigiene;
  } else {
    return precoBase;
  }
}

const produto = {preco: 10, tipo: 1};

const calculoDesconto = calculoDoDescontoPorDepartamento(produto)

console.log(calculoDesconto);
