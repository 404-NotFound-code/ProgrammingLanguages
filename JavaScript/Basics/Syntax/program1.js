// alert() -> is a built-in function available on a web browser for displaying an alert
alert('Hello world!'); // to display an alert on the web browser
confirm("Hello world!"); // to display a confirm message on the web browser

/*
Whitespace refers to characters that provide the space between other characters. JavaScript has the following whitespaces:
1. Carriage return 
2. Space
3. New line
4. Tab
JavaScript engine ignores whitespace. 
*/

// A statement is a piece of code that either declares a variable or instructs the javascript engine to perform a task. A simple statement ends with a semicolon(;)
let message = "Hello Javascript";
console.log(message); // Hello Javascript

// A block is a sequence of zero or more simple statements. A block is delimited by a pair of curly brackets {}
if(window.localStorage){
    console.log('The local storage is supported');
}

// Comments allow you to include notes or hints in javascript code. When executing the Javascript engine ignores the comments.
// Javascript supports both single-line and block comments

// An Expression is a piece of code that evaluates to a value.
2 + 1; // returns 3

/*
Javascript defines a list of reserved keywords that have specific uses. You cannot use the reserved keywords as identifiers.
break, continue, const, case, catch, debugger, default, delete, do, export, else, finally, for, function, if, instanceof, import, in, let, new, null, return, switch, super, static, this, throw, try, typeof, undefined, var, void, while, with, yeild 
*/

console.warn("This is a warning");
console.error("This is an error");