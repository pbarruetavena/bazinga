
let temaAtual = {
    corPrimaria: "#c8c5bf",
    corSecundaria: "black",
    corContainer: "#f5e9d9"
};
let perfilAtual = 0;

let perfis = [];
let ranking = [];
let temas = [];


//  MÉTODOS PARA SALVAR E CARREGAR INFORMAÇÕES NA WEB STORAGE
let storage = {
    carregarPerfil: () => {
        perfis = JSON.parse(localStorage.getItem('perfis'));

        if(perfis == null){
            perfis = [];
            perfis.push(
                {
                    nome: "Anônimo",
                    imagem: "user-spock.png",
                    pontuacao: 0,
                    tema: 0
                }
            );
        }

        return perfis;
    },

    carregarTemas: () => {
        let temas;

        temas = JSON.parse(localStorage.getItem('temas'));   

        if(temas.length === 0 || tema == null){
            temas.push(
                {
                    corPrimaria: "#171616",
                    corSecundaria: "white",
                    corContainer: "rgba(45, 43, 43, 0.844)"
                }
            );
        }

        return temas;
    },

    carregarRanking: () => {

        ranking = JSON.parse(localStorage.getItem('ranking'));

        if(ranking.length == 0 || ranking == null){
            ranking.push(
                {
                    usuario: 1,
                    pontuacao: 0
                }
            );
        }
    },
    
    carregaPosPerfilAtual: () => {
        let posicao_perfil_atual = JSON.parse(localStorage.getItem('perfil-atual'));
        if(posicao_perfil_atual == null){
            posicao_perfil_atual = 0;
        }

        return posicao_perfil_atual;
    },

    salvarPerfil: () => {
        localStorage.setItem('perfil-atual', perfilAtual);
        localStorage.setItem('perfis', JSON.stringify(perfis));
    },

    salvarTemas: () => {

        localStorage.setItem('temas', JSON.stringify(temas));

    },

    salvarRanking: () => {

        localStorage.setItem('ranking', JSON.stringify(ranking));

    }
};




//      MÉTODOS PARA INICIALIZAÇÃO DA PÁGINA
let atualiza = {
    perfil: (perfil) => {

    },

    tema: (tema) => {
        document.querySelector(':root').style.setProperty('--cor-texto', tema.corSecundaria);
        document.querySelector(':root').style.setProperty('--cor-fundo', tema.corPrimaria);
        document.querySelector(':root').style.setProperty('--cor-fundo-container', tema.corContainer);
    }
};


function inicializar(){
    perfis = storage.carregarPerfil();
    let posicao_perfil_atual = storage.carregaPosPerfilAtual();
    let perfilAtual = perfis[posicao_perfil_atual];

    atualiza.perfil(perfilAtual);

    let posTemaAtual = perfilAtual.tema;
    temas = storage.carregarTemas;
    temaAtual = temas[posTemaAtual];

    atualiza.tema(temaAtual);
}
