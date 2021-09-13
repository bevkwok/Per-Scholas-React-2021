// https://www.youtube.com/watch?v=DHvZLI7Db8E

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

//// interacting with promises

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})

//// an actual example

const userLeft = true;
const userWatchingCatMeme = false;

// when not using promise
// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message);
// }, (error) => {
//     console.log(error.name + ' ' + error.message);
// })

// when using promise
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
})

//// more examples
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorder')
})

// how to run all video at once
Promise.add([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(messages);
})

