/**
 * Exercício 4:
 * Melhore a função de formatação de tempo eliminando os números mágicos.
 */

function formatarTempo(segundos) {
  let segundosEmUmaHora = 3600;
  let minutosEmUmaHora = 60;
  const horas = Math.floor(segundos / segundosEmUmaHora);
  const minutos = Math.floor((segundos % segundosEmUmaHora) / minutosEmUmaHora);
  const segundosRestantes = segundos % 60;

  return `${horas.toString().padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}:${segundosRestantes.toString().padStart(2, "0")}`;
}