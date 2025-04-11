function deleteByEmail() {
    const rowsEl = document.querySelectorAll('#customers tbody tr');
    const inputEl = document.querySelector('input[name="email"]'); 
    const resultEl = document.querySelector('#result');

    const pattern = inputEl.value.toLocaleLowerCase();
    let isFound = false;

    if (!pattern) return;

    for (const row of rowsEl) {
        const emailContent = row.children[1];
        if (emailContent.textContent.toLocaleLowerCase().includes(pattern)) {
            row.remove();
            isFound = true;
        }
    }

    if (isFound) {
        resultEl.textContent = 'Deleted.';
    } else {
        resultEl.textContent = 'Not found.'; 
    }

    inputEl.value = '';
    inputEl.focus();
}


// function deleteByEmail() {
//     const inputElement = document.querySelector('input[name="email"]');
//     const tableRowsElement = document.querySelectorAll('#customers tbody tr');
//     const resultElement = document.getElementById('result');

//     // Find matching row
//     const resultRow = Array.from(tableRowsElement)
//         .find(tr => tr.getElementsByTagName('td')[1].textContent === inputElement.value);

//     // Remove row and append result
//     if (resultRow) {
//         resultRow.remove();
//         resultElement.textContent = "Deleted";
//     } else {
//         resultElement.textContent = "Not found.";
//     }

//     // Clean up input
//     inputElement.value = '';

//     // Focus on input
//     inputElement.focus();
// }