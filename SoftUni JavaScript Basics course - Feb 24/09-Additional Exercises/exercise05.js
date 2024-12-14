function godzilla(input) {

    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let eachClotheSum = Number(input[2]);

    let decour = budget * 0.10;
    let totalClothesPrice = actors * eachClotheSum;

    if (actors > 150) {
        totalClothesPrice = actors * 0.90;
    }

    let totalCosts = decour + totalClothesPrice;
    let finalMoviePrice = budget - totalCosts;

    if (finalMoviePrice >= 0) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${finalMoviePrice.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${Math.abs(finalMoviePrice).toFixed(2)} leva more.`);
    }

}    

godzilla(["9587.88","222","55.68"]);


// function film(input) {
 
//     let budget = Number(input[0]);
//     let actors = Number(input[1]);
//     let priceForSingleActor = Number(input[2]);
 
//     let decorPrice = budget * 0.10;
//     let allActorsPrice = actors * priceForSingleActor;
 
//     if (actors > 150) {
//         allActorsPrice = allActorsPrice * 0.90;
//     }
//     let totalExpenses = decorPrice + allActorsPrice;
 
//     let moneyAfterExpenses = budget - totalExpenses;
 
//     if (moneyAfterExpenses >= 0) {
//         console.log('Action!');
//         console.log(`Wingard starts filming with ${moneyAfterExpenses.toFixed(2)} leva left.`);
//     } else {
//         console.log('Not enough money!');
//         console.log(`Wingard needs ${Math.abs(moneyAfterExpenses).toFixed(2)} leva more.`);
//     }
 
// }
