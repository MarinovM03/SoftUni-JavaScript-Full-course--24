function triangleOfNumbers(rows) {

    for (let i = 1; i <= rows; i++) {

        let line = '';
        
        for (let j = 1; j <= i; j++) {
            line += i;
            if (j < i) {
                line += ' ';
            }
        }
        
        console.log(line);
    }
}

triangleOfNumbers(3);
// triangleOfNumbers(5);
// triangleOfNumbers(6);