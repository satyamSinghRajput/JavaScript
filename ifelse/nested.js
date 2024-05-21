
let number = 0;

// Approach one


// if(number > 0 && number % 2 == 0){
//     console.log("This number is even and positive " + number);
// }
// else if (number > 0 && number % 2 !== 0){
//     console.log("This number is odd and positive " + number);
// }
// else if(number < 0 && number % 2 == 0){
//     console.log("This number is even and negative " + number);
// }
// else if ((number < 0 && number % 2 !== 0)){
//     console.log("This number is odd and negative " + number);
// }
// else{
//     console.log("This number is zero " + number)
// }



// Approach Two

if (number > 0) {
    if (number % 2 == 0) {
        console.log("This number is positive and even " + number)
    }
    else {
        console.log("This number is positive and odd " + number)
    }
}
else if (number < 0) {
    if (number % 2 !== 0) {
        console.log("This number is Negative and odd " + number)
    }
    else {
        console.log("This number is Negative and even " + number)
    }
}
else {
    console.log("This number is zero " + number)
}