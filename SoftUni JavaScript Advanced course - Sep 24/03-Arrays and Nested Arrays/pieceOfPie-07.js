function pieceOfPie(arr, start, end) {
    const startringIndex = arr.indexOf(start);
    const endingIndex = arr.indexOf(end);

    const result = arr.slice(startringIndex, endingIndex + 1);

    return result;
}

console.log(pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie'));
console.log(pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'],'Pot Pie','Smoked Fish Pie'));