function foodDelivery(chicken, fish, veggie) {
    let chickenMenus = chicken * 10.35;
    let fishMenus = fish * 12.40;
    let veggieMenus = veggie * 8.15;
    let totalMenusSum = chickenMenus + fishMenus + veggieMenus;
    let deliveryPrice = 2.50;

    let dessert = totalMenusSum * 0.20;
    let totalPrice = totalMenusSum + dessert + deliveryPrice;

    console.log(totalPrice);

}

foodDelivery("2","4","3");