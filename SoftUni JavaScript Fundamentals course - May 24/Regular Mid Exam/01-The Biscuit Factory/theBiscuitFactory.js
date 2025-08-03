function theBiscuitFactory(input) {
    let biscuitsPerDay = Number(input[0]);
    let workersCount = Number(input[1]);
    let monthlyCompetingFactoryProd = Number(input[2]);
    let totalProduction = 0;

    for (let day = 1; day <= 30; day++) {
        if (day % 3 === 0) {
            totalProduction += Math.floor(biscuitsPerDay * workersCount * 0.75);  // each 3rd day 
        } else {
            totalProduction += biscuitsPerDay * workersCount;
        }
    }

    console.log(`You have produced ${totalProduction} biscuits for the past month.`);

    let difference = totalProduction - monthlyCompetingFactoryProd;
    let percentage = (difference / monthlyCompetingFactoryProd) * 100;

    if (difference < 0) {
        console.log(`You produce ${Math.abs(percentage).toFixed(2)} percent less biscuits.`);
    } else {
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    }
}

theBiscuitFactory(["78","8","16000"]);
theBiscuitFactory(["65","12","26000"]);
theBiscuitFactory(["163","16","67020"]);