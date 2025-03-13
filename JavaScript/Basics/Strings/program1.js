// Strings (storing text are written with both single and double quotes)

let text1 = 'Bangladesh';
let text2 = "Hello, Bangladesh";
let text3 = "I'm a student";
let text4 = 'We are using "Javascript"';
console.log(typeof text1); // string 

// Template strings(enclosed in backticks and allow both single and double quotes inside a string)
let text5 = `He's often called "Jone"`;

// Allows multiline strings
let poem = `Twinkle twinkle little star
How I wonder what your are
Up above the also hight
Like a diamond in the sky`

console.log(poem);

// String interpolation
let phase = `${text1} is my motherland`; 
console.log(phase);
// Bangladesh is my motherland

// To find the length of a string(built-in property)
console.log(text1.length); // 10 

// Escape characters (\', \", \\, \n, \t, \b, \r, \v)
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);

// Strings as Objects
let strObj1 = new String("Bangladesh"); // avoit it, because the 'new' keyword complicates the code and slows down execution speed
console.log(typeof strObj); // object 

let strObj2 = new String("Bangladesh");
console.log(strObj1 == strObj2); // false
console.log(strObj1 === strObj2); // false

const title = "JavaScript";
const year = 2025;

console.log(title + " is my favourite language in " + year);
console.log(title, "is my favourite language in", year);
console.log(`${title} is my favourite language in ${year}`); // string interpolation

const username = new String('hello world');
console.log(username.__proto__); // {}
