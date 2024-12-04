function convertToObject(jsonString) {
    const obj = JSON.parse(jsonString);

    const entries = Object.entries(obj);

    for (const entry of entries) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
// convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');