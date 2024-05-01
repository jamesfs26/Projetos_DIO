/* 
EXEMPLO DA AULA:
// Faça um programa pra calcular o valor de uma viagem.

// Você terá  Variáveis sendo elas:
// 1 - Preço do Etanol;
// 2 - Preço da Gasolina;
// 3 - O tipo de combustivel que está no seu carro;
// 4 - Gasto médio do combustivel do carro por KM;
// 5 - Distancia em KM da viagem.
*/

const precoEtanol = 11.00;
const gastoEtanolporKM = 14;
const distanciaemKM = 775;
const tipoCombustivel = "etanol" 

const litrosconsumidos = distanciaemKM / gastoEtanolporKM;
const totalgasto = precoEtanol * litrosconsumidos;

console.log(litrosconsumidos.toFixed(2));
console.log(totalgasto.toFixed(2));

const precoGasolina = 8.35
const gastoGasolinaporKM = 10.5;
const distanciaemkm = 775;

const totalemLitros = distanciaemkm / gastoGasolinaporKM;
const gastototal = precoGasolina * totalemLitros;

console.log(totalemLitros.toFixed(2));
console.log(gastototal.toFixed(2));

console.log('Etanol > Gasolina');
 let gastoemReais = 616.31 - 608.93;
let gastoemCombustivel = 73.81 - 55.36; 

console.log(gastoemReais.toFixed(2));
console.log(gastoemCombustivel.toFixed(2));
/*
"MEUS EXEMPLOS"

EXEMPLO 1 - VIAGEM DIFERENTES:

VIAGEM USANDO ETANOL:
Preço do Etanol: 7,50 Litro
Distancia em KM por litro: 9 KM por litro
Quantidade de Litros consumidos: 50 litros
Gasto total na viagem usando Etanol: R$ 375,00 reais.

VIAGEM USANDO GASOLINA:
Preço da Gasolina: 6,80 Litro
Distancia em KM por litro: 11 KM por litro
Quantidade de Litros consumidos: 60,91 litros
Gasto total na viagem usando Gasolina: R$ 414,18 reais.

EXEMPLO 2 - VIAGENS IGUAIS - COMPARAÇÃO DE ECONOMIA:

ETANOL:
Preço do Etanol: 11,00 Litro
Distancia em KM por litro: 14 KM por litro
Quantidade de Litros consumidos: 55,36 litros
Gasto total na viagem usando Etanol: R$ 608,93 reais.

GASOLINA:
Preço da Gasolina: 8,35 Litro
Distancia em KM por litro: 10,5 KM por litro
Quantidade de Litros consumidos: 73,81 litros
Gasto total na viagem usando Etanol: R$ 616.31 reais.

Distancia Total: 775 KM

(ETANOL VENCEU O DESAFIO DE ECONOMIA: 7 reais mais barato e economizou 18 litros em combustivel)
*/








