// function colorChanger(currentColor){
//     let color = document.getElementById(currentColor);
//     let colorCh = currentColor;
  
//     color.addEventListener("click", function(){
//       if(colorCh === currentColor){
//         document.body.style.backgroundColor = currentColor;
//         colorCh = 'white';
//       } else{
//         document.body.style.backgroundColor = 'white';
//         colorCh = currentColor;
//       }
//     }, false);
  
//   }
  
//   colorChanger('gray');
//   colorChanger('white');
//   colorChanger('blue');
//   colorChanger('yellow');

// *******************************************************************************

console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'gray') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

