function printAndSum(start,end) {
    let sum = 0;
    let allNumbers = ``;

    for (let curNum = start; curNum <= end; curNum++) {
        sum += curNum;
        allNumbers += curNum + ` `;
    }

    console.log(allNumbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10);