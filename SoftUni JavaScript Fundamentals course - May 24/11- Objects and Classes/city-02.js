function city(data) {
    
    for (const key of Object.keys(data)) {
        console.log(`${key} -> ${data[key]}`);
    }
}

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"});