// Function (Definitions)

// Javascript functions are defined with the 'function' keyword

// Function declarations
function myfunction(num1, num2) {
    return num1*num2;
}

console.log(myfunction(10, 20)); // 200 (call / invoke a function)

// Function Expressions
const myfunction2 = function (a, b) {return a * b}; // The function above is actually an anonymous function(a function without a name)

// Functions stored in variables do not need function names. They are always invoked (called) using the variable name

let callfunction = myfunction2(1,3); // 3 (after a function expression has been stored in a variable, the variable can be used as a function)

// Functions can also be defined with a built-in Javascript function constructor called 'Function()'

const myfunction3 = new Function('a', 'b', 'return a*b');
let x = myfunction3(4,3); // 12

// ***Most of the time, we avoid using 'new' keyword in Javascript

// Self-Invoking functions -> is invoked(started) automatically, without being called

(function(){
    console.log("Hello world!"); 
    
})(); // Hello world

// Functions can be used as values
function func(a, b){
    return a*b;
}

let y = func(4,3); // 12
console.log(y);

y = func(4,3) * 2; // 24
console.log(y);

// Arrow functions -> allows a short syntax for writing function expressions

const arrowFunc = (a, b)=>{
    return a*b; // (a, b) => a*b (for one line avoid return keyword)
} 

console.log(arrowFunc(10,30)); // 300
