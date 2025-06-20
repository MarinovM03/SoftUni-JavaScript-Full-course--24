function petShop(dogFood, catFood) {
    let dogFoodResult = dogFood * 2.50;
    let catFoodResult = catFood * 4;

    let totalFood  = dogFoodResult + catFoodResult;

    console.log(`${totalFood} lv.`)
}

petShop(5, 4);
petShop(13, 9);