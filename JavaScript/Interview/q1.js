console.log(3 + true); // 3 + 1 = 4
console.log(3 + false); // 3 + 0 = 3

// Explanation: In JavaScript, true is equal to 1 and false is equal to 0. So, 3 + true will be 3 + 1 = 4 and 3 + false will be 3 + 0 = 3.

console.log(3 + null); // 3 + 0 = 3
console.log(3 + undefined); // NaN

// Explanation: In JavaScript, null is equal to 0 and undefined is equal to NaN. So, 3 + null will be 3 + 0 = 3 and 3 + undefined will be 3 + NaN = NaN.

console.log(+true); // 1
console.log(-true); // -1
console.log(+false); // 0
console.log(-false); // -0

// Explanation: In JavaScript, true is equal to 1 and false is equal to 0. So, +true will be 1, -true will be -1, +false will be 0, and -false will be -0.

console.log(+null); // 0
console.log(-null); // -0
console.log(+undefined); // NaN
console.log(-undefined); // NaN

// Explanation: In JavaScript, null is equal to 0 and undefined is equal to NaN. So, +null will be 0, -null will be -0, +undefined will be NaN, and -undefined will be NaN.

