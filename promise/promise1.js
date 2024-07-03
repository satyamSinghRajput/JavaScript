// Write a function that returns a promise which resolves with "Hello, World!" after 2 seconds.
function print(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Hello, World!")
        },2000)
    })
}

print().then((message) => {
    console.log(message)
})