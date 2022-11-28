
ranking = storage.carregarRanking();
let rankingEl = [];
let quantidade_registros = 10;

function reiniciar_ranking() {
    let ver = localStorage.getItem('rankingaberto');

    if(ver == 'true') {
        mostraRanking();
    }
}
reiniciar_ranking();

function cria_elemento_registro(registro) {

    let posicao = ranking.indexOf(registro) + 1;

    let novo_registro_el = document.createElement('article');
    novo_registro_el.classList.add('celula-ranking');

    let prgf_posicaoEl = document.createElement('p');
    prgf_posicaoEl.classList.add('posicao-ranking');
    prgf_posicaoEl.innerHTML = '#' + posicao;
    novo_registro_el.appendChild(prgf_posicaoEl);

    let prgf_pontuacaoEl = document.createElement('p');
    prgf_pontuacaoEl.classList.add('pontuacao-ranking');
    prgf_pontuacaoEl.innerHTML = registro.pontuacao + ' pts';
    novo_registro_el.appendChild(prgf_pontuacaoEl);


    let container_perfil_rank = document.createElement('div');
    container_perfil_rank.classList.add('perfil-ranking');

    let prgf_nome_perfil = document.createElement('p');
    prgf_nome_perfil.innerHTML = perfis[registro.usuario].nome;
    container_perfil_rank.appendChild(prgf_nome_perfil);

    let img_perfil = document.createElement('img');
    img_perfil.src = 'imagens/' + perfis[registro.usuario].imagem;
    container_perfil_rank.appendChild(img_perfil);

    novo_registro_el.appendChild(container_perfil_rank);

    document.querySelector('#container-ranking').appendChild(novo_registro_el);
    rankingEl.push(novo_registro_el);
}

for(let i = 0; i < ranking.length; i++){
    cria_elemento_registro(ranking[i]);
}


function deleta_registros_user(nUser) {

    for(let i = 0; i < ranking.length; i++) {
        
        if(ranking[i].usuario == nUser) {           // deleta os registros com o user
            ranking.splice(i, 1);
        } else if(ranking[i].usuario > nUser) {     // diminui o numero do user já que um user anterior foi deletado
            ranking[i].usuario--;
        }

    }

    storage.salvarRanking();
}

function deleta_ranking() {
    ranking = [];
    storage.salvarRanking();
}

$('#reiniciar-ranking').click(() => {
    localStorage.setItem('rankingaberto', 'true');
    document.location.reload();
});

$('#delete-ranking').click(deleta_ranking);
