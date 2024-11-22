function sorting(arr) {
    let result = [];
    let sortedArr = arr.sort((a, b) => b - a);
    
    while (sortedArr.length > 0) {
        const biggerNums = sortedArr.shift();
        result.push(biggerNums);

        if (sortedArr.length > 0) {
            const smallerNums = sortedArr.pop();
            result.push(smallerNums);
        }
    }
    console.log(result.join(` `));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log(`------------------`);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);