function smallestTwoNums(arr) {

    const sortedNums = arr.sort((a, b) => a - b);
    const firstTwoSmallest = arr.slice(0, 2);

    console.log(firstTwoSmallest.join(` `));
}

smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);