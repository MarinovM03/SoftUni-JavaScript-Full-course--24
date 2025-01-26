function solve(first, second, third) {
    const totalLength = first.length + second.length + third.length;
    const averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');