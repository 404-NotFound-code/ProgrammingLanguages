// Conditional Statements

/*
if -> to specify a block of code to be executed, if a specified condition is true
else -> to specify a block of code to be executed, if the same condition is false
else if -> to specify a new condition to test, if the first condition is false
switch -> to specify many alternative blocks of code to be executed
*/

// if statement
let age = 20;
if (age >=18) {
    console.log("You can permit to vote");
}

// else statement
if (age >= 18){
    console.log("You can permit to vote");
} else{
    console.log("You are not permit to vote");
}

// else if statement
if (age >= 18){
    console.log("You can permit to vote");
} else if (age == 0){
    console.log("This is not a valid age");
    
} else{
    console.log("You are not permit to vote");
}

// switch statement -> to select one of many code blocks to be executed
switch (new Date().getDay()) { // getDay() method returns the weekday as a number between 0 and 6
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default: // specifies the code to run if there is no case match. The default case does not have to be the last case in a switch block
        console.log('Invalid Day');

}

// Common Code Blocks
switch (new Date().getDay()) {
    case 4:
    case 5:
      console.log("Soon it is Weekend");
      break;
    case 0:
    case 6:
      console.log("It is Weekend");
      break;
    default:
      console.log("Looking forward to the Weekend");
  }

// If multiple cases matches a case value, the first class is selected. If no matching cases are found, the program continues to the default label. If no default label is found, the program continues to the statement(s) after the switch
