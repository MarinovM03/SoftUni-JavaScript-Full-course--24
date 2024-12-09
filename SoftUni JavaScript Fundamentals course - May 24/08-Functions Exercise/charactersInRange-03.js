function charactersInRange(char1, char2) {
    const asciiCode1 = char1.charCodeAt();
    const asciiCode2 = char2.charCodeAt();
    let middleChars = [];

    const startCode = Math.min(asciiCode1, asciiCode2);
    const endCode = Math.max(asciiCode1, asciiCode2);

    for (let curCode = startCode + 1; curCode < endCode; curCode++) {
        const curChar = String.fromCharCode(curCode);
        middleChars.push(curChar);
    } 

    console.log(middleChars.join(` `));
}

charactersInRange('a','d');
// charactersInRange('#',':');
// charactersInRange('C','#');