function biggestElement(matrix) {
    let biggest = matrix[0][0];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (matrix[row][col] > biggest) {
                biggest = matrix[row][col];
            }
        }
    }

    return biggest;
}

console.log(biggestElement([
    [3, 5, 17, 12, 91, 5],
    [-1, 7, 4, 33, 6, 22],
    [1, 8, 99, 3, 10, 43]]));