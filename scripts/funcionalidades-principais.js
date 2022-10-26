const botoesOpcaoArr = document.querySelectorAll('.botao-opcao');

const botaoConfigEl = document.querySelector('#icone-configuracao');
const botaoSobreNosEl = document.querySelector('#icone-sobre');


//              --------------------- LINKS EM BOTÕES -------------------------------
$('#icone-sobre').click(() => open('sobre-nos.html', '_blank'));
botoesOpcaoArr[0].addEventListener('click', () => window.location.href = 'jogo/jogo.html');



document.querySelector('#configuracao').style.display = 'none';
document.querySelector('#ranking').style.display = 'none';

// testar janela de configurações
function mostraConf(){
    document.querySelector('#principal').style.display = 'none';
    document.querySelector('#configuracao').style.display = 'block';
}