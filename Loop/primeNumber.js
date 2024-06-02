var num = 7;
var isPrime = true;

for (i=2; i<num; i++){
    if(num % i ==0){
        isPrime = false;
       break; 
    }
}
if(isPrime){
    console.log("this is prime number " + num)
}
else{
    console.log("this is not prime number " + num)
}