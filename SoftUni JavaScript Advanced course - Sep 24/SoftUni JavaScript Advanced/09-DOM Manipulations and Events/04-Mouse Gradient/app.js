function attachGradientEvents() {
    const gradientEl = document.getElementById('gradient');
    const outputEl = document.getElementById('result');

    gradientEl.addEventListener('mousemove', onMove);

    function onMove(e) {
        const offset = Math.floor(e.offsetX / gradientEl.clientWidth * 100) + '%';
        outputEl.textContent = offset;
    }
}

// function attachGradientEvents() {
//     const gradientEl = document.getElementById('gradient');
//     const resultEl = document.getElementById('result');

//     gradientEl.addEventListener('mousemove', (event) => {
//         const currentMousePosition = event.offsetX;
//         const elementWidth = gradientEl.clientWidth;
//         const percent = Math.floor((currentMousePosition / elementWidth) * 100);

//         resultEl.textContent = `${percent}%`;
//     });
// }