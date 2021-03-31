import {renderActions} from './actions.js';

export function renderTable(flights, isAdmin, actions) {
  const front = document.getElementById('app');
 /* const headers = Object.keys(flights[0]);

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
  table.appendChild(tableHeader);*/
  // print table content in a columns
  const ticketsFlights = document.createElement('div');
  ticketsFlights.classList.add('wrapper-ticket');
  flights.forEach((item) => {
    const ticketFlight = document.createElement('div');
    ticketFlight.classList.add('wrapper-ticket-flight');
    ticketFlight.setAttribute('id', item.id);
    ticketFlight.innerHTML = `
        
          <span class="destination" data-destination="${item.destination}">${item.destination}</span>
          <span class="flight-route">
           <span class="pointer-start"></span>
            <span class="pointer-end"></span>
            </span>
          <span class="departure" data-departure ="${item.departure}"> ${item.departure}</span>
          <span class="scale" data-sclae="${item.scale }">${item.scale === false ? `sin escalas` : `hace alguna escala`}</span>
          <span class="price" data-price="${item.price}">${item.price} €</span> `;
         renderActions(ticketFlight, isAdmin, actions, item);
     
    ticketsFlights.appendChild(ticketFlight);
  });
  /*table.appendChild(tableBody)
  // print table content in a columns*/
  front.appendChild(ticketsFlights);
  return ticketsFlights;
}
