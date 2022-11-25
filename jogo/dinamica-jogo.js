let cartasEl = document.querySelectorAll('.carta');
let cartas = [];
let cartasJogadorEl = document.querySelectorAll('#container-cartas-jogador .carta');
let estagioJogo = 0; 

function jogadorVencedor(cartaJogador, valorJogador, cartaBot, valorBot){
    const playerVictory = 1;
    const botVictory = 0;

    /*  Caso ambos joguem a mesma carta avaliamos o maior valor numérico(considerando que
        não tem como ter exatamente a mesma carta)   */
    if(cartaJogador === cartaBot){
        if(valorBot > valorJogador)
            return botVictory;
        else
            return playerVictory;
    }
        

    //  'R' de rock(pedra em inglês)     
    if(cartaJogador === 'R'){
        if(cartaBot === 'S' || cartaBot === 'P')
            return botVictory;
        else
            return playerVictory;
    }
     
    //   Caso papel
    else if(cartaJogador === 'P'){
        if(cartaBot === 'T' || cartaBot === 'L')
            return botVictory;
        else
            return playerVictory;
    }

    //  Caso tesoura
    else if(cartaJogador === 'T'){
        if(cartaBot === 'R' || cartaBot === 'S')
            return botVictory;
        else
            return playerVictory;
    }

    //  Caso lagarto
    else if(cartaJogador === 'L'){
        if(cartaBot === 'R' || cartaBot === 'T')
            return botVictory;
        else
            return playerVictory;
    }

    //Último caso, se o jogador usar o Spock
    else{
        if(cartaBot === 'P' || cartaBot === 'L')
            return botVictory;
        else
            return playerVictory;
    }

}

function gera_int_exlusive(limite){
    return Math.floor(Math.random() * limite);
}

function compara_carta(c1, c2){
    if(c1.valor == c2.valor){
        if(c1.naipe == c2.naipe){ return 1; }
    }
    return 0;
}

function embaralha_vet(){
    let naipes = ['R', 'P', 'T', 'L', 'S'];
    let valores = ['A', 2, 3, 4, 5, 6, 7];

    let naipe;
    let valor;

    let cartas_mao = [];

    for(let i = 0; i < 8; i++){

        let aux;
        while(true){
            aux = true;
            naipe = naipes[gera_int_exlusive(naipes.length)];
            valor = valores[gera_int_exlusive(valores.length)];
            let cartaObj = {
                naipe: naipe,
                valor: valor
            };

            for(let j = 0; j < cartas_mao.length; j++){
                if(compara_carta(cartaObj, cartas_mao[j])){
                    aux = false;
                    break;
                }
            }

            if(aux == true){
                cartas_mao.push(cartaObj);
                break;
            }
        }

    }
    
    return cartas_mao;
}

function da_carta(){
    cartas = embaralha_vet();

    for(let i = 4; i < cartas.length; i++){
        cartasEl[i].childNodes[1].innerHTML = cartas[i].valor;
        cartasEl[i].childNodes[3].innerHTML = cartas[i].valor;

        let naipe;
        switch(cartas[i].naipe){
            case 'R': 
                naipe = 'pedra'; 
                break;

            case 'P': 
                naipe = 'papel'; 
                break;

            case 'T': 
                naipe = 'tesoura'; 
                break;

            case 'L': 
                naipe = 'lagarto'; 
                break;
            case 'S': 
                naipe = 'spock'; 
                break;
        }
        cartasEl[i].style.backgroundImage = `url(../imagens/user-${naipe}.png)`;
    }
}

function jogada(n1){
    cartaJogada = cartas[n1];
    let nb = gera_int_exlusive(4);
    cartaBot = cartas[nb];

    let img_src;
    switch(cartaBot.naipe){
        case 'R': img_src = 'pedra'; break;
        case 'P': img_src = 'papel'; break;
        case 'T': img_src = 'tesoura'; break;
        case 'L': img_src = 'lagarto'; break;
        case 'S': img_src = 'spock'; break;
    }

    cartasEl[nb].style.backgroundImage = `url(../imagens/user-${img_src}.png)`;
}

function move_carta(e){
    e.currentTarget.style.position = "absolute";
    e.currentTarget.style.left = "40" + "vw";
    e.currentTarget.style.top = "40" + "vh";

    jogada(e.currentTarget.dataset.value);
}

function libera_cartas(){
    for(let carta of cartasJogadorEl) {
        carta.addEventListener('click', move_carta);
    }
}

function trava_cartas(){
    for(let carta of cartasJogadorEl){
        carta.removeEventListener('click', move_carta);
    }
}

function jogar_init(){
    da_carta();
    libera_cartas();

}
jogar_init();

function pause() {
    $('#pause-container').removeClass('invisivel');
}

$('#icone-pause').click(pause);
$('#icone-home').click(() => window.location.href = "../index.html");
$('#icone-resume').click(() => $('#pause-container').addClass('invisivel'));

posTemaAtual = storage.carregarPosTemaAtual();
temas = storage.carregarTemas();
temaAtual = temas[posTemaAtual];

atualiza.tema(temaAtual);
atualiza.perfil(perfis[perfilAtual]);