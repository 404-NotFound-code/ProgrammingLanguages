if(true){ // Local scope
    let a = 100; // block scope
    const b = 20; // block scope
    var c = 30;
    console.log([a, b, c]); // [ 100, 20, 30 ]
}

// console.log(a); // a is not defined
// console.log(b); // b is not defined
console.log(c); // 30

function one(){
    const username = 'JS';
    
    function two(){
        const language = 'Javascript';
        console.log(username);
    }
    // console.log(language); // language is not defined
    
    two();
}

one(); // JS

if(true){
    const username = 'hello';
    if(username === 'hello'){
        const language = ' javascript';
        console.log(username + language); // hello javascript
    }
    // console.log(language); // language is not defined
    
}

// console.log(username); // username is not defined
