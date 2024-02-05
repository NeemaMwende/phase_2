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
















