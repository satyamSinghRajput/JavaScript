let number1 = 20;
let number2 = 10;
let oper = "/";


if (oper === "+" ){
    result = number1 + number2; 
    console.log("Addition of " + number1 + " and " + number2 + " is " + result)
}
else if (oper === "-" ){
    result = number1 - number2; 
    console.log("Subtraction of " + number1 + " and " + number2 + " is " + result)
}
else if (oper === "*" ){
    result = number1 * number2; 
    console.log("Multiplication of " + number1 + " and " + number2 + " is " + result)
}
else if (oper === "/" ){
    result = number1 / number2; 
    console.log("Division of " + number1 + " and " + number2 + " is " + result)
}
else if (oper === "%" ){
    result = number1 % number2; 
    console.log("Modulus of " + number1 + " and " + number2 + " is " + result)
}
else if (oper === "**" ){
    result = number1 ** number2; 
    console.log("Exponential of " + number1 + " and " + number2 + " is " + result)
}
else {
    console.log("This is an invalid operation " + oper)
}