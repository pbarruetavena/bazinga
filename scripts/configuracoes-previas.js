
let posTemaAtual = null;
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
        temas = JSON.parse(localStorage.getItem('temas'));   

        if(temas == null){
            temas = [];
            temas.push(
                {
                    corPrimaria: "#171616",
                    corSecundaria: "#ffffff",
                    corContainer: "#2d2b2b"
                }
            );
        }

        return temas;
    },

    carregarRanking: () => {

        ranking = JSON.parse(localStorage.getItem('ranking'));

        if(ranking == null){
            ranking = [];
        }

        return ranking;
    },
    
    carregaPosPerfilAtual: () => {
        let posicao_perfil_atual = JSON.parse(localStorage.getItem('perfil-atual'));
        if(posicao_perfil_atual == null){
            posicao_perfil_atual = 0;
        }

        return posicao_perfil_atual;
    },

    carregarPosTemaAtual: () => {
        let temaSelecionado = JSON.parse(localStorage.getItem('pos-tema-atual'));
        if(temaSelecionado == null){
            temaSelecionado = 0;
        }

        return temaSelecionado;
    },

    salvarPerfil: () => {
        localStorage.setItem('perfil-atual', perfilAtual);
        localStorage.setItem('perfis', JSON.stringify(perfis));
    },

    salvarTemas: () => {
        localStorage.setItem('pos-tema-atual', posTemaAtual);
        localStorage.setItem('temas', JSON.stringify(temas));

    },

    salvarRanking: () => {

        localStorage.setItem('ranking', JSON.stringify(ranking));

    }
};




//      MÉTODOS PARA INICIALIZAÇÃO DA PÁGINA
let atualiza = {
    perfil: (perfil) => {
        document.querySelector('#imagem-user').src = 'imagens/' + perfil.imagem;
        document.querySelector('#nome-perfil').innerHTML = perfil.nome;
    },

    tema: (tema) => {
        document.querySelector(':root').style.setProperty('--cor-texto', tema.corSecundaria);
        document.querySelector(':root').style.setProperty('--cor-fundo', tema.corPrimaria);
        document.querySelector(':root').style.setProperty('--cor-fundo-container', tema.corContainer);
    }
};


function inicializar(){
    perfis = storage.carregarPerfil();
    perfilAtual = storage.carregaPosPerfilAtual();


    posTemaAtual = storage.carregarPosTemaAtual();
    temas = storage.carregarTemas();
    temaAtual = temas[posTemaAtual];

    atualiza.tema(temaAtual);
}

