/*
Vamos criar mais respostas além da 1 (if) e da 2 (else).
Se forem criados mais de 1 if, a ação do primeiro não vai anular a ação do segundo.
Para resolver este problema será necessário interligar os dois if, para isto, basta
colocar o 2º if na mesma linha do else correspondente ao primeiro.
Agora basta criar respostas que funcionem em ordem, caso a resposta do if não seja ativada
as demais devem ser ativadas em sequência, de acordo com o roteiro lógico programado.
*/

const numero = 5;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido erro');
} else if (numeroDivisivelPor5) {
    console.log('Sim');
    } else {
        console.log('Não');
    }


/* 
Existe um valor de número 5 na constante "numero", e uma constante questionando se o valor
"é divisivel por 5", há também um resto de divisão questionando se valor é igual a 0?
Para resolver está questão foi criado uma "Estrutura Condicional", ou seja, criamos condições/respostas
para cada situação, de forma simples.
1 - Exibir uma string com uma 'mensagem de erro', caso o número seja igual a 0.
2 - Exibir uma string com a mensagem de 'Sim', caso o número seja divisivel por 5.
3 - Exibir uma string com a mensagem de 'Não', caso o número não seja divisivel por 5.
*/








