function numBetweenHundreds(input) {

    let wholeNumber = Number(input[0]);

    if (wholeNumber < 100) {
        console.log("Less than 100");
    } else if (wholeNumber >= 100 && wholeNumber<= 200) {
        console.log("Between 100 and 200");
    } else if (wholeNumber > 200) {
        console.log("Greater than 200");
    }

}

numBetweenHundreds(["95"]);