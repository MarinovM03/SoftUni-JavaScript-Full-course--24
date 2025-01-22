function secretChat(input) {
    let message = input.shift();

    while (input[0] !== 'Reveal') {
        const line = input.shift();
        const tokens = line.split(':|:');
        const command = tokens[0];

        switch (command) {
            case 'ChangeAll':
                const match = tokens[1];
                const replacement = tokens[2];

                message = message.split(match).join(replacement);
            break;

            case 'Reverse':
                const substring = tokens[1];
                const firstIndex = message.indexOf(substring);

                if (firstIndex === -1) {
                    console.log('error');
                    continue;
                }

                const left = message.slice(0, firstIndex);
                const indexToContinueFrom = firstIndex + substring.length;
                const right = message.slice(indexToContinueFrom);

                const reversedSubstr = substring.split('').reverse().join('');
                message = `${left}${right}${reversedSubstr}`
            break;

            case 'InsertSpace':
                const index = Number(tokens[1]);
                const firstPart = message.slice(0, index);
                const secondPart = message.slice(index);

                message = `${firstPart} ${secondPart}`;
            break;
        }

        console.log(message);
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);
// secretChat([
//   'Hiware?uiy',
//   'ChangeAll:|:i:|:o',
//   'Reverse:|:?uoy',
//   'Reverse:|:jd',
//   'InsertSpace:|:3',
//   'InsertSpace:|:7',
//   'Reveal']);