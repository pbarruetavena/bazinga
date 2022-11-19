//$('#voltar').click(() => location.href  = 'sobre-nos.html');

let indEl = document.querySelector('#indicador');
let marteloEl = document.querySelector('#martelo');

marteloEl.addEventListener('click', function(){
    let rect = indEl.getBoundingClientRect();


});

//  Alterna classe quando clicado o martelo
//  Mudei o nome pra marteloEl, ao invés de martEl
//  Martelo tira classe por conta própria
//  correções no timing da animação (1000ms = melhor ângulo)
marteloEl.addEventListener('click', function(e){
    marteloEl.classList.toggle('marteloClicado');
    setTimeout(function(){marteloEl.classList.toggle('marteloClicado');}, 1000);
});

