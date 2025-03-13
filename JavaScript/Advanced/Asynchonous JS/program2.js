// Asynchonous nature of JavaScript (I'll finish later)

// Functions running in parallel with other functions are called asynchonous
function processOrder(customer){
    console.log('Processing order for customer 1');

    var currentTime = new Date().getTime();
    while(currentTime + 3000 >= new Date(). getTime());

    console.log('Order processed for customer 1');
    
    
}
console.log('Take order for customer 1');
processOrder();
console.log('Completed order for customer 1');

