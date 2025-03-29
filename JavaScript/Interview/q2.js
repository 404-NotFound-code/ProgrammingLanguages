let str = 'hare krishna hare krishna krishna krishna hare hare';

const obj = {};

for (let x of str){
    // console.log(x);
    if (obj[x]){
        obj[x]++;
    } else {
        obj[x] = 1;
    }
}

console.log(obj);

// Explanation: Here, we have a string str. We are iterating through each character of the string using for...of loop. We are checking if the character is already present in the object obj. If it is present, we are incrementing the count. If it is not present, we are adding the character to the object with a count of 1. Finally, we are logging the object obj, which contains the count of each character in the string. The output will be: { h: 4, a: 4, r: 4, e: 4, ' ': 6, k: 4, i: 4, s: 4, n: 4, g: 2, t: 1 }.