const promiseOne = new Promise(function (resolve, reject) {
    // do an async task; db calls, etc
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log('Promise one is resolved');
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(() => {
    console.log('Async 2 is resolved');
});

const promisethree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: 'Chai',
            email: 'chai@example.com',
        });
    }, 1000);
});

promisethree.then((user) => {
    console.log(user);
});

const promisefour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: 'Aman',
                password: '123',
            });
        } else {
            reject('Error: something went wrong');
        }
    }, 1000);
});

promisefour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('The promise is finally resolved or rejected');
    });

    const promisefive = new Promise(function(resolve,reject){
        setTimeout(() => {
            let error = false;
            if (!error) {
                resolve({
                    username: 'js',
                    password: '123',
                });
            } else {
                reject('Error: something went wrong');
            }
        }, 1000);
    })

    async function consumepromisefive() {
        try{
       const response = await promisefive
       console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
    consumepromisefive();


    async function getAllUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
       const data = response.json();
       console.log(data);
            
        } catch (error) {
            console.log("E: ", error);
        }
    }

    getAllUser()