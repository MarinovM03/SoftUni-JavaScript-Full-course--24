function requiredReading(pages, pagesInHour, daysToReadTheBook) {
    
    let totalTimeToRead = pages / pagesInHour;
    let requiredHoursPerDay = totalTimeToRead / daysToReadTheBook;

    console.log(requiredHoursPerDay);
}

requiredReading(212,20,2);
requiredReading(432,15,4);