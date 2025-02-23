function evenPositionElement(input) {
    const filteredArr = input.filter((num, i) => i % 2 === 0);
    console.log(filteredArr.join(' '));   
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);