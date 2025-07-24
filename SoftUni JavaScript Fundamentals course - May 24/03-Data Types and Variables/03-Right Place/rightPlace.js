function integerAndFloat(word, symbol, match) {
    let result = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i] === `_`) {
            result += symbol;
        } else {
            result += word[i];
        }
    }

    if (result === match) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}

integerAndFloat('Str_ng', 'I', 'Strong');   //Not match!
integerAndFloat('Str_ng', 'i', 'String');   // Match!