function matchPhoneNum(text) {
    const pattern = /[+]359([ -])2\1(\d{3})\1(\d{4})\b/g;
    const validNames = [];
    let validName = null;

    while ((validName = pattern.exec(text)) !== null) {
        validNames.push(validName[0]);
    }

    console.log(validNames.join(', '));
}

matchPhoneNum(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);