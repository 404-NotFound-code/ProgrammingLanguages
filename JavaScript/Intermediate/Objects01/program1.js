// Object -> is a collection of properties, where each property is defined as key-value pair

let emptyObj = {}; 
console.log(typeof emptyObj); // object

// Creating objects literal(object initializers)

// Objects are variables too. But objects can contain many values (a property name of an object can be any string. You can use quotes around the property name if it is not a valid identifier)

let person = {
    fname: 'John', // object property
    lname: 'Ericson',
    age: 20,
    city: 'Chicago',
    isAmerican: true,
    getName: ()=>{ // object methods
        return `My name is ${person.fname} ${person.lname}`
    }
} 
// person objects have the same properties, but the values differ from person to person 

// person objects have the same methods, but the methods are performed at different times

console.log(person);
console.log(person.fname); // John
console.log(person.getName()); // My name is John Ericson

// JavaScript objects are mutable, they are addressed by reference, not by value

/*
1. Objects are containers for Properties and Methods.
2. Properties are named Values.
3. Methods are Functions stored as Properties.
4. Properties can be primitive values, functions, or even other objects
*/
