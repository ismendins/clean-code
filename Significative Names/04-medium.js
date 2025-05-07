/**
 * Exercício 4: Nomes de variáveis abreviados e não descritivos
 * Problema: O código abaixo usa abreviações e nomes que não comunicam a intenção.
 */

function an_Data(dt, fmt) {
  const results = {};

  // Extrai estatísticas dos dados de vendas
  const tsv = dt.reduce((accumulate, current) => accumulate + current.value, 0);
  const count = dt.length;
  const average = count > 0 ? tsv / count : 0;

  // Encontra o maior valor
  let maximum = dt.length > 0 ? dt[0].value : 0;
  for (let i = 1; i < dt.length; i++) {
    if (dt[i].val > maximum) {
      maximum = dt[i].value;
    }
  }

  // Encontra o menor valor
  let minimum = dt.length > 0 ? dt[0].val : 0;
  for (let i = 1; i < dt.length; i++) {
    if (dt[i].val < minimum) {
      minimum = dt[i].value;
    }
  }

  results.tot = tsv;
  results.cnt = count;
  results.avg = average;
  results.maximum = maximum;
  results.minimum = minimum;

  // Filtra apenas os meses recentes se solicitado
  if (fmt === "rc") {
    results.rcData = dt.filter((item) => {
      const cdt = new Date();
      const idt = new Date(item.dt);
      return (cdt - idt) / (24 * 60 * 60 * 1000) <= 30;
    });
  }

  return results;
}

const venda = [{dt: "2024-01-01", val: 100}, {dt: "2024-01-02", val: 200}];
const periodoDeVenda = "rc";
console.log(an_Data(venda, periodoDeVenda));
