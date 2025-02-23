function diagonalSums(input) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < input.length; i++) {
        mainDiagonalSum += input[i][i];
        secondaryDiagonalSum += input[input.length - 1 - i][i];
    }
    
    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

diagonalSums([[20, 40],[10, 60]]);
diagonalSums([[3, 5, 17],[-1, 7, 14],[1, -8, 89]]);