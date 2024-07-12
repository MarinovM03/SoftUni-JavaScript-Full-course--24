function cake(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let pieces = 0;
    let cakeSize = length * width;

    let index = 2;
    let row = input[index];

    while(row !== `STOP`) {
        let cakeParts = Number(row);
        pieces += cakeParts;

        if (pieces > cakeSize) {
            console.log(`No more cake left! You need ${pieces - cakeSize} pieces more.`);
            break;
        }
        index++;
        row = input[index];
    }

    if (pieces <= cakeSize) {
        console.log(`${cakeSize - pieces} pieces are left.`);
    }
    
}

cake(["10","10","20","20","20","20","21"]);