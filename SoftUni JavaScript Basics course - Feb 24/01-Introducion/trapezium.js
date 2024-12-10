function trapezium(input) {

    let b1 = (input[0]);
    let b2 = (input[1]);
    let h = (input[2]);
    let result1 = b1 + b2;
    let result2 = result1 * h;
    let result = result2 / 2;

    console.log(result);

}

trapezium([8, 13, 7]);