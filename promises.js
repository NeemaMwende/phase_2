let p = new Promise((resolve, reject) =>
{
    let a = 1 + 1;
    if (a === 2)
    {
        resolve('success');
    } else 
    {
        reject('failure');
    }
} )

p.then((message) => {
    console.log('This is in the then ' + message); // success
}).catch((message) => {
    console.error('This is in the catch' + message); // failure
})


const userLeft = false;
const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback){
//     if (userLeft) {
//         errorCallback({
//             name: 'UserLeft',
//             message: 'The user has left :('
//         })
//     } else if (userWatchingCatMeme){
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and subscribe')
//     }
// };
// watchTutorialCallback((message) => {
//     console.log('success: ' + message)
// }, (error) => {
//     console.error(error.name + '' + error.message)
// })


function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'UserLeft',
                message: 'The user has left :('
            })
        } else if (userWatchingCatMeme){
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and subscribe')
        }
    }
);} 
watchTutorialPromise().then((message) => {
    console.log('success: ' + message)
    }).catch((error) => {
    console.error(error.name + '' + error.message)
})
    









































