function simpleCalculator(num1, num2, operator) {

    // Helper functions (4x)
    const multiply = (x, y) => x * y;
    const sum = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const divide = (x, y) => x / y;
    
    // Printing logic
    switch (operator) {
        case `multiply`: console.log(multiply(num1, num2)); break;
        case `add`: console.log(sum(num1, num2)); break;
        case `subtract`: console.log(subtract(num1, num2)); break;
        case `divide`: console.log(divide(num1, num2)); break;
    }
}

simpleCalculator(5,5,'multiply');
simpleCalculator(40,8,'divide');
simpleCalculator(12,19,'add');
simpleCalculator(50,13,'subtract');