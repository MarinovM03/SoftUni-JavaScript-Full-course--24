function bonusPoints(input) {

    let num = Number(input[0]);
    let bonus = 0.0;
    let score = 0;

    if (num <= 100) {
        bonus = 5;
    } else if (score > 1000) {
        bonus = num * 0.20;
    } else {
        bonus = num * 0.10;
    }

    if (score % 2 == 0) {
        bonus += 1;
    } else if (score % 10 == 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(score + bonus);
}

bonusPoints(["20"]);