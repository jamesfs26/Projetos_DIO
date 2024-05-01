
const numero = 10;

const numeroPar = (numero % 2) === 0;

if (numeroPar) {
console.log('par');
} else {
    console.log('impar')
}




/*
if = operador C, ele é carecterizado pelo código
if () {

}
Ele serve para confirmar por meio de uma exucução se a questão em si é verdadeira.
Ex:
const numero = 3
const numeroPar = (numero % 2) === 0
if (numero) {
console.log('executei')
}
Se o número em questão for par, o interpretador retornará para nós true + string. Se for falso, retornará
apenas false.

O ponto de exclamação ! serve para causar negação, ou seja ele inverte o valor do objeto em questão
Ex:
(numeroPar) = 0 Par (!numeroPar) = 1 impar

Há 2 modos de fazer essas 2 respostas:
1º Usando 2 if (1 Par) normal (2 Impar) com exclamação !
2º Usando else (impar) no fechamento da chave do if que contem o (par).

O if corresponde ao "se for isso, executar isso", enquanto que o else correponde ao "se não, executar isso",
o if funciona como uma 1ª resposta, enquanto o else seria uma 2ª.
*/


