const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById(`yourNumber`);
const texto = document.getElementById(`texto`);

numeroTitulo.innerHTML = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong></p>`
texto.innerHTML += `<p><strong>${numero}</strong> é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`
texto.innerHTML += `<p>Arrendondado para cima <strong>${Math.floor(numero)}</strong></p>`
texto.innerHTML += `<p>Arrendondado para baixo <strong>${Math.ceil(numero)}</strong></p>`
texto.innerHTML += `<p>Com duas casas decimais <strong>${numero.toFixed(2)}</strong></p>`


