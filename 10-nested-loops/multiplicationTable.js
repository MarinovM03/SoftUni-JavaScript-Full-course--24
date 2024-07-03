function multiplicationTable(input) {

    for (let n = 1; n <= 10; n++) {
        for (let m = 1; m <= 10; m++) {
            let result = n * m;
            console.log(`${n} * ${m} = ${result}`);
        }
    }
    
}

multiplicationTable();