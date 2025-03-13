// Variables 
// Variables are containers for storing data 

/*
Variable naming rules:
1. Names can contain letters, digits, underscore and dollar sign
2. Names must be begins with a letter(can also begin with a $ and _)
3. Names are case sensitive(x and X are different variables)
4. Reserved words cannot be used as variable names.
*/

// It is considered good programming practice to always declare variables before use

// var does not have to be declared, hoisted and binds to 'this'

var language1 = 'Javascript'; // prefer not to user var because the issue of block scope and functional scope (only be used for older browsers) and it always have global scope 

// language2 = 'Typescript'; // allowed but it's good to avoid it

// Variables declared with let have 'block scope', must be declared before use, cannot be redeclared in the same scope, does not bind to 'this' and are not hoisted

let language3 = 'Python'; // declare a variable with initialization
let name; // undefined (declare a variable called name without a value) -> That has been declared but has not been initialized with a value

// console.log(message); // an undeclared variable is a variable that has not been declared. Hence, accessing it causes a 'ReferenceError'

// Variables defined with const cannot be redeclared, cannot be reassigned, have block scope, must be declared before use, does not bind to 'this' and are not hoisted

// When defining a constant, you need to initialize it with a value immediately

const language4 = 'c++'; // the value and the type should not be changed (It does not define a constant value. It defines a constant reference to a value)
const pi = 3.14; 
// pi = 3.1416; // Uncaught TypeError: Assignment to constant variable

console.log(language1, language3, language4);
console.log([language1, language3, language4]); // outputs data tabular format

let fname = 'hello', lname = 'world', char = '!'; // declare many variables in one statement

// Using the dollar sign is not very common in JS, but professional programmers often use it as an alias for the main function in a JS library. [let $number = 10;]

// Using the underscore is not very common in JS, but a convention among professional programmers is to use it as an alias for private(hidden) variables. [let _x = 6;]
