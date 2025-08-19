function solve(input) {
    const result = {};

    for (const entry of input) {
        const [town, population] = entry.split(' <-> ');

        if (!result.hasOwnProperty(town)) {
            result[town] = 0;
        }
        
        result[town] += Number(population);
    }
    
    for (const name in result) {
        console.log(`${name} : ${result[name]}`);
        
    }
}

solve(['Istanbul <-> 1000000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);
