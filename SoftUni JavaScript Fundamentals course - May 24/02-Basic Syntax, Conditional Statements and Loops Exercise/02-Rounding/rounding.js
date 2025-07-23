function solve(num,precision) {

    if (precision > 15) {
        precision = 15;
    }

    let roundedNum = num.toFixed(precision);
    let trimmedNum = parseFloat(roundedNum);

    console.log(trimmedNum);
}

solve(3.1415926535897932384626433832795,2);
// solve(10.5,3);