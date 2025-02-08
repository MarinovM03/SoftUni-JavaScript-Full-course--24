function negativePositiveNumbers(input) {
    const result = [];

    for (const el of input) {
       el < 0 ? result.unshift(el) : result.push(el);
    }
    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);