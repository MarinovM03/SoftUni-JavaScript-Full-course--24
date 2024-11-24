function mirrorWords(input) {
    const pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;

    let match = pattern.exec(input);
    let pairsCount = 0;
    const result = [];

    while (match) {
        pairsCount++;

        const firstWord = match[2];
        const secondWord = match[3];
        const reversedSecondWord = secondWord.split('').reverse().join('');

        if (firstWord === reversedSecondWord) {
            console.log();
            console.log();
            console.log();
            result.push(`${firstWord} <=> ${secondWord}`)
        }

        match = pattern.exec(input);
    }

    if (pairsCount === 0 ) {
        console.log('No word pairs found!');
    } else {
        console.log(`${pairsCount} word pairs found!`);
    }

    if (result.length === 0) {
        console.log('No mirror words!')
    } else {
        console.log('The mirror words are:')
        console.log(result.join(', ')); 
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);