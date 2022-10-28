
$('body').mousemove( (e) => {
    $('#carta').css({top: `${e.pageY}px`, left: `${e.pageX}px`})
});