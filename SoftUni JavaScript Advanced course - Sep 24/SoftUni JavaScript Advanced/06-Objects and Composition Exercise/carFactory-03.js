function carFactory(order) {
    let result = {
        model: order.model,
        engine: null,
        carriage: null,
        wheels: null
    };

    const engineEnum = {
        SmallEngine: { power: 90, volume: 1800 },
        NormalEngine: { power: 120, volume: 2400 },
        MonsterEngine: { power: 200, volume: 3500 }
    };

    const carriageFactory = (type, color) => {
        const result = {
            type,
            color
        }

        return result;
    }

    if (order.power <= 90) {
        result.engine = engineEnum.SmallEngine;
    } else if (order.power <= 120) {
        result.engine = engineEnum.NormalEngine;
    } else {
        result.engine = engineEnum.MonsterEngine;
    }

    result.carriage = carriageFactory(order.carriage, order.color);

    let wheelSize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
    result.wheels = new Array(4).fill(wheelSize);

    return result;
}

console.log(carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }));
console.log(carFactory({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 }));