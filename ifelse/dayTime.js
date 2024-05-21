let date = new Date();
let time = date.getHours()

if (time > 5 && time <= 9 ){
    console.log("Go for a morning run")
}
else if (time > 9 && time <= 17 ){
    console.log("Attend work")
}
else if (time > 17 && time <= 21 ){
    console.log("Relax at home")
}
else if ((time > 21 && time <= 24) || (time > 0 && time <= 5)){
    console.log("Relax at home")
}
else(
    console.log("Invalid hour")
)

