function cookingByNumbers(num, op1, op2, op3, op4, op5) {
let number = Number(num);

    const operationObj = {
        'chop': (a) => {
            const result = a / 2;
            console.log(result);
            return result;
        },
        'dice': (a) => {
            const result = Math.sqrt(a);
            console.log(result);
            return result;
        },
        'spice': (a) => {
            const result = a + 1;
            console.log(result);
            return result;
        },
        'bake': (a) => {
            const result = a * 3;
            console.log(result);
            return result;
        },
        'fillet': (a) => {
            const result = a * 0.80;
            console.log(result);
            return result;
        },
    };

    number = operationObj[op1](number);
    number = operationObj[op2](number);
    number = operationObj[op3](number);
    number = operationObj[op4](number);
    number = operationObj[op5](number);
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');