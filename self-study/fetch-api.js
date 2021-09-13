console.log('hello');

// if you concole.log(fetch())
// it will return a Promise
// console.log(fetch('https://reqres.in/api/users'));

fetch('https://reqres.in/api/users/22')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
// fetch will always success unless there's network error
// therefore. need to have to logic inside then()

fetch('https://reqres.in/api/users/21')
    .then(res => {
        if(res.ok) {
            console.log('success');
        } else {
            console.log('not successful');
        }
        res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

// let's create a new user using this api
fetch('https://reqres.in/api/users', {
    // pick a method
    method: 'POST', 
    // use header to set the correct content type
    headers: {
        'Content-Type': 'application/json'
    },
    // pass info inside the body, make sure data got stringify
    body: JSON.stringify({
        name: 'User 1'
    })
})
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
// if just sent the body: {} , it won't work
// need to use JSON.stringify for the data passed inside body
// need to also set a header to make the contect-type (json)