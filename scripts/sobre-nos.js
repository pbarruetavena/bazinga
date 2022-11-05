
$('#botao-home').click( () => location.href = "index.html");

/* 
 * Ideias de easter egg: botão de curtir nas cartas que desbloquearia uma imagem de perfil especial (carta do site), dicas especiais e temas pré-definidos
 * Funcionamento do sobre nós: Cartas em uma "roleta", uma selecionada mostra tudo que tem, as laterais são clicáveis e mostram somente uma letra, e quando clicadas elas se tornam a carta selecionada
*/

let cartas = document.querySelectorAll('.carta');
let classes = [
    'carta-selecionada',
    'carta-direita',
    'carta-traseira',
    'carta-esquerda'
];
let indice = 12;

function define_posicoes() {
    let containerEl = document.querySelector('#container');
    let larguraCont = containerEl.clientWidth;
    let alturaCont = containerEl.clientHeight;

    let selecionadoEl = document.querySelector('.carta-selecionada');
    let largSelecionado = selecionadoEl.clientWidth;
    let xSelect = (larguraCont - largSelecionado) / 2 - 5;  //considerar a borda
    selecionadoEl.style.left = xSelect + 'px';
    let altSelecionado = selecionadoEl.clientHeight;
    let ySelect = (alturaCont - altSelecionado) / 2 - 5;
    selecionadoEl.style.top = ySelect + 'px';

    let esqEl = document.querySelector('.carta-esquerda');
    let dirEl = document.querySelector('.carta-direita');
    let largLat = esqEl.clientWidth;
    let xLat = (xSelect - largLat) / 3;
    esqEl.style.left = (xLat - 5) + 'px';
    dirEl.style.right = (xLat - 5) + 'px';
    let altLat = dirEl.clientHeight;
    let yLat = (alturaCont - altLat) / 2 - 5;
    esqEl.style.top = yLat + 'px';
    dirEl.style.top = yLat + 'px';

}

function gira_classes() {
    document.querySelector('.carta-selecionada').classList.remove('carta-selecionada');
    document.querySelector('.carta-direita').classList.remove('carta-direita');
    document.querySelector('.carta-traseira').classList.remove('carta-traseira');
    document.querySelector('.carta-esquerda').classList.remove('carta-esquerda');

    if(indice === 0) {indice = 12};

    for(let i = 0; i < cartas.length; i++){
        cartas[i].classList.add(classes[(i+indice)%cartas.length]);
    }


}

document.querySelector('#area-clicavel-esquerda').addEventListener('click', () => {
    indice++;
    gira_classes();
});
document.querySelector('#area-clicavel-direita').addEventListener('click', () => {
    indice--;
    gira_classes();
});

function teste(x) {
    document.querySelector('.carta-selecionada').style.left = x + 'px';
}

alert('dps eu faço a transição pelo menos consegui fazer os bagulin mudar de lugar certo');