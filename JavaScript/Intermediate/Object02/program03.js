// Nested objects

let profile = {
    name: 'John Doe',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA',
        zip: 10001,
        greeting: function() {
            console.log("Welcome to New York!");
        }
    },
    salary: undefined
}

console.log(profile.name); // John Doe
console.log(profile.address.city); // New York

console.log(profile.address.greeting()); // Welcome to New York!

// in operator

console.log('name' in profile); // true
console.log(profile.salary); // undefined

console.log('salary' in profile); // true

if (!profile.salary) {
    console.log("The salary property doesn't exist");
}


// for..in loop

for (let key in profile){
    console.log(key);
    console.log(profile[key]);
    
}

console.log(Object.keys(profile)); // [ 'name', 'age', 'address', 'salary' ]

console.log(Object.values(profile)); // [ 'John Doe', 25, { city: 'New York', country: 'USA', zip: 10001, greeting: [Function: greeting] }, undefined ]
