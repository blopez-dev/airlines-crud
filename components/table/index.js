import {renderActions} from './actions.js';

export function renderTable(flights, isAdmin, actions) {
  const front = document.getElementById('app');
  const headers = Object.keys(flights[0]);

  // Create table elements
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover');
  table.setAttribute('id', 'table-flights');
  const tableHeader = document.createElement('thead');
  tableHeader.classList.add('thead-dark');
  const tableBody = document.createElement('tbody');
  const tableRow = document.createElement('tr');
  //print body table

  // add headers 'delete and update'
  headers.push('Actions');
  // print headers in a table
  headers.forEach(item => {
    const tableHead = document.createElement('th');
    const tableHeaderContent = document.createTextNode(item);
    tableHead.appendChild(tableHeaderContent);
    tableRow.appendChild(tableHead);
  });
  // print table headers and body
  tableHeader.appendChild(tableRow);
  table.appendChild(tableHeader);
  // print table content in a columns
  flights.forEach((item) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
          <td data-id="${item.id}">${item.id}</td>
          <td data-destination="${item.destination}">${item.destination}</td>
          <td data-departure ="${item.departure}">${item.departure}</td>
          <td data-price="${item.price}">${item.price}</td>
          <td data-sclae="${item.scale }">${item.scale === false ? `and not make stops` : `make stops`}</td>`;
    tableRow.setAttribute('id', item.id);
    renderActions(tableRow, isAdmin, actions, item);
    tableBody.appendChild(tableRow);
  });
  table.appendChild(tableBody)
  // print table content in a columns
  front.appendChild(table);
}