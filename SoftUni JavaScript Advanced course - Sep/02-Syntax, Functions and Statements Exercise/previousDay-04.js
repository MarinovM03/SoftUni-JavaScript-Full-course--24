function previousDay(year, month, day) {
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);