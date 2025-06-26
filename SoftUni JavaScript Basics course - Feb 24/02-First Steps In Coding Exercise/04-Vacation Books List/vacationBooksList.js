function vacationBooksList(totalPages, pagesByHour, daysNeeded) {
    
    totalPages = Number(totalPages);
    pagesByHour = Number(pagesByHour);
    daysNeeded = Number(daysNeeded);

    let timeNeeded = totalPages / pagesByHour;
    let dailyHours = timeNeeded / daysNeeded;

    console.log(dailyHours);

}

vacationBooksList("212", "20", "2");