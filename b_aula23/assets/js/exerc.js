const h1 = document.querySelector('.section h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
