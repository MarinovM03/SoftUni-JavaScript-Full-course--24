function minerTask(arr) {
    const resourceQuantities = {};

    for (let i = 0; i < arr.length; i += 2) {
        const resource = arr[i];
        const quantity = Number(arr[i + 1]);

        if (resourceQuantities.hasOwnProperty(resource)) {
            resourceQuantities[resource] += quantity;
        } else {
            resourceQuantities[resource] = quantity;
        }
    }

    const resourceEntries = Object.entries(resourceQuantities);
    for (const [resource, quantity] of resourceEntries) {
        console.log(`${resource} -> ${quantity}`);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);
// minerTask(['gold','155','silver','10','copper','17','gold','15']);