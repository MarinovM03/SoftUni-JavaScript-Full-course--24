function passwordGenerator(arr) {
    const [str1, str2, replacementStr] = arr;
    let password = str1 + str2;
    let replacementIndex = 0;

    for (const char of password) {
        if (/[aeoui]/.test(char)) {
            const replacementChar = replacementStr[replacementIndex];
            password = password.replace(char, replacementChar.toUpperCase());
            replacementIndex++;

            if (replacementIndex === replacementStr.length) {
                replacementIndex = 0;
            }
        }
    }

    const reversedPassword = password.split('').reverse().join('');
    console.log(`Your generated password is ${reversedPassword}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables','orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);