function magicPlaylist(input) {
    let startingList = input[0].split(' ');
    let commandsCount = Number(input[1]);
    let commands = input.slice(2);

    for (let i = 0; i < commandsCount; i++) {
        let commandParts = commands[i].split(' * ');
        let command = commandParts[0];

        switch (command) {
            case 'Add Song':
                let song = commandParts[1];

                if (startingList.includes(song) === false) {
                    startingList.push(song);

                    console.log(`${song} successfully added`);
                }
                break;

            case 'Delete Song':
                let numberOfSongs = Number(commandParts[1]);

                if (numberOfSongs <= startingList.length) {
                    let deletedSongs = startingList.splice(0, numberOfSongs);

                    console.log(`${deletedSongs.join(', ')} deleted`);
                }
                break;

            case 'Shuffle Songs':
                let newFirstSong = Number(commandParts[1]);
                let newSecondSong = Number(commandParts[2]);

                if (newFirstSong >= 0 && newFirstSong < startingList.length && newSecondSong >= 0 && newSecondSong < startingList.length) {
                    let temp = startingList[newFirstSong];

                    startingList[newFirstSong] = startingList[newSecondSong];  // swap songs
                    startingList[newSecondSong] = temp;

                    console.log(`${startingList[newFirstSong]} is swapped with ${startingList[newSecondSong]}`);
                }
                break;

            case 'Insert':
                let songToInsert = commandParts[1];
                let insertIndex = Number(commandParts[2]);

                if (insertIndex >= 0 && insertIndex <= startingList.length) {
                    
                    if (startingList.includes(songToInsert) === false) {
                        startingList.splice(insertIndex, 0, songToInsert);

                        console.log(`${songToInsert} successfully inserted`);
                    } else {
                        console.log(`Song is already in the playlist`);
                    }
                } else {
                    console.log(`Index out of range`);
                }
                break;

            case 'Sort':
                startingList.sort((a, b) => b.localeCompare(a));
                break;

            case `Play`:
                console.log("Songs to Play:");
                
                for (let i = 0; i < startingList.length; i++) {
                    console.log(startingList[i]);
                }
                break;
        }
    }
}

magicPlaylist([
    "BlindingLights RollingInTheDeep ShapeOfYou",
    "7",
    "Add Song * LetItBe",
    "Delete Song * 1",
    "Shuffle Songs * 1 * 2",
    "Insert * BohemianRhapsody * 0",
    "Add Song * BohemianRhapsody",
    "Sort",
    "Play"]);