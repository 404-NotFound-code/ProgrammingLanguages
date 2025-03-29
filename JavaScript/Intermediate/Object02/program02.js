// Object methods 

function createUser(name, age){
    return {
        name,
        age,
        greet(){
            console.log(this.name);
        }
    }
}

const user1 = createUser("Tim", 31);
console.log(user1);

user1.name;
user1.age;
user1.greet(); // Tim 

const user2 = createUser("bob", 32);
console.log(user2);

// Whenever you have a function inside an object you will call that function as method.

let profile = {
    name: "john",
    company: "google",
    message: function(){
        console.log(`${this.name} works at ${this.company}`);
    }
}

console.log(profile.name); // john
console.log(profile.company); // google

profile.message(); // john works at google

