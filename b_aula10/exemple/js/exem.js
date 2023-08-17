const nome = prompt('Digite seu nome completo:');
console.log(nome)
const idade = prompt('Digite sua idade:');
console.log(nome)
const estudar = prompt('Digite o que você está estudando atualmente:');
console.log(nome)

document.body.innerHTML += `O seu nome é <strong>${nome}</strong>. <br />Tem <strong>${idade}</strong> anos e está estudando <strong>${estudar}</strong>. <br />`
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`
document.body.innerHTML += ` segunda letra do seu nome é: ${nome.charAt(1)}<br />`
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf('a')}<br />`
document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${nome.lastIndexOf('a')}<br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)}<br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`