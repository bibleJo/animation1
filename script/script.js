$(document).ready(function(){
    $(window).mousemove(function(e){
        mouseX = e.pageX;
        $('#wrap>img').css({'transform':'rotateY('+mouseX+'deg)'})
    })
})