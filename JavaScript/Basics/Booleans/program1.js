// The boolean type has two literal values: true and false (in lowercase)

let inProgress = true;
let completed = false;
console.log(typeof completed); // boolean

// falsy values -> " ", 0, null, undefined, NaN

// To convert values of other types into boolean values, you use the 'Boolean()' function
console.log(Boolean('Hi')); // true
console.log(Boolean(' ')); // false
console.log(Boolean(Infinity)); // true

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean({ }));  // true on non-empty object
