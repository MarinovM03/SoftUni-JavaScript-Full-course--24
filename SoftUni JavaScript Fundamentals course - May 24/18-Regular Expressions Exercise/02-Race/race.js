function race(input) {
    const participants = input.shift().split(', ');
    const results = {};

    participants.forEach(name => results[name] = 0);

    let command = input.shift();
    const letterPattern = /[A-Za-z]/g;
    const digitPattern = /\d/g;

    while (command !== 'end of race') {
        const letterMatch = command.match(letterPattern);
        const name = letterMatch.join('');

        const digitMatch = command.match(digitPattern);
        const distance = digitMatch.map(Number).reduce((acc, val) => acc + val);

        if (name in results) {
            results[name] += distance;
        }

        command = input.shift();
    }
    
    const sortedRacers = Object.entries(results).sort((a, b) => b[1] - a[1]);
    
    console.log(`1st place: ${sortedRacers[0][0]}`);
    console.log(`2nd place: ${sortedRacers[1][0]}`);
    console.log(`3rd place: ${sortedRacers[2][0]}`);
}

race(['George, Peter, Bill, Tom','G4e@55or%6g6!68e!!@ ','R1@!3a$y4456@','B5@i@#123ll','G@e54o$r6ge#','7P%et^#e5346r','T$o553m&6','end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne','Mi*&^%$ch123o!#$%#nne787) ','%$$B(*&&)i89ll)*&) ','R**(on%^&ald992) ','T(*^^%immy77) ','Ma10**$#g0g0g0i0e','end of race']);