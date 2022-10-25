const botoesOpcaoArr = document.querySelectorAll('.botao-opcao');



// animação no botão

function revelaTextoBotao(e){
    let botao = e.currentTarget;
    let paragrafo = document.createElement('p');

    paragrafo.innerHTML = botao.dataset.texto;
    botao.classList.add('botao-extendido');
    botao.appendChild(paragrafo);
}
function escondeTextoBotao(e){
    let botao = e.currentTarget;
    let paragrafo = document.querySelector('.botao-extendido p');
    botao.classList.remove('botao-extendido');
    botao.removeChild(paragrafo);
}

for(let i = 0; i < 3; i++){
    botoesOpcaoArr[i].addEventListener('mouseover', revelaTextoBotao);
}
for(let i = 0; i < 3; i++){
    botoesOpcaoArr[i].addEventListener('mouseout', escondeTextoBotao);
}



document.querySelector('#icone-sobre').addEventListener('click', () => window.location.href = 'sobre-nos.html');
botoesOpcaoArr[0].addEventListener('click', () => window.location.href = 'jogo/jogo.html');
