function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    if(town === "Sofia") {
        switch(product) {
            case "coffee": price = quantity * 0.50; break;
            case "water": price = quantity * 0.80; break;
            case "beer": price = quantity * 1.20; break;
            case "sweets": price = quantity * 1.45; break;
            case "peanuts": price = quantity * 1.60; break;
        }
    } else if (town === "Plovdiv") {
        if (product === "coffee") {
            price = quantity * 0.40;
        } else if (product === "water") {
            price = quantity * 0.70;                                      // ako sme pochnali s `switch` si dovurshvame koda s neq, taka e i s `if`!
        } else if (product === "beer") {
            price = quantity * 1.15;
        } else if (product === "sweets") {
            price = quantity * 1.30;
        } else if (product === "peanuts") {
            price = quantity * 1.50;
        }
    } else {
        switch(product) {
            case "coffee":
                price = quantity * 0.45;
                break;
            case "water":
                price = quantity * 0.70;
                break;
            case "beer":
                price = quantity * 1.10;
                break;
            case "sweets": 
            price = quantity * 1.35;
            break;
            case "peanuts":
                price = quantity * 1.55;
                break;
        }
    }
    console.log(price);
}

smallShop(["sweets","Sofia","2.23"]);
