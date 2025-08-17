function biggerHalf(input) {
    input.sort((a, b) => a - b);
    const secondHalf = input.splice(Math.floor(input.length / 2));

    return secondHalf;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));