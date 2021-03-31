import {flights} from "../../data.js";
import {renderTable} from "./index.js";

export const onRemove = (item) => {
    flights.splice(item.id, 1);
    document.getElementById(`${item.id}`).remove();
}

export const onBuy = (item) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: `Vuelo con destino  ${item.departure}, añadido a un precio de ${item.price}€`
    })


}

export const onNew = (flights) => {

    Swal.fire({
        title: 'Quieres crear un nuevo vuelo',
        showDenyButton: true,
        confirmButtonText: `Si`,

    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Bienvenido al sistema!', '', 'success');
            createNewFlight();

        }
    })

    function createNewFlight(){
        const isAdmin = true;

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
        flights.length <= 15 ? flights.push(newFlightData) : alert('more than 15 flights are forbiden');
        renderTable(flights, isAdmin, {onRemove, onBuy, onNew});
    }
   /* if (askByNewFlight) {


    }*/
}
