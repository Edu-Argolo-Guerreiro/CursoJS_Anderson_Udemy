/*
confirm('Deseja apagar?'); -> Abre uma aba de confirmação
prompt('Digite o seu nome:'); -> Abre uma aba com possibilidade de digitar
*/

let num1 = prompt('Digite um número');
let num2 = prompt('Digite um número');

num1 = Number(num1);
num2 = Number(num2);
console.log(num1, num2);

const resultado = (num1 + num2);
alert(`O resultado é: ${resultado}.`)
console.log(resultado);
