// ? :
const pontuacao = 500;
const nPontuacao = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const cor = 'pink';
const corP = cor || 'Preta';

console.log (nPontuacao, corP);

/*
if (pontuacao >= 1000){
    console.log('Usuario VIP');
} else {
console.log('Usuario Normal'); 
}*/