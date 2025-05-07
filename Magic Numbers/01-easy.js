/**
 * Exercício 1: 
 * Refatore o código abaixo substituindo os números mágicos por constantes com nomes significativos.
 */


function calcularDesconto(valor) {
  let constante1 = 0.1;
  let constante2 = 0.5;
  
  if (valor > 100) {
    return valor * constante1;
  }
  return valor * constante2;
}
