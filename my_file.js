$('li:lt(3)').hide().fadeIn(1500);
$(':header').css('background-color','#cfa');
$(':header').addClass('background-color','#cfa');
$('li').on('click',function(){
    $(this).remove();
});