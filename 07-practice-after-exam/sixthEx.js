function zadachaShest(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workersHours = Number(input[3]);

    let nylonSum = (nylon + 2) * 1.50;
    let paintSum = (paint * 1.1) * 14.50;
    let thinnerSum = thinner * 5.00;
    let bag = 0.40;

    let totalSum = nylonSum + paintSum + thinnerSum + bag;
    let workersPay = totalSum * 0.3;
    let workersFinalPay = workersPay * workersHours; 
    
    let totalFinalPay = totalSum + workersFinalPay;

    console.log(totalFinalPay);
}

zadachaShest(["10","11","4","8"]);