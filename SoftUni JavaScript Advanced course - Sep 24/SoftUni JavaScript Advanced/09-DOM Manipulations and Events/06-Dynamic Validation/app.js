function validate() {
    const emailInput = document.getElementById('email');

    emailInput.addEventListener('change', (event) => {
        const email = event.currentTarget.value;

        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (pattern.test(email)) {
            event.currentTarget.classList.remove('error');
        } else {
            event.currentTarget.classList.add('error');
        }
    });
}