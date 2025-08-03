function furniture(input) {
    const pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
    let totalSum = 0;
    let command = input.shift();
    const items = [];

    while (command !== 'Purchase') {
        const match = command.match(pattern);

        if (match) {
            const {name, price, quantity} = match.groups;
            items.push(name);
            const furniturePrice = Number(price) * Number(quantity);
            totalSum += furniturePrice;
        }
        command = input.shift();
    }

    console.log('Bought furniture:');
    items.forEach(item => console.log(item));

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3','>>TV<<300!5','>Invalid<<!5','Purchase']);
furniture(['>>Laptop<<312.2323!3','>>TV<<300.21314!5','>Invalid<<!5','>>TV<<300.21314!20','>>Invalid<!5','>>TV<<30.21314!5','>>Invalid<<!!5','Purchase']);