 // What is inner function and what is outer function?
// -> A function that got another function inside it is called inner function and the inner function will be placed inside and outer function.

// From scope perspective, we know the function which you call inner function which is placed inside an outer function can access any variable that is declared in outer function. So if we have a variable declared in outer function the inner function can access this variable. However, From outer function you cannot access anything that is defined inside the inner function. 

// Now with this thing in our mind we are going to define something called closure. 

// A closure is a function that can remember the variable from its outer function even after the outer function has executed. 

// Outer function executed means outer function execution is done but still the outer functions variable the inner function can remember in some way. If you have such inner function which can remember the variable from outer function even after outer function got executed then that inner function is what you call closure.   

// Technically, a closure allows a function to access a variable from its outer scope even after the outer scope finished the execution. 

// So a closure that can access a variable from the outer scope even after the outer scope finishes the execution.

// ***The inner function is lexically scoped inside the outer function and the inner function is able to access this variable x because of its lexical scope. So the inner functions lexical scope is this entire thing that is there in the outer function***

function outer(){
    let x = 10;

    function inner(){
        console.log(x);
    }

    inner();
}

outer();

// Is this closure, not yet. Because as a definition of clousure, the inner function can access the variables from outer function and even after the execution of the outer function is over. 

// But after this, I don't know really that inner function can access this outer function variable or not. I don't have any way to know it the only way that I can know and I can be certain about it and I can figure out whether this is a closure or not if instead of executing this inner function within the outer function itself. 

// If I just go ahead and return it from here now the situation is bit different. What is this outer function returning? It is returning another function.

// As it is returning another function I can create a variable say 'func'.

function outer(){
    let x = 10;

    return function inner(){
        console.log(x);
    }

}

const func = outer(); // Here the execution of outer function is over. 

console.log(func); // Outer function is no more existed because the execution is over. But the beauty of it over here if I do a console.log(), I am going to get this entire inner function because this is what the outer function is returning and if you see this inner function is having a console.log(x) 

// At this time, you really don't know what is the value of x because the outer function has been executed already. But the beauty of it as it is a inner function you can give a paranthesis around it to execute it.

console.log(func()); 

// And the moment you execute it, that is going to print the value 10 

// Your outer function execution is over. At line 36, outer function doesn't exist but inner function was accessing a variable from the outer function which had a value. That value you are still able to access even after outer function execution is over. 

// At line 36, at this point of time as a consumer you may not even know like what was the value of x was in the outer function because outer function is already done with is execution. But you are now getting back that value only because of the power of this inner function is returning this value to you or it is printing that value somewhere or it is doing something with that value. So this outer function variable whatever the value of it x it is completely private to this particular outer function and it may also happen that it is never ever going to get exposed through this inner function. Finally a computed value only getting exposed.