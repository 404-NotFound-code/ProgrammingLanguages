const arr = [1,2,3,4.5,true,"hello"];
const arr2 = new Array(1,2,3,4.5,false,"world");

// arrays are mutable, it can be changed

// array methods 
arr.push(123); // adds a new element to an array(at the end)
console.log(arr); // [ 1, 2, 3, 4.5, true, 'hello', 123 ]

arr.pop(); // removes the last element from an array
console.log(arr); // [ 1, 2, 3, 4.5, true, 'hello']

arr.unshift("world"); // adds a new element to an array (at the beginning)
console.log(arr); // [ 'world', 1, 2, 3, 4.5, true, 'hello']

arr.shift(); // removes the first array element & shifts all other elements to a lower index
console.log(arr); // [ 1, 2, 3, 4.5, true, 'hello']

// !!! using delete leaves undefined holes in the array (delete arr[0])

console.log(arr.indexOf(1)); // 0 (returns the index of the first occurrence of a value in an array, or -1 if it is not present.)

console.log(arr.toString()); // 1,2,3,4.5,true,hello (converts an array to a string)

console.log(arr.at(2)); // 3 (returns an indexed element from an array)

/*
Negative bracket indexing is not possible in Javascript.
Because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object
The at() method solves the problem
*/

const newArr = arr2.join(); // joins all array elements into a string
console.log(arr2);
console.log(newArr); // 1,2,3,4.5,false,world (returns a string)
console.log(typeof newArr); // string

// slice() -> slice out a piece of an array
// slice() method creates a new array
const myArr = [0,1,2,3,4,5];
console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3);
console.log(myn1); // [ 1, 2 ]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]

// splice() -> adds new items to an array
const myn2 = myArr.splice(1, 3); // splice change original array (last index included)
console.log("C ", myArr); // C  [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3]

const flowers = ['lily', 'rose', 'belly', 'marigold']
const spliceFlowers = flowers.splice(2, 0, 'sunflower', 'lotus'); 
console.log(spliceFlowers); // []

// toSpliced() method used as a safe way to splice an array without altering the original array

const marvel_heroes = ['spiderman', 'ironman', 'captain america'];
const dc_heroes = ['superman', 'batman', 'wonder women'];

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); // ['spiderman', 'ironman', 'captain america', ['superman', 'batman', 'wonder women']]
console.log(marvel_heroes[3][1]); // batman

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes); // ['spiderman', 'ironman', 'captain america', 'superman', 'batman', 'wonder women'] (combining two or more arrays & it returns a new array)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // using spread 
console.log(all_new_heroes); // ['spiderman', 'ironman', 'captain america', 'superman', 'batman', 'wonder women']

const list = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const newList = list.flat(Infinity); // creates a new array with sub-array elements concatenated to a specified depth
console.log(newList); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

let arr3 = [1,2,3,4,5,6];
const flatmap = arr3.flatMap(x => [x, x*10]); // first maps all elements of an array & then creates a new array by flattening the array
console.log(flatmap); // [ 1, 10,  2, 20, 3, 30, 4, 40,  5, 50, 6, 60 ]

console.log(Array.isArray("Javascript")); // false (returns a boolean value)
console.log(Array.from("JavaScript")); // returns an array associated string character
console.log(Array.from({language: 'Javascript'})); // []; interesting part

let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]