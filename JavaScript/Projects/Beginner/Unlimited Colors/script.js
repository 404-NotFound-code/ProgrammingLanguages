function randomColor() {
    let hexRange = '0123456789ABCDEF';
    let hash = '#';
    // let color;
    for(let i = 0; i < 6; i++){
        hash += hexRange[Math.floor(Math.random() * 16)]
    }
    return hash;
  }
  let intervalId;
  function startChangingColor(){
    intervalId = setInterval(function(){
      document.body.style.backgroundColor = randomColor();
    }, 1000)
  }
  
  function stopChangingColor(){
    clearInterval(intervalId);
  }
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);