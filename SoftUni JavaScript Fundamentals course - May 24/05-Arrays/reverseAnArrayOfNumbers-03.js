function reverseArrayOfNumbers(n, arr) {

    const result = [];

    for (let i = 0; i < n; i++) {
        result[i] = arr[i];
    }

    // reverse the array
    const reversed = [];
    for (let i = result.length - 1; i >= 0; i--) {
        reversed[reversed.length] = result[i];
    }
    
    console.log(reversed.join(" "));
}

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
// reverseArrayOfNumbers(4, [-1, 20, 99, 5]);
// reverseArrayOfNumbers(2, [66, 43, 75, 89, 47]);