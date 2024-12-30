function vacation(input) {

    let index = 0;
    let neededMoney = Number(input[0]);
    index++;
    let availableMoney = Number(input[1]);
    index++;

    let currentRow = input[index];
    let spendDaysCounter = 0;
    let totalDays = 0;

    while(availableMoney < neededMoney) {
        totalDays++;

        if (currentRow === `spend`) {
            spendDaysCounter++;
            if (spendDaysCounter === 5) {
                console.log("You can't save the money.");
                console.log(totalDays);
                break;
            }

            index++;
            let moneyToSpend = Number(input[index]);
            availableMoney -= moneyToSpend;

            if (availableMoney < 0) {
                availableMoney = 0;
            }

        } else if (currentRow === `save`) {
            index++;
            let moneyToSave = Number(input[index]);
            availableMoney += moneyToSave;
            spendDaysCounter = 0;

        }

        index++;
        currentRow = input[index];
    }

    if (availableMoney >= neededMoney) {
        console.log(`You saved the money for ${totalDays} days.`);
    }

}

vacation(["2000","1000","spend","1200","save","2000"]);