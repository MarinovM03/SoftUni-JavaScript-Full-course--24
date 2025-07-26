function sortAnArrayBy2Criteria(arr) {
    const sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join(`\n`));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log(`----------------`);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);