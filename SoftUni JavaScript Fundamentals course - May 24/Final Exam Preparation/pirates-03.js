function pirates(input) {
    let citiesData = {};

    // stage 1: target cities (planning)
    let command = input.shift();

    while (command !== 'Sail') {
        const tokens = command.split('||');
        const cityName = tokens.shift();
        const cityPopulation = Number(tokens.shift());
        const cityGold = Number(tokens.shift());
        
        if (cityName in citiesData) {
            citiesData[cityName].population += cityPopulation;
            citiesData[cityName].gold += cityGold;
        } else {
            citiesData[cityName] = { population: cityPopulation, gold: cityGold };
        }

        command = input.shift();
    }

    // stage 2: attack
    command = input.shift();

    while (command !== 'End') {
        const tokens = command.split('=>');
        const action = tokens.shift();
        const cityName = tokens.shift();

        if (action === 'Plunder') {
            const peopleKilled = Number(tokens.shift());
            const goldStolen = Number(tokens.shift());

            citiesData[cityName].population -= peopleKilled;
            citiesData[cityName].gold -= goldStolen;

            console.log(`${cityName} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);

            if (citiesData[cityName].population <= 0 || citiesData[cityName].gold <= 0) {
                console.log(`${cityName} has been wiped off the map!`);
                delete citiesData[cityName];
            }
        
        } else if (action === 'Prosper') {
            const goldAcquired = Number(tokens.shift());

            if (goldAcquired < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                citiesData[cityName].gold += goldAcquired;
                console.log(`${goldAcquired} gold added to the city treasury. ${cityName} now has ${citiesData[cityName].gold} gold.`);
            }
        }

        command = input.shift();
    }

    const cityEntries = Object.entries(citiesData);

    if (cityEntries.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${cityEntries.length} wealthy settlements to go to:`);
    
        for (const [cityName, cityStats] of cityEntries) {
            console.log(`${cityName} -> Population: ${cityStats.population} citizens, Gold: ${cityStats.gold} kg`);
        }
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);
// pirates(["Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End"]);