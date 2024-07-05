function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;

    let sumGrade = 0;
    let classes = 1;
    let badGrade = 0;

    while(classes <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            badGrade++;
            if (badGrade === 2) {
                break;
            }
            continue;
        }

        sumGrade += grade;
        classes++;
    }
    
    if (classes > 12) {
        let avgGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${classes} grade`);
    }

}

graduation(["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);