function revealWords(wordsStr, text) {
    const wordsToFill = wordsStr.split(', ');
    const textWords = text.split(' ');

    const templates = textWords.filter(word => word.includes('*'));

    for (const template of templates) {
        const rightWord = wordsToFill.find(word => word.length === template.length);
        text = text.replace(template, rightWord);
    }

    console.log(text);
}

revealWords('great',
'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');