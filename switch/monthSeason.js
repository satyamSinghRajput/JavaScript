let time = new Date();
let month = time.getMonth(); // Month count Starts from 0 to 11. 

switch (month) {
    case 0:          //January
    case 1:          //February
    case 10:         //November
    case 11:         //December
        console.log("We are in Winter Season because Month is " + month);
        break;
    case 2:          //March
    case 3:          //April
        console.log("We are in Spring Season because Month is " + month);
        break;
    case 4:          //May
    case 5:          //June
    case 6:          //July
    case 7:          //August
        console.log("We are in Summer Season because Month is " + month);
        break;
    case 9:          //September
    case 11:         //October
        console.log("We are in Fall Season because Month is " + month);
        break;
    default:
        console.log("This is invalid Season")

}