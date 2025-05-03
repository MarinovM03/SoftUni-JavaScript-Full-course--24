function encodeAndDecodeMessages() {
    const textAreasEl = document.querySelectorAll('#main textarea');
    const buttonsEl = document.querySelectorAll('#main button');

    const encodeBtn = buttonsEl[0];
    const decodeBtn = buttonsEl[1];
    const encodeTextArea = textAreasEl[0];
    const decodeTextArea = textAreasEl[1];

    encodeBtn.addEventListener('click', encodeAndSend);
    decodeBtn.addEventListener('click', decodeAndRead);

    function encodeAndSend(e) {
        const text = encodeTextArea.value;
        let encodeMsg = '';

        for (const el of text) {
            const charInt = el.charCodeAt(0) + 1;
            const newChar = String.fromCharCode(charInt);
            encodeMsg += newChar;
        }

        decodeTextArea.value = encodeMsg;
        encodeTextArea.value = '';
    }

    function decodeAndRead(e) {
        const text = decodeTextArea.value;
        let decodeMsg = '';

        for (const el of text) {
            const charInt = el.charCodeAt(0) - 1;
            const newChar = String.fromCharCode(charInt);
            decodeMsg += newChar;
        }

        decodeTextArea.value = decodeMsg;
    }
}