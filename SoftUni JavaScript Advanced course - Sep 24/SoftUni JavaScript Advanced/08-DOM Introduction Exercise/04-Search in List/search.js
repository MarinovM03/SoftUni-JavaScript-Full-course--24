function search() {
    // get input
    const townsListEl = document.querySelector('#towns');
    const searchFieldEl = document.querySelector('#searchText');

    // get output
    const resultEl = document.querySelector('#result');

    // validate input
    const searchStr = searchFieldEl.value.toLowerCase();

    if (searchStr === '') {
        return;
    }

    const townsArr = Array.from(townsListEl.children);
    const towns = townsArr.map((el) => el.textContent.toLowerCase());

    // clear input for next search
    townsArr.forEach((el) => {
        el.style.fontWeight = 'normal';
        el.style.textDecoration = 'none';
    });

    // search
    let result = [];
    
    for (let i = 0; i < towns.length; i++) {
        if (towns[i].indexOf(searchStr) >= 0) {
            result.push(i);
        }
    }
    
    // change element styling
    result.forEach((position, index) => {
        townsListEl.children[position].style.fontWeight = 'bold';
        townsListEl.children[position].style.textDecoration = 'underline';
    });

    // print number of results
    resultEl.textContent = `${result.length} matches found`;
}