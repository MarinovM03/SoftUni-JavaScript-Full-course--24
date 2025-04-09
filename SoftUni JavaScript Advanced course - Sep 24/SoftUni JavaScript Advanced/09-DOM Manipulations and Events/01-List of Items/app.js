// function addItem() {
//     // get references to input and output elements
//     const inputEl = document.getElementById('newItemText');
//     const listEl = document.getElementById('items');

//     // if input is empty do nothing
//     const text = inputEl.value;

//     if (!text) return;

//     // create new li element and append it to the output list
//     const newItem = document.createElement('li');
//     newItem.textContent = text;
//     listEl.appendChild(newItem);

//     // clear input
//     inputEl.value = '';

//     // focus on input
//     inputEl.focus();
// }


function addItem() {
    const listEl = document.getElementById('items')
    const inputEl = document.getElementById('newItemText');

    // if input is empty do nothing
    if (!inputEl.value) return;

    // create new li element and append it to the list
    const newLiEl = document.createElement('li');
    newLiEl.textContent = inputEl.value;
    listEl.appendChild(newLiEl);

    // clear input
    inputEl.value = '';

    // focus on input
    inputEl.focus();
}