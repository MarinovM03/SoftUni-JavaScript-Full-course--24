function ProcessOddNums(arr) {
    const newArr = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];


        if (index % 2 !== 0) {
            const doubledOddEl = element * 2;
            newArr.unshift(doubledOddEl);
        }
    }

    console.log(newArr.join(` `));   
}


ProcessOddNums([10, 15, 20, 25]);
// ProcessOddNums([3, 0, 10, 4, 7, 3]);