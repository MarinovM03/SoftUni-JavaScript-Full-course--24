function suppliesForSchool(pens, markers, litres, percentDiscount) {

    pens = Number(pens);
    markers = Number(markers);
    litres = Number(litres);
    percentDiscount = Number(percentDiscount);

    let pensTotalSum = pens * 5.80;
    let markersTotalSum = markers * 7.20;
    let litresTotalSum = litres * 1.20;

    let totalPrice = pensTotalSum + markersTotalSum + litresTotalSum;
    let discount = totalPrice * percentDiscount / 100;
    let finalPrice = totalPrice - discount;

    console.log(finalPrice);

}

suppliesForSchool("2", "3", "4", "25");