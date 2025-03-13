const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`;

    const value1 = bmi < 18.6;
    const value2 = bmi === 18.6 || bmi === 24.9;
    const value3 = bmi > 24.9;
    switch(true){
      case value1:
        results.innerHTML = `<span>${bmi}. Under Weight</span>`;
        break;
      case value2:
        results.innerHTML = `<span>${bmi}. Normal Range</span>`;
        break;
      case value3:
        results.innerHTML = `<span>${bmi}. Over Weight</span>`;
        break;
    }
  }
});

