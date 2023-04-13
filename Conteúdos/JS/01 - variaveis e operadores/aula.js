// Desafio de Código - Fórmula no Console

let valor_combustivel = 5.48; 
let km_por_litro = 12;
let km_viagem = 127;

const consumo_combustivel = km_viagem / km_por_litro;
const gasto_combustivel = consumo_combustivel * valor_combustivel;

console.log("A quantidade de litros de combustível gastos nessa viagem foi de " + consumo_combustivel.toFixed(2) + 
" e o valor gasto foi de R$" + gasto_combustivel.toFixed(2));