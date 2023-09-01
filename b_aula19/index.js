/*
-> If pode ser usado sozinho;
-> Sempre que utilizamos a palavra else, preciso de um if antes;
-> Eu posso ter várias "Else ifs" na checagem;
-> Podemos usar condições sem else if, utilizando apenas if e o else;
 */

const hora = 13;

if(hora<= 12){
    console.log ('bom dia');
} else if (hora >= 12 && hora <=17){
    console.log ('boa tarde');
} else if (hora >= 18 && hora <= 23){
    console.log ('boa noite');
}