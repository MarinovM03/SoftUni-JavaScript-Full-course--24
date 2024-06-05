// function sumOfNumbers(input) {
//     let n = input[0].toString();  // - '.toString()' converts everything into string. We can also use the constructor of string -> 'let n = `String()`input[0];'
//     let numAsString = n + "";
//     console.log(numAsString[3]);
// }

// sumOfNumbers(["1234"]);



function sumOfNumbers(input) {
    let num = String(input[0]);
    let sum = 0;

    for(let i = 0; i < num.length; i++) {
        let currentNumber = Number(num[i]);
        sum += currentNumber;
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);