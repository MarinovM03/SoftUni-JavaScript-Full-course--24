function storage(arr) {
    let map = new Map();

    for (const string of arr) {
        const tokens = string.split(` `);
        const product = tokens[0];
        const quantity = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let currQuantity = map.get(product);
            const newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for (const kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
// storage(['apple 50',
// 'apple 61',
// 'coffee 115',
// 'coffee 40']);
