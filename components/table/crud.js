import {flights} from "../../data.js";


export const onRemove = (item) => {
    flights.splice(item.id, 1);
    document.getElementById(`${item.id}`).remove();
}

export const onBuy = (item) => {
    console.log('Buy', item);
    alert(`Thank you for buying the flight
  whit departure: ${item.departure} 
  and destination:${item.destination}, 
  with a cost: ${item.price} 
  `);

}


export const onNew = (flights) => {
    const askByNewFlight = confirm('You want to create a new flight?')

    if (askByNewFlight) {
        const [...keys] = ['id', 'departure', 'destination', 'price', 'scale'];
        const dataFlightFromPrompt = prompt('insert the data of the new flight, separated by commas').split(',');
        const formatDataFlights = [];
        const patron = new RegExp("^[a-zA-Z\\s]+$");
        dataFlightFromPrompt.forEach(item => {
            patron.test(item) === false ? formatDataFlights.push(parseInt(item)) : formatDataFlights.push(item);
        })
        const newFlightData = Object.assign({}, ...Object.entries({...keys}).map(
            ([index, key]) => ({[key]: formatDataFlights[index]})
        ))
         console.log(newFlightData);

        flights.length <= 15 ? flights.push(newFlightData) : alert('more than 15 flights are forbiden');

    }
}

export const onSelect = () => {
    const selected = document.getElementById('selectBy').value;
    console.log('Select option:' + selected);
}
