// Convert the following callback-based function to return a promise:
	function doSomething(callback) {
	  setTimeout(() => {
		callback("Done!");
	  }, 1000);
	}
// Using Promise
function doPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Done!")
        },1000)
    })
}

doPromise().then((message)=>{
    console.log(message)
})