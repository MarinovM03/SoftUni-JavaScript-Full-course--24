function zadachaPet(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let mrProper = Number(input[2]);
    let percent = Number(input[3]);

    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let mrProperPrice = mrProper * 1.20;

    let totalSum = pensPrice + markersPrice + mrProperPrice;
    let discountedSum = totalSum * (percent / 100);
    let finalSum = totalSum - discountedSum;


    console.log(finalSum);

}

zadachaPet(["2","3","4","25"]);