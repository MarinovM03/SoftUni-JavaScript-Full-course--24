function depositCalculator(depositSum, period, percent) {
    let totalSum = depositSum + period * ((depositSum * percent / 100) / 12);

    console.log(totalSum);

}

depositCalculator(200, 3, 5.7);