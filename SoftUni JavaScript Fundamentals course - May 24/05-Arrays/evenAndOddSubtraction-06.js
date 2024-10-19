function EvenAndOddSubtraction(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let evenSum = 0;
    let oddSum = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum+=num;
        } else {
            oddSum+=num;
        }
    }
    
    let difference = evenSum - oddSum;
    console.log(difference);
}

EvenAndOddSubtraction([1,2,3,4,5,6]);
EvenAndOddSubtraction([3,5,7,9]);
EvenAndOddSubtraction([2,4,6,8,10]);
