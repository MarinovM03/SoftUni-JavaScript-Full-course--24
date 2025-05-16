function createFormatter(separator, symbol, symbolFirst) {
    return currencyFormatter.bind(null, separator, symbol, symbolFirst);
}

const bgFormatter = createFormatter(',', 'lv.', false);

console.log(bgFormatter(20));
console.log(bgFormatter(200));

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}