function numberInRange(input) {
    let num = Number(input[0]);

    if (num >= -100 && num <= 100 && num !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }

    // if (num >= -100) {
    //     if (num <= 100) {
    //         if (num !== 0) {
    //             console.log("yes");
    //         } else {
    //             console.log("no");         // Thats why we have the `&&` sign, its more clean and optimised and it works exactly the same
    //         }
    //     } else {
    //         console.log("no");
    //     }
    // } else {
    //     console.log("no");
    // }
}

numberInRange([25]);