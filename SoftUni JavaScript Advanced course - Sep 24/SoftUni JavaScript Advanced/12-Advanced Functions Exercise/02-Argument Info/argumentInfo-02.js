function argumentInfo(...args) {
    let result = {};

    for (const el of args) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }

        result[type] += 1;
    }

    Object.entries(result)
        .sort(([k1, v1], [k2, v2]) => v2 - v1)
        .forEach(([k, v]) => {
            console.log(`${k} = ${v}`);
    });
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo('dog', 'Roscoe', 27, function () { console.log('Bye world!'); });