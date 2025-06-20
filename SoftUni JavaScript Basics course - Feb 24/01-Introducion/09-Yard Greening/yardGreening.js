function yardGreening(meters) {
    let quarter = meters * 7.61;
    let discount = 0.18 * quarter;
    let total = quarter - discount;

    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(550);
yardGreening(150);