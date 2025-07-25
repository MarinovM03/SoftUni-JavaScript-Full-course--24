function orders(product, quantity) {

    let coffeePrice = 1.50;
    let waterPrice = 1;
    let cokePrice = 1.40;
    let snacksPrice = 2;

    let totalPrice = 0;

    switch (product) {
        case `coffee`: console.log((coffeePrice * quantity).toFixed(2)); break;
        case `water`: console.log((waterPrice * quantity).toFixed(2)); break;
        case `coke`: console.log((cokePrice * quantity).toFixed(2)); break;
        case `snacks`: console.log((snacksPrice * quantity).toFixed(2)); break;
    }
}

orders("water", 5);
orders("coffee", 2);