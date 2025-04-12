// function addItem() {
//     const input = document.getElementById('newItemText');
//     const list = document.getElementById('items');

//     const text = input.value;

//     if (!text) return;

//     const newItem = document.createElement('li');
//     newItem.textContent = text;

//     const deleteBtn = document.createElement('a');
//     deleteBtn.textContent = '[Delete]';
//     deleteBtn.href = '#';
//     newItem.appendChild(deleteBtn);
//     deleteBtn.addEventListener('click', onClick);

//     function onClick(e) {
//         const btn = e.target;
//         btn.parentElement.remove();
//     }

//     list.appendChild(newItem);

//     input.value = '';
//     input.focus();
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

    // create new a element and append it to the new li element
    const newDeleteEl = document.createElement('a');
    newDeleteEl.href = '#';
    newDeleteEl.textContent = '[Delete]';
    newLiEl.appendChild(newDeleteEl);

    newDeleteEl.addEventListener('click', function(event) {
        event.target.parentElement.remove();
    });

    // Clean up and focus input
    inputEl.value = '';
    inputEl.focus();
}