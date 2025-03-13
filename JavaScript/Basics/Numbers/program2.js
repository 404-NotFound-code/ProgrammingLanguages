// bigint -> represents the whole numbers that are larger than (2^53 - 1)
// To form a bigint literal number, you append the letter n at the end of the number
let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'

let num = BigInt(123);
console.log(num, typeof num); // 123n bigint



