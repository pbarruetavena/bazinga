let cartasEl = document.querySelectorAll('.carta');


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