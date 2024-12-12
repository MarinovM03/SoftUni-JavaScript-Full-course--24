function hairSalon(input) {
    let target = Number(input[0]);
    let earnedMoney = 0;

    for (let i = 1; i < input.length; i++) {
        let command = input[i];

        if (command === "closed") {
            break;
        }

        let type = input[i + 1];
        i++; // Increment i to skip the next element

        if (command === "haircut") {
            switch (type) {
                case "mens":
                    earnedMoney += 15;
                    break;
                case "ladies":
                    earnedMoney += 20;
                    break;
                case "kids":
                    earnedMoney += 10;
                    break;
            }
        } else if (command === "color") {
            switch (type) {
                case "touch up":
                    earnedMoney += 20;
                    break;
                case "full color":
                    earnedMoney += 30;
                    break;
            }
        }
    }

    if (earnedMoney >= target) {
        console.log("You have reached your target for the day!");
    } else {
        let diff = target - earnedMoney;
        console.log("Target not reached! You need " + diff + "lv. more.");
    }

    console.log("Earned money: " + earnedMoney + "lv.");
}

hairSalon([300, "haircut", "ladies", "haircut", "kids", "color", "touch up", "closed"]);
