// Accessing characters
let str = 'hello';
//         01234
console.log(str[0]); // h 
console.log(str[str.length - 1]); // o

// Concatination strings via + operator
let fullname = 'John Peterson';
let greetings = 'Hello ' + fullname;

console.log(greetings); // "Hello John Peterson"

let className = 'btn';
className += ' btn-primary'
className += ' none';

console.log(className); // btn btn-primary none

// Converting values to string
// To convert a non-string value to a string, you use:
let value = false;
let updateValue = value.toString(); 
console.log(updateValue, typeof updateValue); // false string

// Comparing strings
// The comparison operators evalute strings based on the numeric values of the characters, which can result in a different order than that used in dictionaries

let result = 'a' < 'b';
console.log(result, typeof result); // true boolean

result = 'a' < 'B';
console.log(result, typeof result); // false boolean

/*
Note: Property access might be a little unpredictable:
1. It makes strings look like arrays (but they are not)
2. If no character is found, [ ] returns undefined, while charAt() returns an empty string
3. It is read only. str[0] = "A" gives no error (but does not work)
*/