function sortingNumbers(arr) { 
    const sortArr = arr.sort((a, b) => a - b).slice();
    let result = [];
    let isShift = true;

    while(sortArr.length > 0) {
        if (isShift) {
            result.push(sortArr.shift());
        } else {
            result.push(sortArr.pop());
        }
        isShift = !isShift;
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));