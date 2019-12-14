// Создать HTML-страницу с большой таблицей. 
// При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. 
// Учтите, что числовые значения должны сортироваться как числа, а не как строки.

table.onclick = function(e) {
    let th = e.target;
    if (e.target.tagName != 'TH') return;

    sortTable(th.cellIndex, th.dataset.type);
};

function sortTable(column, type) {
    let tbody = table.querySelector('tbody');
    let rowsArray = Array.from(tbody.rows);
    let compare;

    // console.log(tbody);
    // console.log(tbody.rows);
    // console.log(rowsArray);

    switch (type) {
      case 'number':
        compare = function(row1, row2) {
          return row1.cells[column].innerHTML - row2.cells[column].innerHTML;
        };
        break;
      case 'string':
        compare = function(row1, row2) {
          return row1.cells[column].innerHTML > row2.cells[column].innerHTML ? 1 : -1;
        };
        break;
    }

    rowsArray.sort(compare);
    tbody.append(...rowsArray);
}
