var str = "satyam";
var char = "a";
var count =0;

//Approch 1
// for (i = 0; i<str.length; i++) {
//     if(str[i].toUpperCase() == char){
//         count++;
//     }   
// }
// console.log(count)

//Approach 2

// for (i in str) {
//     if (str[i].toUpperCase() == char) {
//         count++;
//     }
// }
// console.log(count)

//Approach 3

for (charat of str){
    if(char== charat){
        count++;
    }
}
console.log(count)
