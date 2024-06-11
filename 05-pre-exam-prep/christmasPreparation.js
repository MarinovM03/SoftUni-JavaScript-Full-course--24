function christmasPreparation(input) {

    let paperCount = Number(input[0]) * 5.80;
    let clothCount = Number(input[1]) * 7.20;
    let glueLitres = Number(input[2]) * 1.20;
    let discountPercents = Number(input[3]);

    let totalSum = paperCount + clothCount + glueLitres;
    let discountedPrice = totalSum - (totalSum * (discountPercents / 100));

    console.log(discountedPrice.toFixed(3));
    
}

christmasPreparation(["2","3","2.5","25"]);