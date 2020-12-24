import {renderActions} from './actions.js';

export function renderTable(flights, isAdmin, actions) {
  const front = document.getElementById('app');
  const headers = Object.keys(flights[0]);

  // Create table elements
  const table = document.createElement('table');
  table.classList.add('table', 'table-dark', 'table-striped')
  const tableBody = document.createElement('tbody');
  const tableRow = document.createElement('tr');
  //print body table
  table.appendChild(tableBody);
  // add headers 'delete and update'
  headers.push('Actions');
  // print headers in a table
  headers.forEach(item => {
    const tableHeader = document.createElement('th');
    const tableHeaderContent = document.createTextNode(item);
    tableHeader.appendChild(tableHeaderContent);
    tableRow.appendChild(tableHeader);
  });
  // print table headers and body
  tableBody.appendChild(tableRow);
  tableBody.appendChild(tableRow);
  // print table content in a columns
  flights.forEach((item) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
          <td>${item.id}</td>
          <td>${item.destination}</td>
          <td>${item.departure}</td>
          <td>${item.price}</td>
          <td>${item.scale === false ? `and not make stops` : `make stops`}</td>`;
    renderActions(tableRow, isAdmin, actions, item);
    tableBody.appendChild(tableRow);
  });
  // print table content in a columns
  front.appendChild(table);
}