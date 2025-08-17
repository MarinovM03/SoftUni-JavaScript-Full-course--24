function extractIncreasingSubsetFromArray(arr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;

    return arr.reduce((acc, el) => {
        if (el >= biggestNum) {
            biggestNum = el;
            acc.push(el);
        }
        return acc;
    }, []);
}

console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsetFromArray([1, 2, 3,4]));