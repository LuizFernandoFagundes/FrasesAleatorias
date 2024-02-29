const btn = document.querySelector('.container__frase__botao');
let frase = document.querySelector('#frase');
let id_resposta = document.querySelector('.id_resposta');

btn.addEventListener('click', () => {
    pegaPerguntaEId();
    
});


async function getAdvice() {
    const url = 'https://api.adviceslip.com/advice';
    const resposta = await fetch(url);
    return await resposta.json();
    
}

async function pegaPerguntaEId() {
    const retorno = await getAdvice();
    
    let id = retorno.slip.id;
    let resposta = retorno.slip.advice;
    id_resposta.innerHTML = `#${id}`;
    frase.innerHTML = `"${resposta}"`;

    
} 

pegaPerguntaEId();