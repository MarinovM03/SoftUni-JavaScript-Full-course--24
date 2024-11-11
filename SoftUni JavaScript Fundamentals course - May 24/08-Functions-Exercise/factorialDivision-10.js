function factorialDivision(num1, num2) {
    
    function calculateFactorial(num) {
        let facturial = 1;

        for (let factor = 2; factor <= num; factor++) {
            facturial *= factor;
        }

        return facturial;
    }

    const factorial1 = calculateFactorial(num1);
    const factorial2 = calculateFactorial(num2);
    
    const result = factorial1 / factorial2;
    console.log(result.toFixed(2));
}

factorialDivision(5,2);
factorialDivision(6,2);