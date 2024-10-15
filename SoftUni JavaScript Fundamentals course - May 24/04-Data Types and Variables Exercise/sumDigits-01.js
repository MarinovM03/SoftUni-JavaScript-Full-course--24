function sumDigits(num) {
    let sum = 0;
    let numString = num + ``;

    for (let i = 0; i < numString.length; i++) {
        let currentDigit = Number(numString[i]);
        sum += currentDigit;
    }

    console.log(sum);
}

sumDigits(255);
// sumDigits(97561);
// sumDigits(543);