
$('#botao-home').click( () => location.href = "index.html");

/* 
 * Ideias de easter egg: botão de curtir nas cartas que desbloquearia uma imagem de perfil especial (carta do site), dicas especiais e temas pré-definidos
 * Funcionamento do sobre nós: Cartas em uma "roleta", uma selecionada mostra tudo que tem, as laterais são clicáveis e mostram somente uma letra, e quando clicadas elas se tornam a carta selecionada
*/

// ********** OLHA AQUI PEDRO !!!! **********

/*
let pedroLikeBtn = document.querySelector('#like-pedro');
let pedroP = document.querySelector('#pedroDescri');
let rafaelLikeBtn = document.querySelector('#like-rafael');
let rafaelP = document.querySelector('#rafaelDescri');

pedroLikeBtn.addEventListener('click',function(){
    pedroP.innerHTML = "Citação foda";
});

rafaelLikeBtn.addEventListener('click', function(){
    rafaelP.innerHTML = "Olá, meu nome é Rafael e também sou um dos criadores do site. Gosto de ler mangás📚, praticar Muay thai🥊 e jogar RPGs.";
});
*/
let cartas = document.querySelectorAll('.carta');
let classes = [
    'carta-selecionada',
    'carta-direita',
    'carta-traseira',
    'carta-esquerda'
];
let indice = 12;
let curtidas;    // 0 para não curtido e 1 para curtido 
let likesEl = document.querySelectorAll('.like');

function carrega_curtidas() {
    curtidas = JSON.parse(localStorage.getItem('vet-curtidas'));
    if(curtidas == null){
        curtidas = [0, 0, 0, 0];
    }

    for(let i = 0; i < likesEl.length; i++) {
        if(curtidas[i]){
            likesEl[i].classList.toggle('curtido');
        }
    }
}
carrega_curtidas();



function define_posicoes() { // função não utilizada
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

    localStorage.setItem('indice', indice);
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


/* ***** BOTÕES DAS CARTAS ******** */

$('#github-site').click(() => window.open("https://github.com/pbarruetavena/bazinga", '_blank'));

$('#email-pedro').click(() => window.location.href = "mailto:pbarruetavenavieira@gmail.com");
$('#insta-pedro').click(() => window.open("https://www.instagram.com/pedrogabrielb.vieira/", '_blank'));
$('#github-pedro').click(() => window.open("https://github.com/pbarruetavena", '_blank'));

$('#github-rafael').click(() => open("https://github.com/rafael-igor-vilaca", '_blank'));

$('#github-victor').click(() => open("https://github.com/VictorN77", '_blank'));
$('#insta-victor').click(() => window.open("https://www.instagram.com/victornunes.pando/", "_blank"));


/* ******* EASTER EGGS *********** */

const botoesLikeArr = document.querySelectorAll('.like');

function curtir(likeBtn) {
    likeBtn.classList.toggle('curtido');

    let nCarta = likeBtn.dataset.i;
    curtidas[nCarta] = (curtidas[nCarta] + 1) % 2;
    localStorage.setItem('vet-curtidas', JSON.stringify(curtidas));
}

for(let likeBtn of botoesLikeArr){
    likeBtn.addEventListener('click', (e) => curtir(e.currentTarget));
}

function carrega_carta_atual() {
    indice = localStorage.getItem('indice');
    if(indice == null) {
        indice = 12;
    }
    indice = Number(indice);
    gira_classes();
}
carrega_carta_atual();



let pedroLikeBtn = document.querySelector('#like-pedro');
let pedroP = document.querySelector('#pedroDescri');
let rafaelLikeBtn = document.querySelector('#like-rafael');
let rafaelP = document.querySelector('#rafaelDescri');


pedroLikeBtn.addEventListener('click', () => {
    if(!curtidas[1]){
        pedroP.innerHTML = 'Vivendo e aprendendo';
    } else {
        pedroP.innerHTML = 'Meu nome é Pedro, tenho 16 anos, estudo no CEFET-MG e sou um dos criadores desse jogo. Gosto muito de programar e um dia quero trabalhar com isso.';
    }
});

rafaelLikeBtn.addEventListener('click', () => {
    if(curtidas[2]){
        rafaelP.innerHTML = "Olá, meu nome é Rafael e também sou um dos criadores do site. Gosto de ler mangás📚, praticar Muay thai🥊 e jogar RPGs.";
    } else {
        rafaelP.innerHTML = "rod, phx qrph h udidho h wdpehp vrx xp grv fuldgruhv gr vlwh. jrvwr gh ohu pdqjdv📚, sudwlfdu pxdb wkdl🥊 h mrjdu usjv.";
    }
});




$('#linkEasterEgg_1').click(() => location.href  = 'easter-egg_1.html');


posTemaAtual = storage.carregarPosTemaAtual();
temas = storage.carregarTemas();
temaAtual = temas[posTemaAtual];
atualiza.tema(temaAtual);
