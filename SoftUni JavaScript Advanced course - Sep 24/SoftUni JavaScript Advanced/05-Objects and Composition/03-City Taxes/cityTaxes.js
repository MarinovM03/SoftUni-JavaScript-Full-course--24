function cityTaxes(name, population, treasury) {
    const cityInfo = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() { this.treasury += Math.floor(this.population * this.taxRate) },
        applyGrowth(percentage) { this.population += Math.floor((percentage / 100) * this.population) },
        applyRecession(percentage) { this.treasury -= Math.floor((percentage / 100) * this.treasury) }
    };

    return cityInfo;
}

const result = cityTaxes('Tortuga', 7000, 15000);
console.log(result);

result.collectTaxes();
console.log(result);

result.applyGrowth(5);
console.log(result);

result.applyRecession(7);
console.log(result);