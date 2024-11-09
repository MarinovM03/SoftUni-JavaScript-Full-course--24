function palindromeIntegers(arr) {

    function checkIfPalindrome(num) {
        const numString = num + ``;
        let numStringReversed = ``;

        for (let i = numString.length - 1; i >= 0; i--) {
            const curChar = numString[i];
            numStringReversed += curChar;
        }

        if (numStringReversed === numString) {
            return true;
        } else {
            return false;
        }
    }
    
    for (const num of arr) {
        const isPalindrome = checkIfPalindrome(num);
        console.log(isPalindrome);
    }
}

palindromeIntegers([123,323,421,121]);
// palindromeIntegers([32,2,232,1010]);