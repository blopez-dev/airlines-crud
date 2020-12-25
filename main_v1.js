import {flights} from './data.js';
import {loginUser} from './components/user.js';
import {showInfoFlights, showFlightsScale, lastFlights, averageCost} from './components/toConsole.js';
import {renderNew} from './components/table/actions.js'
import {onRemove, onEdit, onBuy, onNew} from './components/table/crud.js';
import {renderTable} from './components/table';

// Get info name from user
loginUser();

// Show flights info
showInfoFlights(flights);

// Show flights with scale
showFlightsScale(flights);

// show the destination of the last flights
lastFlights(flights);

// show average cost of flights
averageCost(flights);


// Get isAdmin or not
const isAdmin = confirm('is the admin of system?');
if (isAdmin) {
    alert('Welcome your admin panel flights, now, you can cte and modify all flights.');
    document.getElementById('app').appendChild(renderNew(() => {onNew(flights)}))
    // Render table with a data flights
    renderTable(flights, isAdmin, { onRemove, onEdit, onBuy, onNew });
}




