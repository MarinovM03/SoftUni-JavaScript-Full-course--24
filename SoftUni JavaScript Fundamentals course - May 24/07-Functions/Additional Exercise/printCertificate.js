function formatGrade(grade) {
    let result = "";

    if (grade < 3) {
        result = "Fail (2)";
    } else if (grade >= 3 && grade < 3.5) {
        result = `Poor (${grade.toFixed(2)})`;
    } else if (grade >= 3.5 && grade < 4.5) {
        result = `Good (${grade.toFixed(2)})`;
    } else if (grade >= 4.5 && grade < 5.5) {
        result = `Very good (${grade.toFixed(2)})`;
    } else {
        result = `Excellent (${grade.toFixed(2)})`;
    } 

    return result;
    
}

function printCert(grade, namesArray) {

    let gradeMsg = formatGrade(grade);
    console.log(`~~~- {@} -~~~`);
    console.log(`~- Certificate -~`);
    console.log(`~~~- ~---~ -~~~`);
    console.log(`${namesArray[0]} ${namesArray[1]}`);
    console.log(gradeMsg);
}

printCert(5.25, ["Peter", "Ivanov"]);