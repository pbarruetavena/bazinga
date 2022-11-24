//$('#voltar').click(() => location.href  = 'sobre-nos.html');

let indEl = document.querySelector('#indicador');
let marteloEl = document.querySelector('#martelo');
let resultEl = document.querySelector("#result");

marteloEl.addEventListener('click', function(){
    let rect = indEl.getBoundingClientRect();
    let alt = rect.top;
    console.log(alt);

    if(alt <= 530)
        resultEl.textContent = "MONSTRO!";
    else if (alt <= 560)
        resultEl.textContent = "Gorila!";
    else if (alt <= 590)
        resultEl.textContent = "fisiculturista";
    else if (620 <= 620)
        resultEl.textContent = "lenhador";

});

//  Alterna classe quando clicado o martelo
//  Mudei o nome pra marteloEl, ao invés de martEl
//  Martelo tira classe por conta própria
//  correções no timing da animação (1000ms = melhor ângulo)
marteloEl.addEventListener('click', function(e){
    marteloEl.classList.toggle('marteloClicado');
    setTimeout(function(){marteloEl.classList.toggle('marteloClicado');}, 1000);
    indEl.classList.toggle('parar');
    setTimeout(function(){indEl.classList.toggle('parar');}, 1000);
});

