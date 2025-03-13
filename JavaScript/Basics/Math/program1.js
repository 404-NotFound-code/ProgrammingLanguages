// Math object -> allows you to perform mathematical tasks on numbers whereas Math object has no constructor (Math object is static)

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045 (returns Euler's number)
console.log(Math.sqrt(9)); // 3
console.log(Math.SQRT2); // 1.4142135623730951 (returns the square root of 2)
console.log(Math.SQRT1_2); // 0.7071067811865476 (returns the square root of 1/2)

/* Returns the natural logarithm (base e) of a number */
console.log(Math.log(1)); // 0

console.log(Math.LN2); // 0.6931471805599453 (returns the natural logarithm of 2)
console.log(Math.LN10); // 2.302585092994046 (returns the natural logarithm of 10)

console.log(Math.LOG2E); // 1.4426950408889634 (returns base 2 logarithm of E)
console.log(Math.LOG10E); // 0.4342944819032518 (returns base 10 logarithm of E)
console.log(Math.log2(2)); // 1 (returns the base 2 logarithm of a number)
console.log(Math.log10(4)); // 0.6020599913279624 (returns the base 10 logarithm of a number)
console.log(Math.log1p(2)); // 1.0986122886681096 (returns the natural logarithm of 1+x)

// Number to Interger
/* returns x rounded to its neaarest integer */
console.log(Math.round(4.33467)); // 4
console.log(Math.round(5.7238)); // 6
console.log(Math.round(5.112)); // 5

/*Returns the smallest integer greater than or equal to its numeric argument */
console.log(Math.ceil(4.33467)); // 5
console.log(Math.ceil(5.7238)); // 6
console.log(Math.ceil(5.112)); // 6

/* returns the greatest integer less than or equal to its numeric argument */
console.log(Math.floor(4.33467)); // 4
console.log(Math.floor(5.7238)); // 5
console.log(Math.floor(5.112)); // 5

/* returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x */
console.log(Math.trunc(4.33467)); // 4
console.log(Math.trunc(5.7238)); // 5
console.log(Math.trunc(5.112)); // 5

/* returns the sign of the x, indicating whether x is positive, negative or zero */
console.log(Math.sign(4)); // 1
console.log(Math.sign(-4)); // -1
console.log(Math.sign(0)); // 0

/* returns the value of a base expression taken to a specified power */
console.log(Math.pow(8, 2)); // 64
console.log(Math.pow(-3, 3)); // -27

/* returns the absolute(positive) value of x */
console.log(Math.abs(-4.7)); // 4.7
console.log(Math.abs(0)); // 0
console.log(Math.abs(5)); // 5

/* min() and max() can be used to find the lowest or highest value in a list of arguments */
console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); // 10
console.log(Math.min(0,1,2,3,4,5,6,7,8,9,10)); // 0

/* returns a random number between 0(inclusive) and 1(exclusive) */
console.log(Math.random()); // from 0 to 1

// returns a random integer from 0 to 9
console.log(Math.floor(Math.random()*10));

// returns a random integer from 1 to 10
console.log(Math.floor(Math.random()*10) + 1);

// A Proper Random function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

console.log(getRndInteger(1, 100));
