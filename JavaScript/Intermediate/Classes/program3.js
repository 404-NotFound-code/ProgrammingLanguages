// class constructor
/*
1. Constructor name should be constructor
2. Constructor execute automatically when object is created
3. Constructor can take parameter
4. Constructor method can't return any result
*/

class Automate{
    constructor(){
        console.log(`I am a constructor method`);
    }
}

let automateObj = new Automate();
console.log(automateObj); // I am a constructor method

// constructor parameter
class Automate2{
    constructor(num1, num2){
        let sum = num1 + num2;
        console.log(sum);
    }
}

let automateObj2 = new Automate2(10, 20);
console.log(automateObj2); // 30
