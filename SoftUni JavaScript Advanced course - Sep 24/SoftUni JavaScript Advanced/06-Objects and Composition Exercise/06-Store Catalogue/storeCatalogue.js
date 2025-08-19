function storeCatalogue(data) {
    const store = {};

    for (const element of data) {
        let [key, value] = element.split(' : ');
        
        store[key] = Number(value);
    }

    const sortResult = Object.entries(store).sort((arrA, arrB) => arrA[0].localeCompare(arrB[0]));

    let currGroupChar = "";
    for (const [key, value] of sortResult) {

        if (currGroupChar !== key[0]) {
            currGroupChar = key[0];
            console.log(currGroupChar);
        }
        console.log(`  ${key}: ${value}` );
    }
}

storeCatalogue(['Appricot : 20.4','Fridge : 1500','TV : 1499','Deodorant : 10','Boiler : 300','Apple : 1.25','Anti-Bug Spray : 15','T-Shirt : 10']);
storeCatalogue(['Banana : 2','Rubics Cube : 5','Raspberry P : 4999','Rolex : 100000','Rollon : 10','Rali Car : 2000000','Pesho : 0.000001','Barrel : 10']);