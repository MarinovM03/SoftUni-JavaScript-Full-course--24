function extractText() {
    const liElements = document.querySelectorAll('li');
    const resultTextArea = document.getElementById('result');
    
    const items = Array.from(liElements).map(liElements => liElements.textContent);
        
    resultTextArea.value = items.join('\n');
}