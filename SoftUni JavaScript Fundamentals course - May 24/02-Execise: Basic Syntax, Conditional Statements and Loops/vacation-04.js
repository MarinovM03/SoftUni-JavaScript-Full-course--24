function solve(peopleCount,groupType,day) {
    let singlePrice = 0;

    switch (day) {
        case `Friday`:
            if (groupType === `Students`) {
                singlePrice = 8.45;
            } else if (groupType === `Business`) {
                singlePrice = 10.90;
            } else if (groupType === `Regular`) {
                singlePrice = 15;
            }

            break;

        case `Saturday`:
            if (groupType === `Students`) {
                singlePrice = 9.80;
            } else if (groupType === `Business`) {
                singlePrice = 15.60;
            } else if (groupType === `Regular`) {
                singlePrice = 20;
            }

            break;

        case `Sunday`:
            if (groupType === `Students`) {
                singlePrice = 10.46;
            } else if (groupType === `Business`) {
                singlePrice = 16;
            } else if (groupType === `Regular`) {
                singlePrice = 22.50;
            }

            break;
    }
    
    let totalPrice = peopleCount * singlePrice;

    if (groupType === `Students` && peopleCount >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === `Business` && peopleCount >= 100) {
        totalPrice -= 10 * singlePrice;
    } else if (groupType === `Regular` && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30,"Students","Sunday");
// solve(40,"Regular","Saturday");