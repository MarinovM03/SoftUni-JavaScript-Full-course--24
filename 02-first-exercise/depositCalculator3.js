function depositCalculator(input) {

    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let percent = Number(input[2]);

    let totalSum = depositSum + period * ((depositSum * percent / 100) / 12);

    console.log(totalSum);

}

depositCalculator([200, 3, 5.7]);