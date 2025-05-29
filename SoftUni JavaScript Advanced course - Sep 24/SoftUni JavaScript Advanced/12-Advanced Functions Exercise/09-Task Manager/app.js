function solve() {
    document.querySelector('form').addEventListener('submit', onSubmit);
    const [add, open, inProgress, complete] = Array.from(document.querySelectorAll('section'));
    const taskRef = document.getElementById('task');
    const descriptionRef = document.getElementById('description');
    const dateRef = document.getElementById('date');

    function onSubmit(event) {
        event.preventDefault();
        const task = taskRef.value;
        const description = descriptionRef.value;
        const date = dateRef.value;

        if (!task || !description || !date) {
            return;
        }

        const article = createArticle(task, description, date);
        open.children[1].append(article);

        taskRef.value = '';
        descriptionRef.value = '';
        dateRef.value = '';
    }
    
    function createArticle(task, desc, date) {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = task;

        const pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${desc}`;

        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${date}`;

        const container = document.createElement('div');
        container.classList.add('flex');

        const btn1 = createBtn('green', 'Start', start);
        const btn2 = createBtn('red', 'Delete', del);

        container.append(btn1);
        container.append(btn2);
        article.append(h3);
        article.append(pDescription);
        article.append(pDate);
        article.append(container);

        return article;
    }

    function createBtn(classes, text, handler) {
        const btn = document.createElement('button');
        btn.classList.add(classes);
        btn.textContent = text;
        btn.addEventListener('click', handler);

        return btn;
    }

    function start(event) {
        const container = event.currentTarget.parentElement;
        const article = container.parentElement;

        container.innerHTML = '';
        const delBtn = createBtn('red', 'Delete', del);
        const finishBtn = createBtn('orange', 'Finish', finish);
        container.append(delBtn);
        container.append(finishBtn);

        inProgress.children[1].append(article);
    }

    function del(event) {
        event.currentTarget.parentElement.parentElement.remove();
    }

    function finish(event) {
        const btnContainer = event.currentTarget.parentElement;
        const article = btnContainer.parentElement;
        article.removeChild(btnContainer);

        complete.children[1].append(article);
    }
}