function countStringOccurrences(text, word) {
    let count = 0;
    const wordsArr = text.split(' ');

    for (const w of wordsArr) {
        if (w === word) {
            count++;
        }
    }

    console.log(count);    
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');