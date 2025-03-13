'use strict' // treat all Javascript code as newer version

// Javascript is a dynamically typed language, meaning that a variable is not associated with a specific type. A variable can hold a value of different types

// Data types 
// A Javascript variable can hold any type of data
/*
Primitive data types
1. Number (2^53)
2. bigInt
3. String (""/'')
4. boolean (true/false)
5. undefined (declared but not initialized)
6. null (stanalone value)
7. Symbol (unique)
*/

let fullName = 'John the Don';
let age = 20;
let isLoggedIn = true;
let bigNum = 22222345863422454n;

console.log(typeof age); // number
console.log(typeof bigNum); // bigInt
console.log(typeof fullName); // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // ***object

console.log(null == undefined); // true

const id = Symbol('123');
const newId = Symbol('123');
console.log(id, newId); // Symbol('123') Symbol('123')
console.log(id == newId); // false
console.log(id === newId); // false

/*
Non-primitive data types (reference)
1. function
2. array
3. object
*/

const f = function sayHello() {
    console.log('Hello!');
    
} 
console.log(typeof f); // function

const friends = ['hi', 'hello'];
console.log(typeof friends); // object

// The object data type can contain both built-in objects(objects, arrays, dates, maps, sets, intarrays, floatarrays, promises), and user defined objects

const person = {
    fullName: "John the Don",
    age: 20,
    idNum: 12345
}
console.log(typeof person); // object 

// When adding a number and a string, Javascript will treat the number as a string

let w = 10 + 'hello'; // 10hello
let x = 'hello' + 10; // hello10
let y = 16 + 4 + 'hello'; // 20hello (evaluates expression from left to right)
let z = 'hello' + 16 + 4; // hello164
let a = 16 + 'hello' + 4; // 16hello4

// Javascript has dynamic types. This means that the same variable can be used to hold different data types 

let p = 5;
p = 'hello';
p = true;  
