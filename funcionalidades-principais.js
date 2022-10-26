const botoesOpcaoArr = document.querySelectorAll('.botao-opcao');


//              --------------------- LINKS EM BOTÕES -------------------------------
document.querySelector('#icone-sobre').addEventListener('click', () => open('sobre-nos.html', '_blank'));
botoesOpcaoArr[0].addEventListener('click', () => window.location.href = 'jogo/jogo.html');


