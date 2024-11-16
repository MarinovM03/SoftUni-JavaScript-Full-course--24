function sumFirstLast(arr) {
    const firstEl = Number(arr.shift());
    const lastEl = Number(arr.pop());

    const sumFirstAndLast = firstEl + lastEl;
    console.log(sumFirstAndLast);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);