function focused() {
    const container = document.querySelector('div');

    container.addEventListener('focusin', function(event) {
        event.target.parentElement.classList.add('focused');
    });

    container.addEventListener('focusout', function(event) {
        event.target.parentElement.classList.remove('focused');
    });
}