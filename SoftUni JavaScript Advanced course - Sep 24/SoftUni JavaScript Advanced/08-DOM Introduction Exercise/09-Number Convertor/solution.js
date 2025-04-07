function solve() {
    const selectElConvertTo = document.querySelector('#selectMenuTo');

    const optionSelectElConvertToHex = document.createElement('option');
    optionSelectElConvertToHex.setAttribute('value', 'hexadecimal');
    optionSelectElConvertToHex.textContent = 'Hexadecimal';

    const optionSelectElConvertToBinary = document.createElement('option');
    optionSelectElConvertToBinary.setAttribute('value', 'binary');
    optionSelectElConvertToBinary.textContent = 'Binary';

    selectElConvertTo.appendChild(optionSelectElConvertToHex);
    selectElConvertTo.appendChild(optionSelectElConvertToBinary);

    const resultEl = document.querySelector('#result');

    document.querySelector('#container button').addEventListener('click', (e) => {
        const input = Number(document.querySelector('#input').value);

        if (selectElConvertTo.value === 'binary') {
            resultEl.value = input.toString(2);
        } else if (selectElConvertTo.value === 'hexadecimal') {
            resultEl.value = input.toString(16).toUpperCase();
        }
    })
}