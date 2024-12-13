function zadachaTreta(input) {

    let deposit = Number(input[0]);
    let monthlyDeposit = Number(input[1]);
    let percent = Number(input[2]);

    let depositSum = deposit * percent / 100;
    let month = depositSum / 12;

    let finalSum = deposit + monthlyDeposit * month;

    console.log(finalSum);

}

zadachaTreta(["200","3","5.7"]);