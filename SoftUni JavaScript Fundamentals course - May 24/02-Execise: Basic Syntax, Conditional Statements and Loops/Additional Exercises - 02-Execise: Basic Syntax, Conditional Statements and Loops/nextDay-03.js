function nextDay(year, month, day) {
    
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

    // console.log(`Year: ${date.getFullYear()}`);
    // console.log(`Month: ${date.getMonth() + 1}`);
    // console.log(`Day: ${date.getDate()}`);
}

nextDay(2016,9,30);
nextDay(2020,3,24);