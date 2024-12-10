function negativeOrPositiveNums(arr) {

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (element >= 0) {
            result.push(element);
        } else {
            result.unshift(element);
        }
    }

    console.log(result.join(`\n`));
}

negativeOrPositiveNums(['7', '-2', '8', '9']);
negativeOrPositiveNums(['3', '-2', '0', '-1']);