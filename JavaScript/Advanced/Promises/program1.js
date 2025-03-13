// A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error. 
const promiseOne = new Promise(function(resolve, reject){
    // async task
    // Database calls, cryptography, network
    setTimeout(() => {
        console.log('async task 1 is completed');
        resolve();
    }, 1000);
})

// The callback to execute when the Promise is resolved
promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('async task 2 is completed');
        resolve();
    }, 1000);
}).then(function(){
    console.log('Promise resolved');
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'javascript', email: 'js@javascript.com'});
    }, 1000)
})

promiseThree.then(function(user){
    // console.log('okay');
    console.log(user);
})

