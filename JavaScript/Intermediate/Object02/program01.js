// Create objects with literal syntax
let user = {
    name: "john",
    age: 40,
    "is admin": true
};

console.log(user.name); // john
console.log(user.age); // 40

user.isSeniorCitizen = false;
user["movie lover"] = true;

console.log(user); // { name: 'john', age: 40, isSeniorCitizen: false}

console.log(user["is admin"]); // true

user.age = 34;
console.log(user); // { name: 'john', age: 34, isSeniorCitizen: false}

user["movie lover"] = false;

delete user["movie lover"];

console.log(user);

// *****accessing dynamic key value*****

const someKey = "age";
console.log(user[someKey]); // 34

// *****create obj with dynamic values*****

let car = prompt("Which is your favourite car: ");

let favCars = {
    [car]: 5
}

console.log(favCars);

// Constructor function to create obj (advantage: give custom type)

function Car(name, model){
    this.name = name;
    this.model = model;
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");

console.log(bmwCar, audiCar);

console.log(bmwCar instanceof Car); // true

// Create obj using Object constructor

const person = new Object();
person.name = 'Alpha';
person.age = 67;
console.log(person);

// Create obj using Factory function
// A factory function is a function that can produce different kind of functionality based on the user input of the user asked

function createUser(name, age){
    return {
        name, // name: name (when key name and the parameter through which we are passing the value is exactly same)
        age // age: age (when key name and the parameter through which we are passing the value is exactly same)
    }
}

const user1 = createUser("john", 24);
console.log(user1);

const user2 = createUser("micheal", 43);
console.log(user2);


// Object properties

// Nested objects

// Object Creational Patterns

// Object references 

// Object Static methods

// Objext destructuring 

// Optional chaining