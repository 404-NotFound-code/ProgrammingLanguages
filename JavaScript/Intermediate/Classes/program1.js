// create a class 
class Person{
    fname = 'John'
    lname = 'Ericson'
    age = 20
    city = 'Chicago'
    isAmerican = true
    getName(){
        return `My name is ${this.fname} ${this.lname}`;
    }
}

let personObj = new Person(); // create instance(obj) using Person class
console.log(personObj);  
console.log(personObj.getName()); // My name is John Ericson
