// Stack memory
let fullName = 'Javascript';
let newName = fullName; // get a copy
newName = 'Python'

console.log(fullName); // Javascript
console.log(newName); // Python

// Heap memory
let user1 = {
    email: 'ex@example.com',
    phone: 12345
}

let user2 = user1; // get referece
user2.email = 'ex2@example.com';

console.log(user1); 
console.log(user2);

console.log(user1.email); // ex2@example.com
console.log(user2.email); // ex2@example.com

