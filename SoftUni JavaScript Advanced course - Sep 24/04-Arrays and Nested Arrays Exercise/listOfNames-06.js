function listOfNames(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    
    arr.forEach((e, i) => {
        console.log(`${i + 1}.${e}`);
    })
}

listOfNames(["John", "Bob", "Christina", "Ema"]);