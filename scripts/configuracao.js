
let perfisEl = [];

//selecao de perfil

function seleciona_perfil_config(e){
    for(let perfil of perfisEl){
        perfil.classList.remove('perfil-selecionado');
    }

    let perfil_selecionado = e.currentTarget;
    perfil_selecionado.classList.add('perfil-selecionado');

    for(let i = 0; i < perfisEl.length; i++){
        if(perfisEl[i] == perfil_selecionado){
            perfilAtual = i;
        }
    }

    document.querySelector('#input-nome').value = perfis[perfilAtual].nome;
    document.querySelector('#imagem-selecionada').src = 'imagens/' + perfis[perfilAtual].imagem;
}


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
    // let botaoApagarPerfilEl = document.createElement('button');
    // botaoApagarPerfilEl.classList.add('botao-conf');
    // botaoApagarPerfilEl.classList.add('apagar');
    // botaoApagarPerfilEl.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    // containerDadosPerfilEl.appendChild(botaoApagarPerfilEl);

    novo_perfilEl.appendChild(containerDadosPerfilEl);

    containerPerfisEl.insertBefore(novo_perfilEl, adicionarPerfilBtn);

    novo_perfilEl.addEventListener('click', seleciona_perfil_config);
    perfisEl.push(novo_perfilEl);
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

cria_perfis_existentes();


// deixa um perfil já selecionado
function iniciliza_perfil_selecionado(){
    perfilAtual = JSON.parse(localStorage.getItem('perfil-atual'))
    
    if(perfilAtual == null)
        perfilAtual = 0;
    
    let perfil_selecionado = perfisEl[perfilAtual];
    perfil_selecionado.classList.add('perfil-selecionado');
}

iniciliza_perfil_selecionado();

/*      TROCA DE IMAGEM     */
let imagensDePerfil = [
    'user-spock.png',
    'user-pedra.png',
    'user-papel.png',
    'user-tesoura.png',
    'user-lagarto.png'
];

let posImagem = 0;

function troca_imagem_de_perfil(){
    posImagem = (posImagem + 1) % imagensDePerfil.length;

    document.querySelector('#imagem-selecionada').src = `imagens/${imagensDePerfil[posImagem]}`;
    perfis[perfilAtual].imagem = imagensDePerfil[posImagem];

    document.querySelectorAll('.imagem-usuarios')[perfilAtual].src = 'imagens/' + imagensDePerfil[posImagem];
}

$('#trocar-imagem').click(troca_imagem_de_perfil);


/*    MUDANCA DE NOME                           NÃO ESTÁ FUNCIONANDO  aaaaaa */
let inputNomeEl = document.querySelector('#input-nome');

function muda_nome(){
    let novoNome = inputNomeEl.value;

    perfis[perfilAtual].nome = novoNome;
    let nomeEl = document.querySelector('.perfil-selecionado .nome-perfil-selecao');
    nomeEl.innerHTML = novoNome;
}

inputNomeEl.addEventListener('change', muda_nome);



/*         ******************** SELEÇÃO DE TEMAS ***********************            */

let adicionar_tema = (novo_tema) => {

    let novoTemaEl = document.createElement('article');
    novoTemaEl.classList.add('amostra-tema');


    let containerCoresEl = document.createElement('div');
    containerCoresEl.classList.add('container-cores');

    let cor1El = document.createElement('div');
    cor1El.classList.add('display-cor');
    cor1El.classList.add('cor1');
    containerCoresEl.appendChild(cor1El);

    let cor2El = document.createElement('div');
    cor2El.classList.add('display-cor');
    cor2El.classList.add('cor2');
    containerCoresEl.appendChild(cor2El);

    let cor3El = document.createElement('div');
    cor3El.classList.add('display-cor');
    cor3El.classList.add('cor3');
    containerCoresEl.appendChild(cor3El);

    novoTemaEl.appendChild(containerCoresEl);

    let botaoApagarNovoTemaEl = document.createElement('button');
    botaoApagarNovoTemaEl.classList.add('botao-conf');
    botaoApagarNovoTemaEl.classList.add('apagar');
    botaoApagarNovoTemaEl.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    novoTemaEl.appendChild(botaoApagarNovoTemaEl);

    let containerSelecaoTemasEl = document.querySelector('#selecao-tema');
    let paiDoBotaoEl = document.querySelector('#container-botao-add-tema');
    containerSelecaoTemasEl.insertBefore(novoTemaEl, paiDoBotaoEl);
}

$('#adicionar-tema').click(adicionar_tema);