function dayOfWeek(dayNumber) {

    const days = [`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];

    const result = days[dayNumber - 1];

    if (result !== undefined) {
        console.log(result);
    } else {
        console.log(`Invalid day!`);
    }
}

dayOfWeek(3);
// dayOfWeek(6);
// dayOfWeek(11);