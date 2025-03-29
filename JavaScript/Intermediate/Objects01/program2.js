// creating instance of object (using the new keyword)
let person = new Object(); // let person = {} (creates empty object)
person.fname = "John";
person.lname = "Ericson";
person.age = 20;
person.city = "Chicago";
person.isAmerican = true;
person.getName = ()=>{
    return `My name is ${person.fname} ${person.lname}`
}

console.log(person);
console.log(person.age); // 20
console.log(person.getName()); // My name is John Ericson