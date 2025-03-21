function subtract() {
    const [firstNumEl, secondNumEl] = document.querySelectorAll('#wrapper input[type="text"]');
    const resultEl = document.querySelector('#result');

    resultEl.textContent = Number(firstNumEl.value) - Number(secondNumEl.value);
}