// DOM = Document Object Model
// When a web page is loaded, the browser creates a Document Object Model of the page

// HTML DOM methods are actions you can perform (on HTML elements)
// HTML DOM properties are values (of HTML elements) that you can set or change

// These functions and methods are often called DOM Application Programming Interfaces or DOM API

// getElementById() method -> returns a single HTML element with the specified id(is a string that represents the id of the element to select)

// let title0 = document.getElementById("title").innerHTML = "Hello world";
// console.log(title0); // Hello world

let title1 = document.getElementById("title").innerHTML
console.log(title1); // Hello <span>Javascript</span>

// let title2 = document.getElementById("title").innerText = "Hello world";
// console.log(title2); // Hello world

let title3 = document.getElementById("title").innerText
console.log(title3); // Hello Javascript


// let title4 = document.getElementById("title").textContent = "Hello world";
// console.log(title4); // Hello world

let title5 = document.getElementById("title").textContent
console.log(title5); // Hello Javascript

// If the document has no element with the specified id, the getElementById() method returns 'null'

// The getElementById() is only available in the document object, not on other DOM elements

// If multiple elements have the same id, even though it is invalid, the getElementById() returns the first element it encounters.

document.getElementById('menu').classList.add('active'); // add a class active to an element with the id menu

