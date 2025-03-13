// change class properties by constructor
class Calculation{
    num1 = 10;
    num2 = 20;

    constructor(a, b){
        this.num1 = a;
        this.num2 = b;
    }

    addTwo(){
        return this.num1 + this.num2;
    }
}
let CalculationObj = new Calculation(100, 200);
console.log(CalculationObj.addTwo()); // 300

