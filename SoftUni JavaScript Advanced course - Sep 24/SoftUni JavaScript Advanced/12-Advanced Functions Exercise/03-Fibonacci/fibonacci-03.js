function getFibonator() {
    let a = 0;
    let b = 1;

    return function () {
        const next = a;
        a = b;
        b = next + b;
        return next;
    };
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());