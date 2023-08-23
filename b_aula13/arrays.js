const alunos = ['Luiz', 'Maria', 'João'];
alunos[0] = 'Eduardo'; //Modifica um valor
alunos.push = ('Luiza'); //Adiciona
alunos.unshift('Fábio'); //Adiciona no início
alunos.pop(); //Remove o final
alunos.shift(); //Remove o inicio
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);