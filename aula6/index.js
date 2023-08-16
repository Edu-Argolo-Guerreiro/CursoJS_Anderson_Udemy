const nome = 'Edu';
const sobrenome = 'Guerreiro';
const idade = 19;
const massa = 61.2;
const altura = 1.69;
const anoAtual = 2023;
let imc;
let anoNascimento;


imc = massa/ (altura * altura);
anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${massa} kg.`);
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);