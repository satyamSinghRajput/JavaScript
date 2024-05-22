let number1 = 20;
let number2 = 10;
let oper = "/"

switch (oper) {
    case oper = "+":
        result = number1 + number2;
        console.log("Addition of " + number1 + " and " + number2 + " is " + result)
        break;
    case oper = "-":
        result = number1 - number2;
        console.log("Subtraction of " + number1 + " and " + number2 + " is " + result)
        break;
    case oper = "*":
        result = number1 * number2;
        console.log("Multiplication of " + number1 + " and " + number2 + " is " + result)
        break;
    case oper = "/":
        result = number1 / number2;
        console.log("Division of " + number1 + " and " + number2 + " is " + result)
        break;
    default:
        console.log("This is invalid operator")    
}
