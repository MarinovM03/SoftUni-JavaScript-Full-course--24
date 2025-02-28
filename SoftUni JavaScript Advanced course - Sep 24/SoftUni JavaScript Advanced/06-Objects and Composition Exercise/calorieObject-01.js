function calorieObject(input) {
    const result = {};

    for (let i = 0; i < input.length; i += 2) {
        const key = input[i];
        const value = Number(input[i + 1]);
        
        result[key] = value;
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);