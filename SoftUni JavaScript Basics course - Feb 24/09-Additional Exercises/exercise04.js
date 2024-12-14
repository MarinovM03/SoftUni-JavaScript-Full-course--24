function toyShop(input) {

    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let miners = Number(input[4]);
    let lorry = Number(input[5]);
    
    let puzzlesSum = puzzles * 2.60;
    let dollsSum = dolls * 3;
    let bearsSum = bears * 4.10;
    let minersSum = miners * 8.20;
    let lorrySum = lorry * 2;

    let totalToys = puzzlesSum + dollsSum + bearsSum + minersSum + lorrySum;
    let toysCount = puzzles + dolls + bears + miners + lorry;

    if (toysCount >= 50) {
        totalToys = totalToys * 0.75;
    } 
    
    let priceAfterRent = totalToys * 0.90;

    if (priceAfterRent >= tripPrice) {
        console.log(`Yes! ${(priceAfterRent - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - priceAfterRent).toFixed(2)} lv needed.`);
    }

}

toyShop(["40.8","20","25","30","50","10"]);
