// function create(words) {
//     const contentEl = document.querySelector('#content');

//     words.forEach((word) => {
//         const divEl = document.createElement('div');
//         const pEl = document.createElement('p');

//         divEl.appendChild(pEl);

//         pEl.textContent = word;
//         pEl.style.display = 'none';

//         divEl.addEventListener('click', (event) => {
//             event.target.querySelector('p').style.display = 'block';
//         });

//         contentEl.appendChild(divEl);
//     });
// }

// SOLUTION USING CLOSURE ↓
// function create(words) {
//     const contentEl = document.querySelector('#content');

//     for (let word of words) {
//         const div = createSection(word);
//         contentEl.append(div);
//     }

//     function createSection(content) {
//         const divEl = document.createElement('div');
//         const paraEl = document.createElement('p');
//         paraEl.textContent = content;
//         paraEl.style.display = 'none';
//         div.append(paraEl);

//         div.addEventListener('click', reveal);

//         return div;

//         function reveal() {
//             paraEl.style.display = '';
//         }
//     }
// }

// -----------------------------------

// function create(words) {
//     const contentElement = document.getElementById('content');

//     createAndAppendDivElement(contentElement);

//     function createAndAppendDivElement(parent) {
//         for (let i = 0; i < 4; i++) {  
//             const divElement = document.createElement('div');
//             const pElement = document.createElement('p');

//             pElement.textContent = words[i];
//             pElement.style.display = 'none';
//             divElement.append(pElement);

//             divElement.addEventListener('click', (event) => {
//                 event.currentTarget.querySelector('p').style.display = 'block';
//             });
//             parent.append(divElement);
//         }
//     }
// }


function create(words) {
    const divEl = document.getElementById('content');

    for (const word of words) {
        const newDivEl = document.createElement('div');
        const newPEl = document.createElement('p');
        newPEl.textContent = word;
        newPEl.style.display = 'none';
        newDivEl.appendChild(newPEl);

        newDivEl.addEventListener('click', function(e) {
            newPEl.style.display = 'block';
        });

        divEl.appendChild(newDivEl);
    }
}