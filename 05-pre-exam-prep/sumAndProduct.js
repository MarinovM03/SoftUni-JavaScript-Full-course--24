function calculateDeliveryCost(input) {
    let weight = parseFloat(input[0]);
    let serviceType = input[1];
    let distance = parseInt(input[2]);
    
    let pricePerKilometer = 0;
    
    if (weight < 1) {
        pricePerKilometer = 0.03;
    } else if (weight <= 10) {
        pricePerKilometer = 0.05;
    } else if (weight <= 40) {
        pricePerKilometer = 0.10;
    } else if (weight <= 90) {
        pricePerKilometer = 0.15;
    } else if (weight <= 150) {
        pricePerKilometer = 0.20;
    }
    
    let deliveryCost = pricePerKilometer * distance;
    
    if (serviceType === "express") {
        let extraCharge = 0;
        if (weight < 1) {
            extraCharge = 0.8 * pricePerKilometer * weight;
        } else if (weight <= 10) {
            extraCharge = 0.4 * pricePerKilometer * weight;
        } else if (weight <= 40) {
            extraCharge = 0.05 * pricePerKilometer * weight;
        } else if (weight <= 90) {
            extraCharge = 0.02 * pricePerKilometer * weight;
        } else if (weight <= 150) {
            extraCharge = 0.01 * pricePerKilometer * weight;
        }
        
        deliveryCost += extraCharge;
    }
    
    console.log(`The delivery of your shipment with weight of ${weight} kg. would cost ${deliveryCost.toFixed(2)} lv.`);
}

calculateDeliveryCost(["1.5", "standard", "100"]);
