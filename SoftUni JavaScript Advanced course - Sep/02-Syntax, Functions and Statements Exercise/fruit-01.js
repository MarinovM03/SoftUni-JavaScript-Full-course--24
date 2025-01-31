function fruit(fruit, weightInGrams, priceKg) {
    const weightInKg = Number(weightInGrams / 1000);
    const costPerKg = weightInKg * Number(priceKg);

    console.log(`I need $${costPerKg.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);