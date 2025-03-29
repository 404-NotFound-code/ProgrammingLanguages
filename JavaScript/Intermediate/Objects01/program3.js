// By using an object constructor (to create an object type we use an object constructor function)

// In the constructor function, this has no value. The value of 'this' will become the new object when a new object is created
function Person(){
    this.fname = 'John',
    this.lname = 'Ericson',
    this.age = 20, 
    this.city = 'Chicago',
    this.isAmerican = true,
    this.getName = ()=>{
        return `My name is ${this.fname} ${this.lname}`;
    }
}

let PersonName = new Person();

console.log(PersonName);
console.log(PersonName.city); // Chicago
console.log(PersonName.getName()); // My name is John Ericson