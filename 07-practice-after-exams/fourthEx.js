function zadachaCheteri(input) {

    let pages = Number(input[0]);
    let pagesByHour = Number(input[1]);
    let days = Number(input[2]);

    let daysNeeded = pages / pagesByHour;
    let totalHoursNeeded = daysNeeded / days;

    console.log(totalHoursNeeded);

}

zadachaCheteri(["212","20 ","2"]);