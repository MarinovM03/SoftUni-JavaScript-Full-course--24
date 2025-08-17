function addAndRemoveElements(arr) {
    let number = 1;
    let result = [];

    arr.forEach(command => {
        command === 'add' ? result.push(number) : result.pop();
        number++;
    });
    result.length ? console.log(result.join('\n')) : console.log("Empty");
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);