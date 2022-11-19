//$('#voltar').click(() => location.href  = 'sobre-nos.html');

let indEl = document.querySelector('#indicador');
let marteloEl = document.querySelector('#martelo');

marteloEl.addEventListener('click', function(){
    let rect = indEl.getBoundingClientRect();


});

//  Alterna classe quando clicado o martelo
//  Mudei o nome pra marteloEl, ao invés de martEl

marteloEl.addEventListener('click', function(e){
    marteloEl.classList.toggle('marteloClicado');
});

