let month = 2;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("There are 31 days in month " + month);
        break;
    case 2:
        month = "February";
        console.log("There are 28 days in " + month);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("There are 30 days in month " + month);
        break;
    default:
        console.log("This is invalid.Please select from 1 to 12.")
}