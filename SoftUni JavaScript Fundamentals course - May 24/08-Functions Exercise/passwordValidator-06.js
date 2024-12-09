function passwordValidator(password) {

    function checkIfValidLength(pass) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkIfAlphanumeric(pass) {
        const pattern = /^[A-Za-z0-9]+$/;
        
        if (pattern.test(pass)) {
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }

    function checkIfMin2Digits(pass) {
        const pattern = /[0-9]{2,}/;

        // itterate over password
        // for every symbol, check if its numeric
        if (pattern.test(pass)) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

    const isValidLength = checkIfValidLength(password);
    const isAlphanumeric = checkIfAlphanumeric(password);
    const hasMin2Digits = checkIfMin2Digits(password);

    if (isValidLength && isAlphanumeric && hasMin2Digits) {
        console.log("Password is valid");
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');