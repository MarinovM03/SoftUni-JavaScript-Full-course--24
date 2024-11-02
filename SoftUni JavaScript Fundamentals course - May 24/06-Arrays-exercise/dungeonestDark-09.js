function dungeonestDark(arr) {
    let roomsString = arr[0];
    let rooms = roomsString.split(`|`);      // removes the symbol between the indexes.

    let health = 100;
    let coins = 0;
    let roomCount = 1; 

    for (const room of rooms) {
        let roomEls = room.split(` `);      // split the numbers from text from the stringdified array into different elements.
        let text = roomEls[0];
        let value = Number(roomEls[1]);

        if (text === `potion`) {
            let healthAdded = value;
            
            if (health + healthAdded > 100) {
                healthAdded = 100 - health;
            }

            health += healthAdded;
            console.log(`You healed for ${healthAdded} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (text === `chest`) {
            coins += value;
            console.log(`You found ${value} coins.`);
        } else {
            let monsterName = text;
            let monsterAttack = value;

            health -= monsterAttack;
            
            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${roomCount}`);
                break;
            }
        }

        roomCount++;
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);