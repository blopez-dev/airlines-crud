import {renderTable} from "./index.js";
import {onBuy, onNew, onRemove} from "./crud.js";

export const createElement = (text, onClick, extraClass) => {
    const element = document.createElement('button');
    element.classList.add('btn');
    element.classList.add(extraClass);
    element.addEventListener('click', onClick);
    element.innerText = text;
    return element;
}
export const createInput = () => {
    const inputSelect = document.createElement('select');
    inputSelect.setAttribute('id', 'selectBy');
    const firstOption = document.createElement('option');
    firstOption.setAttribute('data-value', 'expensive');
    firstOption.innerText = 'Expensive';
    const secondOption = document.createElement('option');
    secondOption.setAttribute('data-value', 'cheaper');
    secondOption.innerText = 'Cheaper';
    const thirdOption = document.createElement('option');
    thirdOption.setAttribute('data-value', 'equal');
    thirdOption.innerText = 'Equal';
    inputSelect.appendChild(firstOption);
    inputSelect.appendChild(secondOption);
    inputSelect.appendChild(thirdOption);

    return inputSelect;
}

const renderRemove = onClick => createElement('Remove', onClick, 'btn-danger');
const renderBuy = onClick => createElement('Buy', onClick, 'btn-success');
export const renderNew = onClick => createElement('NewFlight', onClick, 'btn-success');

export const renderActions = (tableBody, isAdmin, {onRemove, onBuy}, item) => {
    const td = document.createElement('td');
    if (isAdmin) {
        td.appendChild(renderRemove(() => onRemove(item)));
    } else {
        td.appendChild(renderBuy(() => onBuy(item)));
    }
    tableBody.appendChild(td);
}

export const renderFilter = (flights, tableBody) => {
    const front = document.getElementById('app');
    front.innerHTML = 'Filter by price:'
    front.appendChild(createInput());

    const filterOptions = () => {
        const option = document.getElementById("selectBy").value;

        if (option === 'Cheaper') {

            flights.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            document.querySelector('tbody').remove();
            flights.forEach((item) => {
                const tableRow = document.createElement('tr');
                tableRow.innerHTML = `
          <td data-id="${item.id}">${item.id}</td>
          <td data-destination="${item.destination}">${item.destination}</td>
          <td data-departure ="${item.departure}">${item.departure}</td>
          <td data-price="${item.price}">${item.price}</td>
          <td data-sclae="${item.scale }">${item.scale === false ? `and not make stops` : `make stops`}</td>`;
           tableRow.setAttribute('data-id',`${item.id}`)
           tableBody += tableRow;
            });


        } else if (option === 'Expensive') {
            const ExpensiveFlights = flights.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

        } else if (option === 'Equal') {
            const flightsSame = flights.reduce((acc, item) => {
                acc[item.price] = ++acc[item.price] || 0;
                return acc;
            }, {});

            const EqualFlights = flights.filter(item => flightsSame[item.price]);
        }

    };
    document.getElementById("selectBy").addEventListener("change", filterOptions);
}

