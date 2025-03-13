// define a class using class expression
// Redeclare class(A class can be declared once only. If we try to declare class more than one time it throws an error)
let Add = class{
    num1 = 100
    num2 = 20
    addTwo(){
        return this.num1 + this.num2;
    }
}

// let Add = class{
//     num1 = 100
//     num2 = 200
//     addTwo(){
//         return this.num1 + this.num2;
//     }
// }

let personObj = new Add();
console.log(personObj); // SyntaxError: Identifier 'Add' has already been declared
