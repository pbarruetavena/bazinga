
// adicionar perfil
const adicionarPerfilBtn = document.querySelector('#adicionar-perfil');
const containerPerfisEl = document.querySelector('#secao-selecao-perfil');

let adicionar_perfil = (novo_perfil) => {

    let novo_perfilEl = document.createElement('article'); // criação do article para o novo perfil
    novo_perfilEl.classList.add('perfil-para-selecao');


    let imagem_perfilEl = document.createElement('img'); // criar a imagem
    imagem_perfilEl.classList.add('imagem-usuarios');
    imagem_perfilEl.src = `imagens/${novo_perfil.imagem}`;
    novo_perfilEl.appendChild(imagem_perfilEl);


    let containerDadosPerfilEl = document.createElement('div');
    containerDadosPerfilEl.classList.add('container-dados-perfil');
    
    let nomeEl = document.createElement('p');
    nomeEl.classList.add('nome-perfil-selecao');
    nomeEl.innerHTML = novo_perfil.nome;
    containerDadosPerfilEl.appendChild(nomeEl);
    let pontuacaoEl = document.createElement('p');
    pontuacaoEl.classList.add('pontuacao-max-container');
    pontuacaoEl.innerHTML = novo_perfil.pontuacao + ' pts';
    containerDadosPerfilEl.appendChild(pontuacaoEl);
    let botaoApagarPerfilEl = document.createElement('button');
    botaoApagarPerfilEl.classList.add('botao-conf');
    botaoApagarPerfilEl.classList.add('apagar');
    botaoApagarPerfilEl.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    containerDadosPerfilEl.appendChild(botaoApagarPerfilEl);

    novo_perfilEl.appendChild(containerDadosPerfilEl);

    containerPerfisEl.insertBefore(novo_perfilEl, adicionarPerfilBtn);
};

$('#adicionar-perfil').click( () => {
    let novo_perfil = {
        nome: "Anônimo",
        imagem: "user-spock.png",
        pontuacao: 0,
        tema: 0
    };

    perfis.push(novo_perfil); //adiciona um perfil genérico no vetor de perfis
    
    adicionar_perfil(novo_perfil);
});

let cria_perfis_existentes = (perfis) => {
    perfis = storage.carregarPerfil();
    for(let perfil of perfis) {
        adicionar_perfil(perfil);
    }
}

//
cria_perfis_existentes();