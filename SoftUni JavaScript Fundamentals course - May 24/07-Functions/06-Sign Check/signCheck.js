function signCheck(num1, num2, num3) {

    let result = num1 * num2 * num3;
    
    if (result <= 0) {
        console.log(`Negative`);
    } else {
        console.log(`Positive`);
    }
}

signCheck(5, 12,-15);
signCheck(-6,-12, 14);
signCheck(-1,-2,-3);
signCheck(-5, 1, 1);