function smallestOfThreeNumbers(num1, num2, num3) {
    
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num1 > num2 && num2 < num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }

}

smallestOfThreeNumbers(2,5,3);
smallestOfThreeNumbers(600,342,123);
smallestOfThreeNumbers(25,21,4);
smallestOfThreeNumbers(2,2,2);