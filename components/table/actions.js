import {renderTable} from "./index.js";
import {onBuy, onNew, onRemove} from "./crud.js";
import {flights} from "../../data.js";

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
    const defaultOption = document.createElement('option');
    defaultOption.setAttribute('data-value','default');
    defaultOption.innerText = 'Ordenar por';

    const firstOption = document.createElement('option');
    firstOption.setAttribute('data-value', 'expensive');
    firstOption.innerText = 'Precio más alto';
    const secondOption = document.createElement('option');
    secondOption.setAttribute('data-value', 'cheaper');
    secondOption.innerText = 'Precio más bajo';
    const thirdOption = document.createElement('option');
    thirdOption.setAttribute('data-value', 'equal');
    thirdOption.innerText = 'Idéntico';
    inputSelect.appendChild(defaultOption);
    inputSelect.appendChild(firstOption);
    inputSelect.appendChild(secondOption);
    inputSelect.appendChild(thirdOption);

    return inputSelect;
}

const renderRemove = onClick => createElement('Remove', onClick, 'btn-danger');
const renderBuy = onClick => createElement('Reservar', onClick, 'btn-buyFlight');
export const renderNew = onClick => createElement('NewFlight', onClick, 'btn-success');

export const renderActions = (ticketFlight, isAdmin, {onRemove, onBuy}, item) => {
    const td = document.createElement('div');
    if (isAdmin) {
        td.appendChild(renderRemove(() => onRemove(item)));
    } else {
        td.appendChild(renderBuy(() => onBuy(item)));
    }
    ticketFlight.appendChild(td);
}

export let renderFilter = (flights) => {
    const filter = document.createElement('div');
    filter.classList.add('filter-wrapper');
    filter.innerHTML = 'Ordenar por:'
    filter.appendChild(createInput());

    return filter;
}
export function filterOptions(flights, isAdmin, actions){
           const option = document.getElementById("selectBy").value;

           if (option === 'Precio más bajo') {
               flights.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

                document.querySelector('.wrapper-ticket').remove();
               renderTable(flights, isAdmin , {onRemove, onBuy, onNew});

           } else if (option === 'Precio más alto') {
               flights.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
               document.querySelector('.wrapper-ticket').remove();
               renderTable(flights, isAdmin , {onRemove, onBuy, onNew});
           } else if (option === 'Idéntico') {
               const flightsSame = flights.reduce((acc, item) => {
                   acc[item.price] = ++acc[item.price] || 0;
                   return acc;
               }, {});
               const equalFlight = flights.filter(item => flightsSame[item.price]);

               document.querySelector('.wrapper-ticket').remove();
               renderTable(equalFlight, isAdmin , {onRemove, onBuy, onNew});
           }

}
export function loginAdmin(){
    const login = document.createElement('button');
    login.setAttribute('value', 'login');
    login.classList.add('btn-login');
    login.innerText = 'Admin'
    login.addEventListener('click', function(){

        document.querySelector('.wrapper-ticket').remove();
        console.log('is work')
        renderTable(flights,  {onRemove, onBuy, onNew});
    })
    return login;

}



