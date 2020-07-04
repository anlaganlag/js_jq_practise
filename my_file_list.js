// $('li:lt(3)').hide().fadeIn(1500);
// $(':header').addClass('headline');
// $('li').on('click',function(){
//     $(this).remove();
// });


const button = document.createElement('button')
button.textContent = 'Click me'
document.body.append(button)

button.addEventListener('click', function (event) {
  console.log(this)
})