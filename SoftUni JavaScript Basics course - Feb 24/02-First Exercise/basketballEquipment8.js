function basketballEquipment(input) {

    let tax = Number(input[0]);

    let shoes = tax * 0.40;
    let kit = shoes * 0.20;
    let ball = kit * 0.25;
    let accessories = ball * 0.20;

    let shoesSum = tax - shoes;
    let kitSum = tax - (shoesSum - kit);
    let ballSum = kitSum * 0.25;
    let accessoriesSum = ballSum * 0.20;

    let totalSum = tax + shoesSum + kitSum + ballSum + accessoriesSum;

    console.log(totalSum);
}

basketballEquipment([5]);