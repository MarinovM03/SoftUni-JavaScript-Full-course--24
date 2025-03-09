function calc() {
    const firstNumEl = document.getElementById('num1');
    const secondNumEl = document.getElementById('num2');
    const output = document.getElementById('sum');

    output.value = Number(firstNumEl.value) + Number(secondNumEl.value);
}