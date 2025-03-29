// Object properties = The named values

// Properties can be changed, added, deleted, and some are read only
const car = {
    name: 'Tesla',
    model: 600,
    weight: '600kg',
    color: 'white'
}
// Here name, model, weight and color are car properties(property: property value)

// Accessing object properties
console.log(car.color); // white
console.log(car['name']); // Tesla
console.log(car["weight"]); // 600kg

// Adding new properties
car.speed = '200km/h'; // adding properties at the end
console.log(car);

// Deleting properties (deletes both the value of the property and the property itself. After deletation, the property cannot be used before it is added back again)
delete car.weight; // delete car['weight']
console.log(car);

// Nested objects
const lm10 = {
    name: 'Messi',
    age: 35,
    lm10Cars: {
        car1: 'BMW',
        car2: 'Audi',
        car3: 'Fiat'
    }
}

console.log(lm10);
console.log(lm10.age); // 35
console.log(lm10.lm10Cars.car2); // Audi
console.log(lm10.lm10Cars['car1']); // BMW
console.log(lm10["lm10Cars"]['car3']); // Fiat

