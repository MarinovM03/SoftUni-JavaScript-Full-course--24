function pascalCaseSplitter(str) {
    const pattern = /[A-Z][a-z]*/g;
    const allMatches = str.matchAll(pattern);
    const matchWords = [];

    for (const matchObj of allMatches) {
        matchWords.push(matchObj);
    }

    console.log(matchWords.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');