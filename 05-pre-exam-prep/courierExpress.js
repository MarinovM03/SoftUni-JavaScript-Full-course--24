function courierExpress(input) {

    let weight = Number(input[0]);
    let type = input[1];
    let distance = Number(input[2]);

    let costPerKm = 0;
    let finalSum = 0;
    let transport = 0;
    let kg = 0;

    switch(type) {
        case "standard":
            if (weight < 1) {
                costPerKm = 0.03; 
            } else if (weight <= 10) {
                costPerKm = 0.05;
            } else if (weight <= 40) {
                costPerKm = 0.10;
            } else if (weight <= 90) {
                costPerKm = 0.15;
            } else {
                costPerKm = 0.20;
            }
            break;
        
        case "express":
            if (weight < 1) {
                transport = distance * 0.03;
                costPerKm = 0.03 * 0.80;
                kg = weight * costPerKm;
                finalSum = distance * kg;
                distance = transport + finalSum;
            } else if (weight <= 10) {
                transport = distance * 0.05;
                costPerKm = 0.05 * 0.40;
                kg = weight * costPerKm;
                finalSum = distance * kg;
                distance = transport + finalSum;
            } else if (weight <= 40) {
                transport = distance * 0.10;
                costPerKm = 0.10 * 0.05;
                kg = weight * costPerKm;
                finalSum = distance * kg;
                distance = transport + finalSum;
            } else if (weight <= 90) {
                transport = distance * 0.15;
                costPerKm = 0.15 * 0.02;
                kg = weight * costPerKm;
                finalSum = distance * kg;
                distance = transport + finalSum;
            } else {
                transport = distance * 0.20;
                costPerKm = 0.20 * 0.01;
                kg = weight * costPerKm;
                finalSum = distance * kg;
                distance = transport + finalSum;
            }
            break;
    }   

    let totalCost = (distance * costPerKm).toFixed(2);

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalCost} lv.`);
    
}

courierExpress(["87","express","130"]);

