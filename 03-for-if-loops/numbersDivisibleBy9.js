function numbersDivisibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let sum = 0;
    let numberToPrint = "";

    for(let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i; 
            numberToPrint += i + "\n";     
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(numberToPrint);
}

numbersDivisibleBy9(["100", "200"]);