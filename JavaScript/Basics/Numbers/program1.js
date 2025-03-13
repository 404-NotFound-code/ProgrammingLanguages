// Number -> represent both integers and floating-point values(IEE-754) 

let number = 100;
console.log(typeof number); // number

let num1 = 0o71; // for octal numbers(base: 8 (0-7))
console.log(num1); // 57

let num2 = 0x1a;
console.log(num2); // 26

let amount1 = 3.14e7;
console.log(amount1); // 31400000

let amount2 = 5e-7; 
console.log(amount2); // 0.0000005

let amount3 = 0.0000005; 
console.log(amount3); // 5e-7

// In Javascript, 17 decimal places are floating-point numbers accurate

// To get the range of the number type, 
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Use 'Infinity' and '-Infinity' to represent the infinite number
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

// NaN(Not a Number) -> It is a special numeric value that indicates an invalid number
console.log('a'/2); NaN

/*
The 'NaN' has two special characteristics:
1. Any operation with NaN returns NaN
2. The NaN does not equal any value, including itself
*/

console.log(NaN/2); // NaN
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

/*
Why NaN === NaN returns false?
*/

const result1 = 'Good Programmer' / 5;
const result2 = 'Bad Programmer' / 5;
console.log(result1, result2); // NaN NaN
console.log(result1 === result2); // NaN

// NaN 
const result = 'javascript'/5;
console.log(result, typeof result); // NaN number

console.log(NaN === null); // false
console.log(NaN === undefined); // false
console.log(NaN === " "); // false

console.log(NaN == null); // false
console.log(NaN == undefined); // false
console.log(NaN == " "); // false

const array1 = [NaN];
const array2 = array1.includes(NaN); // this method use same-value-zero algorithm
console.log(array2); // true

// sameValueZero Algorithm
const sameValueZero = (a, b) => {
    if (a === b || (Number.isNaN(a) && Number.isNaN(b))) {
        return true;
    }

    return false;
};

