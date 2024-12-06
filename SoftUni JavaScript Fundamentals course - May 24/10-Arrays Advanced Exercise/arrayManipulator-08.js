function arrayManipulator(arrNums, arrCommands) {
    
    for (const command of arrCommands) {
        let tokens = command.split(` `);
        const action = tokens.shift();
        
        if (action === 'add') {
            const index = Number(tokens.shift());
            const element = Number(tokens.shift());

            arrNums.splice(index, 0, element);

        } else if (action === `addMany`) {
            let index = Number(tokens.shift());

            for (const element of tokens) {
                arrNums.splice(index, 0, element);
                index++;
            }

        } else if (action === `contains`) {
            const element = Number(tokens.shift());

            const elementIndex = arrNums.indexOf(element);
            console.log(elementIndex);
    
        } else if (action === `remove`) {
            const index = Number(tokens.shift());
            arrNums.splice(index, 1);

        } else if (action === `shift`) {
            const rotations = Number(tokens.shift());

            for (let rotation = 1; rotation <= rotations; rotation++) {
                const firstEl = arrNums.shift();
                arrNums.push(firstEl);
            }

        } else if (action === `sumPairs`) {
            let resultArr = [];

            for (let i = 0; i < arrNums.length; i += 2) {
                const curNum = arrNums[i];
                const nextNum = arrNums[i + 1];

                if (nextNum === undefined) {
                    resultArr.push(curNum);
                } else {
                    resultArr.push(curNum + nextNum);
                }
            }
            arrNums = resultArr;
        } else {
            console.log(`[ ${arrNums.join(`, `)} ]`);
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
console.log(`-----------------`);
arrayManipulator([1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);