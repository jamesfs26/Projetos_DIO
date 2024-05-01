/*
DESAFIO DA AULA + variavel "TIPO DE COMBUSTIVEL"
*/

const precoEtanol = 11.00;
const gastoEtanolporKM = 14;
const distanciaemKM = 775;

const precoGasolina = 8.35
const gastoGasolinaporKM = 10.5;

const litrosconsumidos = distanciaemKM / gastoEtanolporKM;

const totalemLitros = distanciaemKM / gastoGasolinaporKM;

const tipoCombustivel = 'Gasolina'

if (tipoCombustivel === 'Etanol'){
const totalgasto = precoEtanol * litrosconsumidos;
console.log(totalgasto.toFixed(2))

} else{'Gasolina'
const gastototal = precoGasolina * totalemLitros;

console.log(gastototal.toFixed(2))
console.log(totalemLitros.toFixed(2))
}

