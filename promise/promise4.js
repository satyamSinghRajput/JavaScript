//Write a function that returns a promise which resolves with the sum of numbers resolved by two other promises.

function promise1(){
    return new Promise((resolve)=>{
        resolve(10);
    })
}
function promise2(){
    return new Promise((resolve)=>{
        resolve(20);
    })
}

function addPromise(){
    return Promise.all([promise1(), promise2()]).then((values)=>{
        const sum = values[0] + values[1];
        return sum;
    })
}
addPromise().then((sum)=>{
    console.log(sum);
})