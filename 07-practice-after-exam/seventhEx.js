function zadachaSedem(input) {

    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let veggie = Number(input[2]);

    let chickenMenus = chicken * 10.35;
    let fishMenus = fish * 12.40;
    let veggieMenus = veggie * 8.15;

    let totalMenus = chickenMenus + fishMenus + veggieMenus;
    let dessert = totalMenus * 0.2;
    let totalSum = totalMenus + dessert + 2.50;

    console.log(totalSum);

}

zadachaSedem(["2","4","3"]);