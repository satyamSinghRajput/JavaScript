let day = "sUnDay";

day = day.toUpperCase();

if (day === "MONDAY" || day === "TUESDAY" || day === "WEDNESDAY" || day === "THURESDAY" || day === "FRIDAY") {
    console.log("Yes Today is weekdays " + day)
}
else if (day == "SATURDAY" || day == "SUNDAY") {
    console.log("Yes Today is weekend " + day)
}
else {
    console.log("Invalid day " + day)
}