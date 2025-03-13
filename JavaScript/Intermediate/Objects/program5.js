// Object methods(are actions that can be performed on objects)

// A method is a function definition stored as a property value
const car = {
    name: 'Tesla',
    model: 600,
    weight: '600kg',
    color: 'white',
    carTitle: function(){ // Adding method to an object

        return this.name + " " + this.model; // 'this' refers to the car object
    }
}

console.log(car.carTitle()); // Tesla 600


