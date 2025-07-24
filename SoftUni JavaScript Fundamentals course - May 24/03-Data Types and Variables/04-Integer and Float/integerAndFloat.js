function integerAndFloat(a, b, c) {

    const sum = a + b + c;
    const sumString = `${sum}`;

    let isFloat = false;
    for (let i = 0; i < sumString.length; i++) {
        if (sumString[i] === ".") {
            isFloat = true;
            break;
        }
    }

    const output = isFloat ? "Float" : "Integer";
    console.log(`${sum} - ${output}`);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(1,2,3.123);
integerAndFloat(100,200,303);