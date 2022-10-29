//  Inicializa os menus de configuração e ranking com display none
$('#secao-ajuda').css({display: "none"});
$('#secao-ranking').css({display: "none"});
$('#configuracao').css({display: "none"});


let menuSelecionado = 'principal';  // qual menu está selecionado

/*
        $('#secao-ajuda').css({display: "none"});
        $('#secao-ranking').css({display: "none"});
        $('#principal').css({display: "flex"});
        $('#configuracao').css({display: "none"});
*/

function mostraConf(){
    if(menuSelecionado != 'configuracao'){
        $('#secao-ajuda').css({display: "none"});
        $('#secao-ranking').css({display: "none"});
        $('#principal').css({display: "none"});
        $('#configuracao').css({display: "grid"});

        menuSelecionado = 'configuracao';
    } else {
        $('#secao-ajuda').css({display: "none"});
        $('#secao-ranking').css({display: "none"});
        $('#principal').css({display: "flex"});
        $('#configuracao').css({display: "none"});

        menuSelecionado = 'principal';
    }
}

function mostraRanking(){
    if(menuSelecionado != 'ranking'){
        $('#secao-ajuda').css({display: "none"});
        $('#secao-ranking').css({display: "block"});
        $('#principal').css({display: "none"});
        $('#configuracao').css({display: "none"});

        menuSelecionado = 'ranking';
    } else {
        $('#secao-ajuda').css({display: "none"});
        $('#secao-ranking').css({display: "none"});
        $('#principal').css({display: "flex"});
        $('#configuracao').css({display: "none"});

        menuSelecionado = 'principal';
    }
}



//              --------------------- BOTÕES -------------------------------
$('#icone-sobre').click(() => open('sobre-nos.html', '_blank'));

$('#icone-configuracao').click(mostraConf);
$('#secao-perfil').click(mostraConf);
$('#ranking').click(mostraRanking);
$('#fechar-ranking').click(mostraRanking);

$('.botao-opcao:first-child').click( () => location.href = 'jogo/jogo.html');


//teste --- descomentar para desenvolver o menu de configurações
//mostraConf();
mostraRanking();
