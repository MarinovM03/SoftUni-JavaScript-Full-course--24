function solve() {
    const td = (content) => e('td', {}, content);
    const img = (src) => e('img', { src });
    const check = () => e('input', { type: 'checkbox' });

    const [inputTextEl, outputTextEl] = document.querySelectorAll('textarea');
    const [generateBtnEl, buyBtnEl] = document.querySelectorAll('button');
    const table = document.querySelector('tbody');

    generateBtnEl.addEventListener('click', parseInput);
    buyBtnEl.addEventListener('click', summary);

    let data = [];

    function parseInput() {
        const json = inputTextEl.value;
        data = JSON.parse(json);

        for (let entry of data) {
            table.appendChild(createRow(entry));
        }
    }

    function createRow(entry) {
        
        const row = document.createElement('tr');
        row.appendChild(td(img(entry.img)));
        row.appendChild(td(document.createTextNode(entry.name)));
        row.appendChild(td(document.createTextNode(entry.price)));
        row.appendChild(td(document.createTextNode(entry.decFactor)));

        const checkbox = check();

        row.appendChild(td(checkbox));
        
        entry.checked = () => checkbox.checked;

        return row;
    }

    function summary() {
        const selected = data.filter(e => e.checked());

        const result = [
            `Bought furniture: ${selected.map(e => e.name).join(', ')}`
            `Total price: ${selected.reduce((a, c) => a + Number(c.price), 0).toFixed(2)}`
            `Average decoration factor: ${selected.reduce((a, c, i, { length: t }) => a + Number(c.decFactor) / t, 0)}`
        ];

        outputTextEl.value = result.join('\n');
    }

    // function td(type, content) {
    //     const result = document.createElement('td');
    //     let child;

    //     if (type === 'text') {
    //         child = document.createElement('p');
    //         child.textContent = content;
    //     } else if (type === 'img') {
    //         child = document.createElement('img');
    //         child.src = content;
    //     } else if (type === 'check') {
    //         child = document.createElement('input')
    //         child.type = 'checkbox';
    //     }
        
    //     result.append(child);

    //     return result;
    // }

    function e(type, attr, content) {
        const result = document.createElement(type);

        Object.assign(result, attr);

        if (content) {
            result.appendChild(content);
        }

        return result;
    }
}