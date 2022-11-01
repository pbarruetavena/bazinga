// let temaAtual = {
//     corPrimaria: "#171616",
//     corSecundaria: "white"
// }

let confPerfis = [
    {
        nome: "Anônimo",
        imagem: "icone.png",
        pontuacao: 0,
        tema: 0
    }
];

let confTemas = [
    {
        corPrimaria: "#171616",
        corSecundaria: "white" 
    }
];

let confRanking = [
    {
        usuario: 1,
        pontuacao: 0
    }
];


//  MÉTODOS PARA SALVAR E CARREGAR INFORMAÇÕES NA WEB STORAGE
let storage = {
    carregarPerfil: () => {

        perfis = JSON.parse(localStorage.getItem('perfis'));

        if(perfis.length === 0 || perfis == null){
            perfis.push(
                {
                    nome: "Anônimo",
                    imagem: "icone.png",
                    pontuacao: 0,
                    tema: 0
                }
            );
        }

        return perfis
    },

    carregarTemas: () => {
        let temas;

        temas = JSON.parse(localStorage.getItem('temas'));   

        if(temas.length === 0 || tema == null){
            temas.push(
                {
                    corPrimaria: "#171616",
                    corSecundaria: "white"
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

    salvarPerfil: (perfis) => {

        localStorage.setItem('perfis', JSON.stringify(perfis));
    
    },

    salvarTemas: (temas) => {

        localStorage.setItem('temas', JSON.stringify(temas));

    },

    salvarRanking: (ranking) => {

        localStorage.setItem('ranking', JSON.stringify(ranking));

    }
};




//      MÉTODOS PARA INICIALIZAÇÃO DA PÁGINA
let atualizaPagina = {
    perfil: (perfis) => {

    },

    tema: () => {
        document.querySelector(':root').style.setProperty('--cor-texto', 'black');
    }
};
