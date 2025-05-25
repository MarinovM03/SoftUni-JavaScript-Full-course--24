function solution() {
    const recipes = {
        apple:       { carbohydrate: 1, flavour: 2 },
        lemonade:    { carbohydrate: 10, flavour: 20 },
        burger:      { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs:        { protein: 5, fat: 1, flavour: 1 },
        turkey:      { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    const stock = {
        protein:      0,
        carbohydrate: 0,
        fat:           0,
        flavour:       0,
    };

    return function manager(input) {
        const [command, name, qtyStr] = input.split(' ');
        const quantity = Number(qtyStr);

        if (command === 'restock') {
            stock[name] += quantity;

            return 'Success';
        }

        if (command === 'prepare') {
            const recipe = recipes[name];

            for (const micro in recipe) {
                const required = recipe[micro] * quantity;

                if (stock[micro] < required) {
                    return `Error: not enough ${micro} in stock`;
                }
            }
      
            for (const micro in recipe) {
                stock[micro] -= recipe[micro] * quantity;
            }

            return 'Success';
        }

        if (command === 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }

        return 'Error: invalid command';
    };
}

let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
