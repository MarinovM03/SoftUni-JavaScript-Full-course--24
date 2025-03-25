function toggle() {
    const hiddenTextEl = document.querySelector('#extra');
    const buttonEl = document.querySelector('.button');

    const initialDisplay = hiddenTextEl.style.display;

    if (initialDisplay === 'block') {
        hiddenTextEl.style.display = 'none';
        buttonEl.textContent = 'More';

    } else {
        hiddenTextEl.style.display = 'block';
        buttonEl.textContent = 'Less';
    }
}