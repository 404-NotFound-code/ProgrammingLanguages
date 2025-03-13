// Operators
/*
1. Comparison Operators -> ==(equal to), ===(equal value & equal type), !=(not equal), !==(not equal value or not equal type), >, <, >=, <=

2. Logical operators -> &&(both are true, returns true), ||(at least one is true, returns true), !(not)
*/

console.log(2 < 12); // true
console.log(2 < '12'); // true (coverts str to num automatically)
console.log(2 < 'John'); // false
console.log(2 > 'John'); // false
console.log(2 == 'John'); // false

// When comparing two strings, '2' will be greater than '12', because alphabetically 1 is less than 2
console.log('2' < '12'); // false
console.log('2' > '12'); // true

console.log('2' == '12'); // false

/*
1. Nullish Coalescing Operator(??) -> returns the first argument if it is not nullish(null or undefined)
*/

console.log(null ?? 'hello'); // hello
console.log(null ?? null); // null
console.log(undefined ?? null); // null
console.log(undefined ?? undefined); // undefined
console.log('hello' ?? 'world'); // hello
console.log(null ?? null ?? 'hi'); // hi
console.log(null ?? 'hello' ?? undefined ?? 'world', 123, true); // hello 123 true

/* 2. Optional Chaining Operator(?.) -> returns 'undefined' if an object is undefined or null(instead of throwing an error)
*/

const car = {
    type: 'Fiat',
    model: '500',
    color: 'white'
}

console.log(car?.name); // undefined
console.log(car?.color); // white

// Comparisons 
console.log(2 > 1); // true

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false 
console.log(null == 0); // false 
console.log(null >= 0); // true
console.log(null); // null 

console.log(undefined == 0); // false
console.log(undefined > 0); // false 
console.log(undefined < 0); // false
console.log(undefined != 0); // true

console.log("2" == 2); // true; checks only values
console.log("2" === 2); // false; checks values with types