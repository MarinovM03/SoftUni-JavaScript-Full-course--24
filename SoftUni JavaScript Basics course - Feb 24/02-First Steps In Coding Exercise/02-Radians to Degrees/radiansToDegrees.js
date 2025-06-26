function radiansToDegrees(input) {
    
    let radians = Number(input);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees);

}

radiansToDegrees(3.1416);