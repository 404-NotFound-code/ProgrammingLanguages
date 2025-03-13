// let person = {}

// person.name = 'Javascript';
// person.age = 20;
// person.eat = function(){
//     console.log(`Person is eating`);
// }
// person.sleep = function(){
//     console.log(`Person is sleeping`);
// }

let p = function Person(name, age){
    let person = {}

    person.name = 'Javascript';
    person.age = 20;
    person.eat = function(){
        console.log(`Person is eating`);
    }
    person.sleep = function(){
        console.log(`Person is sleeping`);
    }

    return person;
};