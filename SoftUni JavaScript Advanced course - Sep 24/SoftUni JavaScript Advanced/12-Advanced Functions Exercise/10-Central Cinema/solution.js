function solve() {
    const [movieNameRef, hallRef, ticketPriceRef] = document.querySelectorAll('#container input[type="text"]');
    const onScreenBtnRef = document.querySelector('#container button');
    const moviesOnScreenUlRef = document.querySelector('#movies ul');
    const archiveUlRef = document.querySelector('#archive ul');
    const clearArchiveBtn = document.querySelector('#archive button');

    onScreenBtnRef.addEventListener('click', onScreenButton);

    clearArchiveBtn.addEventListener('click', clearArchive);

    function onScreenButton(event) {
        event.preventDefault();

        const movieName = movieNameRef.value;
        const hall = hallRef.value;
        const ticketPrice = ticketPriceRef.value;

        if (movieName === '' || hall === '' || ticketPrice === '' || isNaN(ticketPrice) || Number(ticketPrice) <= 0) {
            return;
        }   

        const liEl = createOnScreenLiElement(movieName, hall, Number(ticketPrice));
        moviesOnScreenUlRef.append(liEl);

        movieNameRef.value = '';
        hallRef.value = '';   
        ticketPriceRef.value = '';
    }

    function createOnScreenLiElement(movieName, hall, ticketPrice) {
        const liEl = document.createElement('li');
        const spanEl = document.createElement('span');
        spanEl.textContent = movieName;

        const strongEl = document.createElement('strong');
        strongEl.textContent = `Hall: ${hall}`;

        const divEl = document.createElement('div');

        const strongEl2 = document.createElement('strong');
        strongEl2.textContent = ticketPrice.toFixed(2);

        const inputEl = document.createElement('input');
        inputEl.placeholder = 'Tickets Sold';

        const buttonEl = document.createElement('button');
        buttonEl.textContent = 'Archive';

        divEl.append(strongEl2);
        divEl.append(inputEl);
        divEl.append(buttonEl);
        liEl.append(spanEl);
        liEl.append(strongEl);
        liEl.append(divEl);

        buttonEl.addEventListener('click', function archiveBtn(event) {
            const ticketsSold = Number(inputEl.value);

            if (ticketsSold > 0) {
                const totalRevenue = ticketsSold * ticketPrice;
                const archivedLi = createArchiveLiElement(movieName, totalRevenue);
                archiveUlRef.append(archivedLi);
                liEl.remove();

                inputEl.value = '';
            }
        });

        return liEl;
    }

    function createArchiveLiElement(movieName, totalRevenue) {
        const liEl = document.createElement('li');
        const spanEl = document.createElement('span');
        spanEl.textContent = movieName;

        const strongEl = document.createElement('strong');
        strongEl.textContent = `Total amount: $${totalRevenue.toFixed(2)}`;

        const buttonEl = document.createElement('button');
        buttonEl.textContent = 'Delete';

        buttonEl.addEventListener('click', function deleteBtn() {
            liEl.remove();
        });

        liEl.append(spanEl);
        liEl.append(strongEl);
        liEl.append(buttonEl);

        return liEl;
    }

    function clearArchive() {
        archiveUlRef.innerHTML = '';
    }
}