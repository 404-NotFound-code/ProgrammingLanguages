// Symbol() -> does not have a literal form

// Symbol is a built-in object whose constructor returns a symbol primitive - also called Symbol value or just a Symbol - that's guaranted to be unique

// Symbols are often used to add unique property keys to an object that won't collide on keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object

// 
let s = Symbol();
console.log(typeof s); // symbol

// The Symbol() function creates a new unique value every time you call it
console.log(Symbol() == Symbol()); // false
console.log(Symbol() === Symbol()); // false
console.log(Symbol('hello') === Symbol('hello')); // false (creates 2 new unique Symbols. Symbol('hello') does not coerce the string 'hello' into a Symbol. It creates a new Symbol each time)

// const symbol = new Symbol(); // TypeError

