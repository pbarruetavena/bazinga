
let perfisEl = [];
let temasEl = [];

let tema_selecionado;

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
            atualiza.perfil(perfis[perfilAtual]);
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
    atualiza.perfil(perfis[perfilAtual]);
}

$('#trocar-imagem').click(troca_imagem_de_perfil);


/*    MUDANCA DE NOME      */
let inputNomeEl = document.querySelector('#input-nome');

function muda_nome(){
    let novoNome = inputNomeEl.value;

    perfis[perfilAtual].nome = novoNome;
    let nomeEl = document.querySelector('.perfil-selecionado .nome-perfil-selecao');
    nomeEl.innerHTML = novoNome;
    atualiza.perfil(perfis[perfilAtual]);
}

inputNomeEl.addEventListener('change', muda_nome);



/*         ******************** SELEÇÃO DE TEMAS ***********************            */

// SELEÇÃO DE TEMA - CLICÁVEL

let seleciona_tema_config = (e) => {
    for(let tema of temasEl){
        tema.classList.remove('tema-selecionado');
    }

    let temaSelecionado = e.currentTarget;
    temaSelecionado.classList.add('tema-selecionado');

    for(let i = 0; i < temasEl.length; i++){
        if(temasEl[i] == temaSelecionado){
            posTemaAtual = i;
            temaAtual = temas[i];
            atualiza.tema(temaAtual);
        }
    }

    document.querySelector('#cor1').value = temaAtual.corPrimaria;
    document.querySelector('#cor2').value = temaAtual.corSecundaria;
    document.querySelector('#cor3').value = temaAtual.corContainer;

};


// CRIAÇÃO DE TEMA

let adicionar_tema = (novo_tema) => {

    let novoTemaEl = document.createElement('article');
    novoTemaEl.classList.add('amostra-tema');


    let containerCoresEl = document.createElement('div');
    containerCoresEl.classList.add('container-cores');

    let cor1El = document.createElement('div');
    cor1El.classList.add('display-cor');
    cor1El.classList.add('cor1');
    cor1El.style.setProperty('background-color', novo_tema.corPrimaria);    // cor primário é a do fundo
    containerCoresEl.appendChild(cor1El);

    let cor2El = document.createElement('div');
    cor2El.classList.add('display-cor');
    cor2El.classList.add('cor2');
    cor2El.style.setProperty('background-color', novo_tema.corSecundaria);  // cor secundária é a do texto
    containerCoresEl.appendChild(cor2El);

    let cor3El = document.createElement('div');
    cor3El.classList.add('display-cor');
    cor3El.classList.add('cor3');
    cor3El.style.setProperty('background-color', novo_tema.corContainer);   // cor do container dos menus
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

    novoTemaEl.addEventListener('click', seleciona_tema_config);
    temasEl.push(novoTemaEl);
};

$('#adicionar-tema').click(() => {
    let novo_tema = {
        corPrimaria: document.querySelector('#cor1').value,
        corSecundaria: document.querySelector('#cor2').value,
        corContainer: document.querySelector('#cor3').value
    }

    temas.push(novo_tema);

    adicionar_tema(novo_tema)
});

let cria_temas_existentes = () => {
    temas = storage.carregarTemas();
    for(let tema of temas){
        adicionar_tema(tema);
    }
};

cria_temas_existentes();

let muda_cor_input1 = (e) => {
    let inputCor = e.currentTarget;
    temas[posTemaAtual].corPrimaria = inputCor.value;
    temaAtual.corPrimaria = inputCor.value;

    atualiza.tema(temaAtual);
    document.querySelector('.tema-selecionado .cor1').style.setProperty('background-color', temaAtual.corPrimaria);
}
let muda_cor_input2 = (e) => {
    let inputCor = e.currentTarget;
    temas[posTemaAtual].corSecundaria = inputCor.value;
    temaAtual.corSecundaria = inputCor.value;

    atualiza.tema(temaAtual);
    document.querySelector('.tema-selecionado .cor2').style.setProperty('background-color', temaAtual.corSecundaria);
}
let muda_cor_input3 = (e) => {
    let inputCor = e.currentTarget;
    temas[posTemaAtual].corContainer = inputCor.value;
    temaAtual.corContainer = inputCor.value;

    atualiza.tema(temaAtual);
    document.querySelector('.tema-selecionado .cor3').style.setProperty('background-color', temaAtual.corContainer);
}

$('#cor1').change(muda_cor_input1);
$('#cor2').change(muda_cor_input2);
$('#cor3').change(muda_cor_input3);
