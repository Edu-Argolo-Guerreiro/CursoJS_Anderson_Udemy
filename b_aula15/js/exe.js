function meuEscopo (){
    const forms = document.querySelector('.forms');
    const resultado = document.querySelector ('.resultado');

    const pessoas = [];

    forms.onsumbit = function (evento) {
        evento.preventDefault();
        const nome = forms.querySelector('.nome')
        const sobrenome = forms.querySelector('.sobrenome')
        const peso = forms.querySelector('.peso')
        const altura = forms.querySelector('.altura')
       
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.Value,
            peso: peso.Value,
            altura: altura.Value,
        })

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + 
        `${peso.value} ${altura.Value}</p>`;
    };

    /*let contador = 1;
    function recebeEvento (evento){
        evento.preventDefault();
        console.log(`Form não foi enviado ${contador}`);
        contador++
    }
    forms.addEventListener('submit' , recebeEvento);*/
}
meuEscopo();
