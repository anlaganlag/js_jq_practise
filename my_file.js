// $('li:lt(3)').hide().fadeIn(1500);
// $(':header').addClass('headline');
// $('li').on('click',function(){
//     $(this).remove();
// });

window.onload = function() {
    var count = 0;
    var message = "You clicked me  from cloused func ";
    var div = document.getElementById("message");

    var button = document.getElementById("clickme");
    button.onclick = function(){
        count ++;
        div.innerHTML = message + count + " times!";
    };
};
