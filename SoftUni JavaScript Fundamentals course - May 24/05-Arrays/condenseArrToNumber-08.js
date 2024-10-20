function condenseArrToNumber(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    
    while (arr.length > 1) {
        let condensed = [];

        for (let i = 0; i < arr.length - 1; i++) {
            condensed.push(arr[i] + arr[i + 1]);
        }
        arr = condensed;
    }

    console.log(arr[0]);
}

condenseArrToNumber([2,10,3]);
// condenseArrToNumber([5,0,4,1,2]);
// condenseArrToNumber([1]);
