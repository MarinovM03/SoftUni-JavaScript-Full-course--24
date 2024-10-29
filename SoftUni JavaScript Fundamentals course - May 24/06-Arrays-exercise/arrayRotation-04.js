function arrayRotation(arr, rotations) {

    for (let curRotation = 1; curRotation <= rotations; curRotation++) {
        let element = arr.shift();
        arr.push(element);
    }
    
    console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
// arrayRotation([32, 21, 61, 1], 4);
// arrayRotation([2, 4, 15, 31], 5);