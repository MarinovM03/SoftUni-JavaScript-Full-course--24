function replaceRepeatingChars(str) {
    let nonRepeatedChars = '';
    let currLastChar = '';

    for (const char of str) {
        if (char !== currLastChar) {
            nonRepeatedChars += char;
            currLastChar = char;
        }
    }

    console.log(nonRepeatedChars);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
// replaceRepeatingChars('qqqwerqwecccwd');