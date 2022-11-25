//$('#voltar').click(() => location.href  = 'sobre-nos.html');

let indEl = document.querySelector('#indicador');
let marteloEl = document.querySelector('#martelo');
let resultEl = document.querySelector("#result");

marteloEl.addEventListener('click', function(){
    let rect = indEl.getBoundingClientRect();
    let alt = (rect.top / window.innerHeight) * 100; 
    console.log(alt);

    if(alt <= 43){
        resultEl.textContent = "MONSTRO!";
        document.getElementById("result").style.color = 'red';
    }
    else if (alt <= 46){
        resultEl.textContent = "Gorila!";
        document.getElementById("result").style.color = 'rgb(24, 71, 37)';
    }
    else if (alt <= 49){
        resultEl.textContent = "fisiculturista";
        document.getElementById("result").style.color = 'rgb(171, 115, 19)';
    }
    else if (alt <= 52){
        resultEl.textContent = "lenhador";
        document.getElementById("result").style.color = 'rgb(171, 168, 19)';
    }
    else if (alt <= 55){
        resultEl.textContent = "spock";
        document.getElementById("result").style.color = 'rgb(19, 153, 171)';
    }
    else if (alt <= 58){
        resultEl.textContent = "lagarto";
        document.getElementById("result").style.color = 'rgb(119, 133, 120)';
    }
    else if (alt <= 60){
        resultEl.textContent = "pedra";
        document.getElementById("result").style.color = 'rgb(61, 64, 61)';
    }
    else {
        resultEl.textContent = "papel";
        document.getElementById("result").style.color = 'rgb(247, 247, 247)';
    }
});

//  Alterna classe quando clicado o martelo
//  Mudei o nome pra marteloEl, ao invés de martEl
//  Martelo tira classe por conta própria
//  correções no timing da animação (1000ms = melhor ângulo)
marteloEl.addEventListener('click', function(e){
    marteloEl.classList.toggle('marteloClicado');
    setTimeout(function(){
        marteloEl.classList.toggle('marteloClicado');
    }, 1000);
    indEl.classList.toggle('parar');
    setTimeout(function(){
        indEl.classList.toggle('parar');
    }, 1000);
});

