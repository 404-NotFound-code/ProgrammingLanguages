// String methods

// Javascript strings are premitive and immutable(strings cannot be changed, only replaced): All strings methods produce a new string without altering the original string

let str = 'This is a string';

// Extracting string characters
console.log(str.length); // 16 (returns the lenghth of a string)
console.log(str.charAt(0)); // T (retruns the character at the specified index)
console.log(str.charCodeAt(0)); // 84 (returns the code of the character at a specified index)
console.log(str.at(0)); // T (returns a new String consisting of the single UTF-16 code unit located at the specified index) It allows the use of negative indexes while charAt() do not.

// Extracting string parts
let txt = 'I love my motherland';

console.log(txt.slice(2, 6)); // love (extracts a part of a string and returns the extracted part in a new string)
console.log(txt.slice(2)); // love my motherland(If we omit the 2nd parameter(not included) it'll slice out the rest of the string)
console.log(txt.slice(-10)); // motherland (if a parameter is negative, the position is counted from the end of the string)
console.log(txt.slice(-10, -4)); // mother

// In substring() method, the start and end values less than 0 are treated as 0
console.log(txt.substring(2, 6)); // love
console.log(txt.substring(2)); // love my motherland

// substr(start, length)
console.log(txt.substr(10, 20)); // motherland

// toUpperCase(), toLowerCase()
console.log(txt.toUpperCase()); // I LOVE MY MOTHERLAND
console.log(txt.toLowerCase()); // i love my motherland

// concat() -> join two or more strings
console.log(str.concat(' and ', txt)); // This is a string and I love my motherland

// trim() -> removes whitespace form both sides of a string
txt = '     hello world  ';
console.log(txt.trim()); // hello world
console.log(txt.trimStart()); // hello world   
console.log(txt.trimEnd()); //      hello world 

// repeat() -> returns a string with a number of copies of a string & it's returns a new string (doesnot change the original string)
txt = 'Hello World'
console.log(txt.repeat(2)); // Hello WorldHello World
console.log(txt.repeat(5)); // Hello WorldHello WorldHello WorldHello WorldHello World

// replace(searchValue, replaceValue) -> replaces a specified value with another value in a string & returns a new string (replaces only the first match). This method is case sensitive.
console.log(txt.replace('Hello', 'Bye Bye')); // Bye Bye World

txt = 'Javascript is a frontend language and Javascript is a backend language';
console.log(txt.replaceAll('Javascript', 'Python'));

// Using Regular expressions
txt = 'Hello World World'
// console.log(/World/g, "Earth"); // Hello Earth Earth
// console.log(/World/i, "Earth"); // Hello Earth Earth

// split() -> a string can be converted to an array 
console.log(txt.split(' ')); // [ 'Hello', 'World', 'World' ]

// **********STRING SEARCH**********

// indexOf() -> returns a index(position) of the first occurence of a string in a string, or returns -1 if the string is not found
let line = 'This is new way to learn a new programming language';
console.log(line.indexOf('new')); // 8
console.log(line.indexOf('hello')); // -1
console.log(line.lastIndexOf('new')); // 27 (returns the index of the last occurence of a specified text in a string) 
console.log(line.lastIndexOf('hello')); // -1

// search() -> searches a string for a string (or regular expression) & returns the position of the match
console.log(line.search('This')); // 0

/*
Notice: indexOf() & search() are NOT equal. 
1. search() method cannot take a second start position argument
2. indexOf() method cannot take powerful search values (regular expressions)
*/

// includes(searchString) -> returns true if a string contains a specified value. Otherwise it returns false (case sensitive)
console.log(line.includes('programming')); // true
console.log(line.includes('programme')); // false

// startsWith() & endsWith()  -> returns true if a string begins & ends with a specified value (case sensitive)
console.log(line.startsWith('This')); // true
console.log(line.endsWith('This')); // false


