function loops() {
    let i = 1;

    // condition --> starts with true, becomes false at some point and the loop stops.
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

// for (let i = 1; i <= 5; i++) {
//     console.log(i);                   -----> same as the `while` loop above
// }

loops();