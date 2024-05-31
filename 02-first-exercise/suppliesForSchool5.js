function suppliesForSchool(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litres = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let pensTotalSum = pens * 5.80;
    let markersTotalSum = markers * 7.20;
    let litresTotalSum = litres * 1.20;

    let totalPrice = pensTotalSum + markersTotalSum + litresTotalSum;
    let discount = totalPrice * percentDiscount / 100;
    let finalPrice = totalPrice - discount;

    console.log(finalPrice);

}

suppliesForSchool(["2","3 ","4 ","25"]);