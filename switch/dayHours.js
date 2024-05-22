let time = new Date();
let hour = time.getHours()
switch (true) {
    case (hour >= 6 && hour < 12):
        console.log("Good Morning Its " + hour)
        break;
    case (hour >= 12 && hour < 18):
        console.log("Good Afternoon Its " + hour)
        break;
    case (hour >= 18 && hour < 23):
        console.log("Good Evening Its " + hour)
        break;
    case (hour >= 0 && hour < 6):
        console.log("Good Night Its " + hour)
        break;
    default:
        console.log("This number is out of hours.")
}