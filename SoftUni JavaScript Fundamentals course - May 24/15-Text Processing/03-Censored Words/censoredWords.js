function censoredWords(text, word) {
    const censoredWord = "*".repeat(word.length);

    while (text.includes(word)) {
        text = text.replace(word, censoredWord);
    }

    console.log(text);
}

censoredWords("A small sentence with some words", "small");
// censoredWords('Find the hidden word', 'hidden');