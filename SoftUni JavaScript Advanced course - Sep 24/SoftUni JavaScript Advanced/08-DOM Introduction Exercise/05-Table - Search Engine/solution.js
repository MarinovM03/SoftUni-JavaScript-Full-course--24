// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);

//    function onClick() {
      
//       const studentListRows = document.querySelectorAll('table tbody tr');
//       const searchFieldEl = document.querySelector('#searchField');
//       const searchStr = searchFieldEl.value.toLowerCase();

//       const studentsList = Array.from(studentListRows).map((el) => el.innerText.toLowerCase());

//       if (searchStr === '') return;

//       const result = [];

//       studentListRows.forEach(el => {
//          el.classList.remove('select');
//       });

//       for (let i = 0; i < studentsList.length; i++) {
//          if (studentsList[i].indexOf(searchStr) >= 0) {
//             result.push(i);
//          }
//       }

//       result.forEach((pos, index) => {
//          studentListRows[pos].classList.add('select');
//       });

//       searchFieldEl.value = '';
//    }
// }


// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);

//    function onClick() {
//       const inputRef = document.getElementById('searchField');
//       const tableRowsRef = document.querySelectorAll('tbody tr');

//       const searchText = inputRef.value;

//       inputRef.value = '';

//       for (const row of tableRowsRef) {
//          const tableData = row.querySelectorAll('td');
         
//          for (const data of tableData) {
//             if (data.textContent.includes(searchText)) {
//                row.classList.add('select');
//                break;
//             } else {
//                row.classList.remove('select');
//             }
//          }
//       }
//    }
// }


function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchInputEl = document.getElementById('searchField');
      const tableRowsEl = document.querySelectorAll('tbody tr');

      const searchBar = searchInputEl.value;

      for (const row of tableRowsEl) {
         const tableDataEl = row.querySelectorAll('td');
         
         for (const data of tableDataEl) {
            if (data.textContent.includes(searchBar)) {
               row.classList.add('select');
               break;
            } else {
               row.classList.remove('select');
            }
         }
      }
      searchInputEl.value = '';
   }
}