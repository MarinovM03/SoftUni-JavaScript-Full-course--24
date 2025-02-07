function lastKNumbersSequence(n, k) {
    const sequence = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let j = i - 1; j >= i - k && j >= 0; j--) {
            sum += sequence[j];
        }
        sequence.push(sum);
    }

    return sequence;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));