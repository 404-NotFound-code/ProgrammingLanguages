// Array searching method

const arr = [1,2,3.5,true,'hello'];
console.log(arr.includes(9)); // false (allows us to check if an element is present in an array)
console.log(arr.indexOf('hello')); // 4 (searches an array for an element value & returns its position) returns -1 if the item is not found

// lastIndexOf() -> returns the position of the last occurence of the specified elements

const numbers = [4,9,16,25,29];
let find = numbers.find(muFunction); // returns the value of the first array element that passes a test function

function myFunction(value, index, array){
    return value > 18; // 25
}

// findIndex() -> returns the index of the first array element that passes a test function

