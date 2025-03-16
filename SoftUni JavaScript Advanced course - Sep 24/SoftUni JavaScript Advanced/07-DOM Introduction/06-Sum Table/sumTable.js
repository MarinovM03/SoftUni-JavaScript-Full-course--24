function sumTable() {
    const priceTdElements = document.querySelectorAll('table tr td:nth-of-type(2)');
    const outputElement = document.getElementById('sum');

    let sum = 0;

    for (const tdElement of priceTdElements) {
        let price = Number(tdElement.textContent);

        sum += price;
    }

    outputElement.textContent = sum;
}