// Write a function that returns a promise which rejects with an error message "Something went wrong!" immediately.
function failed(){
    return new Promise((resolve, reject)=>{
        reject("Something went wrong!");
    })
}

failed().catch((err)=>{
    console.log(err);
})