function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);


    let isFound = false;
    let combinationCount = 0;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let sum = x + y;
            combinationCount++;
            if (sum === magicNumber) {
                console.log(`Combination N:${combinationCount} (${x} + ${y} = ${magicNumber})`);
                isFound = true;
                break;
            }   
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);
    }
    
}

sumOfTwoNumbers(["1","10","5"]);
