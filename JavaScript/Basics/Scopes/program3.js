console.log(addOne(5)); // 6
function addOne(num){
    return num + 1;
}

addOne(5); // output nothing

// hoisting
// console.log(addTwo(5)); // Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2;
}
addTwo(5); // 7