
const precoCombustivel = 7.00;
const kmPorLitro = 12;
const distanciaEmKM = 2500;



const litrosConsumidos = distanciaEmKM / kmPorLitro;
const totalGasto = precoCombustivel * litrosConsumidos;

console.log(litrosConsumidos.toFixed(2));
console.log(totalGasto.toFixed(2));

/*
EXEMPLO 1:
Preço do Combustivel = 5.80 por litro
Quilometros por litro = 10km
Distancia Total da Viagem = 100km
Quantidade de litros gastos na viagem = 10 litros
Valor Total gasto na viagem = 58,00 reais

EXEMPLO 2:
Preço do Combustivel = 7.00 por litro
Quilometros por litro = 8km
Distancia Total da Viagem = 2.500km
Quantidade de litros gastos na viagem = 208,3 litros
Valor Total gasto na viagem = 1.458,3 reais


*/



