function ifElse(input) {

    let grade = Number(input[0]);
    let finish = "finish"

    if (grade >= 5.50) {

        console.log(`Excellent ${finish}!`);
        console.log("Well Done");
    } else if (grade <= 5.50) {

        console.log(`Not excellent ${finish}!`);
    } else {

    }

}

ifElse([5]);
ifElse([6]);
ifElse([3.50]);