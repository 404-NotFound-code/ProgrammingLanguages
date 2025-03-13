// getElementsByName() method

// This method used to get elements with a given name in a document

let elements = document.getElementsByName('name'); // getElementsByName() accepts a name which is the value of the name attribute of elements and returns a live 'NodeList' of elements

// Nodelist = an array-like object, not an array object

// If no elements have the specified name attribute, then getElementsByName returns 'an empty NodeList'

// The return collection of elements is live. It means that the return elements are automatically updated when elements with the same name are inserted and/or removed from the document.

let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', function(){
    let rates = document.getElementsByName('rate');
    rates.forEach(rate => { // Accept for & for of loop as well
        if(rate.checked){
            output.style.color = 'white';
            output.innerText = `You Selected ${rate.value}`;
        }
    });
}, false)

