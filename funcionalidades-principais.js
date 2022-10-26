const botoesOpcaoArr = document.querySelectorAll('.botao-opcao');


// animação no botão

/*

function sleep(milliseconds) {
    let timeStart = new Date().getTime();
    while (true) {
      let elapsedTime = new Date().getTime() - timeStart;
      if (elapsedTime > milliseconds) {
        break;
      }
    }
}

function revelaTextoBotao(e){
    let botao = e.currentTarget;
    let paragrafo = document.createElement('p');

    paragrafo.innerHTML = botao.dataset.texto;
    botao.classList.add('botao-extendido');
    botao.appendChild(paragrafo);
    sleep(300);
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

*/

document.querySelector('#icone-sobre').addEventListener('click', () => open('sobre-nos.html', '_blank'));
botoesOpcaoArr[0].addEventListener('click', () => window.location.href = 'jogo/jogo.html');
