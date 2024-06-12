function grandpaStavri(input) {
    let days = Number(input[0]);
    let totalRakia = 0;
    let totalDegrees = 0;

    for (let i = 1; i <= days * 2; i += 2) {
        let rakia = Number(input[i]);
        let degrees = Number(input[i + 1]);

        totalRakia += rakia;
        totalDegrees += rakia * degrees;
    }

    let avgDegrees = totalDegrees / totalRakia;

    console.log(`Liter: ${totalRakia.toFixed(2)}`);
    console.log(`Degrees: ${avgDegrees.toFixed(2)}`);

    if (avgDegrees < 38) {
        console.log(`Not good, you should baking!`);
    } else if (avgDegrees >= 38 && avgDegrees <= 42) {
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`);
    }
}

grandpaStavri(["3", "100", "45", "50", "55", "150", "36"]);
