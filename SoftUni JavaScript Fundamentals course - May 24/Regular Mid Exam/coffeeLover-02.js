function coffeeLover(input) {
    let coffeeList = input[0].split(' ');
    let commandCount = Number(input[1]);
    let commands = input.slice(2);

    
    for (let i = 0; i < commandCount; i++) {
        let commandParts = commands[i].split(' ');
        let command = commandParts[0];

        if (command === 'Include') {
            let coffee = commandParts[1];
            coffeeList.push(coffee);

        } else if (command === 'Remove') {
            let position = commandParts[1];
            let numberOfCoffees = Number(commandParts[2]);

            if (position === 'first') {
                if (numberOfCoffees <= coffeeList.length) {
                    coffeeList.splice(0, numberOfCoffees);
                }
            } else if (position === 'last') {
                if (numberOfCoffees <= coffeeList.length) {
                    coffeeList.splice(coffeeList.length - numberOfCoffees, numberOfCoffees);
                }
            }

        } else if (command === 'Prefer') {
            let index1 = Number(commandParts[1]);
            let index2 = Number(commandParts[2]);

            if (index1 >= 0 && index1 < coffeeList.length && index2 >= 0 && index2 < coffeeList.length) {
                // Swap the two coffees
                let temp = coffeeList[index1];
                coffeeList[index1] = coffeeList[index2];
                coffeeList[index2] = temp;
            }

        } else if (command === 'Reverse') {
            coffeeList.reverse();
        }
    }

    console.log("Coffees:");
    console.log(coffeeList.join(' '));
}

coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee","5","Include TurkishCoffee","Remove first 2","Remove last 1","Prefer 3 1","Reverse"]);
// coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee","5","Include OrdinaryCoffee","Remove first 1","Prefer 0 1","Prefer 3 1","Reverse"]);
// coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica","3","Include OrdinaryCoffee","Remove first 1","Prefer 4 1"]);

