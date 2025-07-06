function reverseInPlace(arr) {

    const midIndex = Math.floor(arr.length / 2);

    for (let i = 0; i < midIndex; i++) {
        const j = arr.length - 1 - i;
        
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    console.log(arr.join(" "));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
// reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
// reverseInPlace(['33', '123', '0', 'dd']);
