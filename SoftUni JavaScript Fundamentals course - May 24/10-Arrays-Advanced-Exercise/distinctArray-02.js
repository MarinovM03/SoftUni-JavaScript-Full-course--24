function distinctArray(arr) {
    let uniqueNums = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (!uniqueNums.includes(element)) {
            uniqueNums.push(element);
        }
    }
    console.log(uniqueNums.join(' '));
}

// distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);