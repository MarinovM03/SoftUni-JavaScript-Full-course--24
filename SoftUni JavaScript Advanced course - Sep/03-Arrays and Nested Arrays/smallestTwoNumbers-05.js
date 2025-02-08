function smallestTwoNums(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr[0], sortedArr[1]);
}

smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);