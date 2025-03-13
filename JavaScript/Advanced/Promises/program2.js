const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: 'javascript', password: '123'});
        } else{
            reject('Error: Something went wrong');
        }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user); // { username: 'javascript', password: '123' }
    return user.username, user.password;
})
.then(function(username){
    console.log(username); // 123
})
.catch(function(error){
    console.log(error);
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: 'javascript', password: '123'});
        } else{
            reject('Error: Javascript went wrong');
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()