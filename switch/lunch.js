let meal ="breakfast";

switch(meal){
    case "breakfast":
        console.log("Your "+ meal+ " is Preparing" );
        break;
    case "lunch":
        console.log("Your "+ meal+ " is Ready");
        break;
    case "dinner":
        console.log("Your "+ meal+ " is not available today");
        break;
    default:
        console.log("This is invalid meal")       
}