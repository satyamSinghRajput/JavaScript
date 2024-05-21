let password = "Sat4";

if(password.length >= 12){
    console.log("Password is strong with length " + password.length)
}
else if (password.length >= 8 && password.length <= 11){
    console.log("Password is medium with length " + password.length)
}
else{
    console.log("Password is weak length " + password.length)
}