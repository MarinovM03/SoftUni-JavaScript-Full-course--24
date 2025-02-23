function magicMatrices(matrix) {
    const targetSum = matrix[0].reduce((sum, number) => sum + number, 0);
    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            rowSum += matrix[i][j];
        }
        if (rowSum !== targetSum) {
            return false;
        }
    }
    for (let j = 0; j < matrix[0].length; j++) {
        let colSum = 0;
        for (let i = 0; i < matrix.length; i++) {
            colSum += matrix[i][j];
        }
        if (colSum !== targetSum) {
            return false;
        }
    }
    return true;
}

console.log(magicMatrices ([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrices ([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));