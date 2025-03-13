// Array -> an array can hold many values under a single name, and you can access the values by referring to an index number

const arr = [1,2,3,4.5,true,"hello"];
console.log(arr); // [ 1, 2, 3, 4.5, true, 'hello' ]
console.log(arr[1], typeof arr); // 2 object

// JS variables are objects. Arrays are special kinds of objects. That's why you can have variables of different types in the same array

const arr2 = new Array(1,2,3,4.5,false,"world");
console.log(arr2[4]); // false

const animal = [];
animal[0] = 'Elephant';
animal[1] = 'Deer',
animal[2] = 'Tiger',
animal[3] = 'Lion';

console.log(animal); // [ 'Elephant', 'Deer', 'Tiger', 'Lion' ]

console.log(animal.length); // 4 (returns the length of an array)

// looping array elements
for(let i = 0; i < animal.length; i++){
    console.log(animal[i]);
}

arr.forEach(function(e){
    console.log(e);
})

// Associated arrays -> arrays with named indexes(or hashes). Javascript does not support arrays with named indexes.

// Using named indexes, Javascript will redefine the array to an object. In this way, some array methods and properties will produce incorrect results
const person =[];

person['firstname'] = 'Micheal';
person['lastname'] = 'Jackson';
person['age'] = 40;

console.log(person, typeof person, person.length); // [ firstname: 'Micheal', lastname: 'Jackson', age: 40 ] object 0

// Recognize an array

const langName = ['Javascript', 'Python', 'C'];
console.log(Array.isArray(langName)); // true (returns a boolean value)

console.log(langName instanceof Array); // true

