function numbersEndingIn7() {

    for (let curNum = 7; curNum <= 997; curNum++) {

         if (curNum % 10 === 7) {
            console.log(curNum);
         }
    }

}

numbersEndingIn7();