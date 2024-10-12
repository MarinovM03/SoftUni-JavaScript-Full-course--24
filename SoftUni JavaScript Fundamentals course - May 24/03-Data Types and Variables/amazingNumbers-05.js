function amazingNumbers(num) {
    const stringifiedNum = `${num}`;
    
    let sum = 0;
    for (let i = 0; i < stringifiedNum.length; i++) {
        sum += Number(stringifiedNum[i]);
    }
    
    let isAmazing = "False";
    const stringifiedSum = `${sum}`;

    for (let i = 0; i < stringifiedSum.length; i++) {
        if (stringifiedSum[i] === `9`) {
            isAmazing = "True";
            break;
        }
    }
    
    console.log(`${num} Amazing? ${isAmazing}`);
}

amazingNumbers(999);
amazingNumbers(1233);