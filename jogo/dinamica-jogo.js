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