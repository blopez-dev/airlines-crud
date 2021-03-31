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
    defaultOption.innerText = 'Choose option';

    const firstOption = document.createElement('option');
    firstOption.setAttribute('data-value', 'expensive');
    firstOption.innerText = 'Expensive';
    const secondOption = document.createElement('option');
    secondOption.setAttribute('data-value', 'cheaper');
    secondOption.innerText = 'Cheaper';
    const thirdOption = document.createElement('option');
    thirdOption.setAttribute('data-value', 'equal');
    thirdOption.innerText = 'Equal';
    inputSelect.appendChild(defaultOption);
    inputSelect.appendChild(firstOption);
    inputSelect.appendChild(secondOption);
    inputSelect.appendChild(thirdOption);

    return inputSelect;
}

const renderRemove = onClick => createElement('Remove', onClick, 'btn-danger');
const renderBuy = onClick => createElement('Reservar', onClick, 'btn-buyFlight');
export const renderNew = onClick => createElement('NewFlight', onClick, 'btn-success');

export const renderActions = (tableBody, isAdmin, {onRemove, onBuy}, item) => {
    const td = document.createElement('div');
    if (isAdmin) {
        td.appendChild(renderRemove(() => onRemove(item)));
    } else {
        td.appendChild(renderBuy(() => onBuy(item)));
    }
    tableBody.appendChild(td);
}
