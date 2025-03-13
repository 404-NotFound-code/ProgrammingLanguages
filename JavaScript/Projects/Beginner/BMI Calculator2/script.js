const height = document.querySelector('#height');
const weight = document.querySelector('#weight');

const button = document.querySelector('button');
const form = document.querySelector('#form');
const score = document.querySelector("score");
const result = document.querySelector(".result");

button.addEventListener('click', function(e){
    let heightVal = parseFloat(height.value);
    let weightVal = parseFloat(weight.value);
    
    heightVal /= 100;

    let bmi = parseFloat(weightVal / (heightVal**2));

    score.textContent = bmi.toFixed(2);
    result.style.display = 'block';

    
})

form.addEventListener('submit', function(e){
    e.preventDefault();
})