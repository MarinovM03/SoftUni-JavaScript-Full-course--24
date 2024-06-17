function workingHours(input) {
    let time = Number(input[0]);
    let day = input[1];
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (time < 10 || time > 18) {
                console.log("closed");
            } else {
                console.log("open");
            }
            break;
        case "Sunday":
            console.log("closed"); break;
        default:
            console.log("error");
    }
}

workingHours(["11","Monday"]);