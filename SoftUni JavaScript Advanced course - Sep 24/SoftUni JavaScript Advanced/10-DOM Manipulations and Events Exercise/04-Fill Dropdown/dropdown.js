function addItem() {
    const textInputEl = document.getElementById('newItemText');
    const valueInputEl = document.getElementById('newItemValue');
    const selectEl = document.getElementById('menu');
    const buttonEl = document.querySelector('input[type="button"]');

    const textInput = textInputEl.value;
    const valueInput = valueInputEl.value;

    const newOptionEl = document.createElement('option');
    newOptionEl.textContent = textInput;
    newOptionEl.value = valueInput;
    selectEl.appendChild(newOptionEl);

    textInputEl.value = '';
    valueInputEl.value = '';
}