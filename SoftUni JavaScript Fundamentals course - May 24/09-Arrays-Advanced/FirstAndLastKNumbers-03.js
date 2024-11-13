function FirstAndLastKNums(arr) {

    const k = arr[0];
    const copy = arr.slice(1);

    const firstResult = copy.slice(0, k);
    const secondResult = copy.slice(-k);

    console.log(firstResult.join(` `));
    console.log(secondResult.join(` `));
}

FirstAndLastKNums([2, 7, 8, 9]);
// FirstAndLastKNums([3, 6, 7, 8, 9]);