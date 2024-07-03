// Write a function that returns a promise which resolves with a number. 
//Chain another promise that adds 10 to the resolved number and returns it.

function add(){
    return new Promise((resolve)=>{
        resolve(12);
    })
}

add().then((number) => {
    return number + 10;
})
.then((result) => {
    console.log(result);
})