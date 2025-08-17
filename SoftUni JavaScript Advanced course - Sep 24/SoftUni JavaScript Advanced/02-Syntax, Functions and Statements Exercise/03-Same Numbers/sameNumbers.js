function sameNumbers(num) {
let arr = num.toString().split('');
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        sum += Number(currentNum);

        if (arr[0] !== currentNum) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);