function sumNumbers(input) {

    let index = 0;
    let target = Number(input[index]);
    index++;
    let sum = 0;

    while(sum < target) {
        let num = Number(input[index]);
        index++;
        sum += num;
    }

    console.log(sum);
}

sumNumbers(["100","10","20","30","40"]);