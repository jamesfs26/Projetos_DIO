/*
Condicional:
É a ação de um problema envolvendo a variável boolean.
No exemplo 1 foi perguntado ao sistema se 15 é um número impar e o resto de sua divisão (%) seria = 1,
seu resultado foi verdadeiro (true), pois 15 / 2 = 7 | 7 * 2 = 14 (1 Resto).
No exemplo 2 a mesma coisa, porém, se o número seria par e = 0, obtivemos a mesma resposta; (true)
*/


const numero = 15

const numeroImpar = (numero % 2) ===1;

console.log(numeroImpar);

const numeros = 20
const numeroPar = (numeros % 5) ===0;
console.log(numeroPar);







