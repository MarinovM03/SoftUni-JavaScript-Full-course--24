function maxSequenceOfEqualEl(arr) {
    let longestSequence = [];
    let curSequence = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        let curNum = arr[i];

        if (curNum === curSequence[0]) {
            curSequence.push(curNum);

            if (curSequence.length > longestSequence.length) {
                longestSequence = curSequence;
            }
        } else {
            curSequence = [curNum];
        }
    }
    
    console.log(longestSequence.join(" "));
}

maxSequenceOfEqualEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualEl([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceOfEqualEl([4, 4, 4, 4]);
// maxSequenceOfEqualEl([0, 1, 1, 5, 2, 2, 6, 3, 3]);