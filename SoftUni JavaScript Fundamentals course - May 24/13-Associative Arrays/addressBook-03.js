function addressBook(input) {
    const result = {};

    for (const row of input) {
        const [name, address] = row.split(":");
        result[name] = address;
    }

    // Sort the keys to alphabetical order
    const entries = Object.entries(result);
    const sorted = entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    });

    // Print the result
    for (const [name, address] of entries) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);