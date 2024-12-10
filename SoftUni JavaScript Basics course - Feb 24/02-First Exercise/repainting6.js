function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonSum = (nylon + 2) * 1.50;
    let paintSum = paint * 14.50 * 1.1;
    let thinnerSum = thinner * 5.00;
    let bag = 0.40;

    let totalMaterialsSum = nylonSum + paintSum + thinnerSum + bag;
    let workersHourlySum = totalMaterialsSum * 0.30 * hours;
    let finalSum = totalMaterialsSum + workersHourlySum;


    console.log(finalSum);

}

repainting(["10","11","4","8"]);