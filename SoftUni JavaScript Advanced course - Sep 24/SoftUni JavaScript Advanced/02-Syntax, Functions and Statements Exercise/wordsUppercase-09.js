function wordsUppercase(input) { 
    return input.split(/[^A-Za-z0-9]+/g)
        .filter(x => !!x)
        .join(', ')
        .toUpperCase();
}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));