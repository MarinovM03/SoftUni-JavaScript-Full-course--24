function braceletStand(input) {

    let dailyMoney = Number(input[0]) * 5;
    let dailySales = Number(input[1]) * 5;
    let totalExpenses = Number(input[2]);
    let giftPrice = Number(input[3]);

    let totalSavedMoney = dailyMoney + dailySales;
    let totalMoneyAfterExpenses = totalSavedMoney - totalExpenses;

    if (giftPrice <= totalMoneyAfterExpenses) {
        console.log(`Profit: ${totalMoneyAfterExpenses.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        let neededSum = giftPrice - totalMoneyAfterExpenses;
        console.log(`Insufficient money: ${neededSum.toFixed(2)} BGN.`);
    }


}

braceletStand(["2.10","17.50","20.20","148.50"]);