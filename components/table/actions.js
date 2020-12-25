

export const createElement = (text, onClick) => {
  const element = document.createElement('button');
  element.addEventListener('click', onClick);
  element.innerText = text;
  return element;
}

const renderEdit = onClick => createElement('Edit', onClick);
const renderRemove = onClick => createElement('Remove', onClick);
const renderBuy = onClick => createElement('Buy', onClick);
export const renderNew = onClick => createElement('NewFlight', onClick);


export const renderActions = (tableBody, isAdmin, {onRemove, onEdit, onBuy}, item) => {
  const td = document.createElement('td');
  if (isAdmin) {
    td.appendChild(renderEdit(() => onEdit(item)));
    td.appendChild(renderRemove(() => onRemove(item)));
  } else {
    td.appendChild(renderBuy(() => onBuy(item)));
  }

  tableBody.appendChild(td);
}
