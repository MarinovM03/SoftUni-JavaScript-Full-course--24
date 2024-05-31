function vacationBooksList(input) {
    
    let totalPages = Number(input[0]);
    let pagesByHour = Number(input[1]);
    let daysNeeded = Number(input[2]);

    let timeNeeded = totalPages / pagesByHour;
    let dailyHours = timeNeeded / daysNeeded;

    console.log(dailyHours);

}

vacationBooksList(["212","20","2"]);