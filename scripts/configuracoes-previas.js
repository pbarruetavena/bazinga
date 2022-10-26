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


//  MÉTODOS PARA SALVAR E CARREGAR INFORMAÇÕES NA WEB STORAGE
let storage = {
    carregarPerfil: (perfis) => {
        if(localStorage.getItem('perfis')){
            perfis = JSON.parse(localStorage.getItem('perfis'));
        }
    },

    salvarTemas: (temas) => {
        if(localStorage.getItem('temas')){
            temas = JSON.parse(localStorage.getItem('temas'));
        }
    },

    salvarPerfil: (perfis) => {
        if(perfis.length === 0){
            confPerfis.push(
                {
                    nome: "Anônimo",
                    imagem: "icone.png",
                    pontuacao: 0,
                    tema: 0
                }
            );

            localStorage.setItem('perfis', JSON.stringify(confPerfis));
        }
    },

    salvarTemas: () => {
        if(confTemas.length === 0){
            confTemas.push(
                {
                    corPrimaria: "#171616",
                    corSecundaria: "white"
                }
            );
        }
    }
};




//      MÉTODOS PARA INICIALIZAÇÃO DA PÁGINA
let atualizaPagina = {
    perfil: (perfis) => {

    },

    tema: () => {
        
    }
};
