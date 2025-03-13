// Functions (Parameters)

// Javascript function definitions do not specify data types for parameters & they do not perform type checking on the passed arguments. Also they do not check the number of arguments received

// Defalult parameters
function myfunction(a, b){
    return a*b;
}

console.log(myfunction(4,5)); // a = 4, b = 5
console.log(myfunction(5)); // NaN

function myFunction2(x, y = 10) {
    return x + y;
  }
console.log(myFunction2(5)); // 15

// Function Rest parameter -> allows a function to treat an indefinite number of arguments as an array

function sum(...arguments){
    let sum = 0;
    for(let arg of arguments) sum += arg; 
    return sum;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10)); // 55


