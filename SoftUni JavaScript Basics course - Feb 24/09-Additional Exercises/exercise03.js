function timePlus15(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let minutesPlus15 = minutes + 15;

    if (minutesPlus15 >= 60) {
        hours = hours + 1;
        minutesPlus15 = minutesPlus15 - 60;
    }

    if (hours === 24) {
        hours = 0;
    }

    if (minutesPlus15 < 10) {
        console.log(`${hours}:0${minutesPlus15}`);
    } else {
        console.log(`${hours}:${minutesPlus15}`);
    }

}

timePlus15(["1", "46"]);