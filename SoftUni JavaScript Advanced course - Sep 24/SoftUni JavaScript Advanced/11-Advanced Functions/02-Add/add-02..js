function solution(initValue) {

    function adderFunction(number) {
        return initValue + number;
    }
    return adderFunction;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));