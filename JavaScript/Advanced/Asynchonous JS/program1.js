// Javascript callbacks (I'll call back later)

// A callback function passed as an argument to another function. This technique allows to call another function. A callback function can run after another function has finished

// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

// Following the two example in those images(normalFunction.png & callback.png) above, is that you've to call two functions to display the result. But the second example(callback.png), is that you cannot prevent the calculator function from displaying the result.

// In callback2.png, where you could call the calculator function (myCalculator) with a callback(myCallback), and let the calculator function run the callback after the calculation is finished. In the example above, myDisplayer is called a callback function. It is passed to myCalculator() as an argument.

// When you pass a function as an argument, remember not to use parenthesis.

// callback is a part of asynchronous functions, where one function has to wait for another function(like waiting for a file to load)

