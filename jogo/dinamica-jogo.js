let cartasEl = document.querySelectorAll('.carta');

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

function embaralha(){
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


for(let carta of cartasEl) {
    carta.addEventListener('click', (e) => {
        carta.style.position = "absolute";
        carta.style.left = "20" + "vw";
        carta.style.top = "20" + "vh";
    });
}


function pause() {
    
}

$('#icone-pause').click(pause);

posTemaAtual = storage.carregarPosTemaAtual();
temas = storage.carregarTemas();
temaAtual = temas[posTemaAtual];

atualiza.tema(temaAtual);
atualiza.perfil(perfis[perfilAtual]);