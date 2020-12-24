import {flights} from './data.js';
import {loginUser} from './components/user.js';
import {showInfoFlights, showFlightsScale, lastFlights, averageCost} from './components/toConsole.js';
import {onRemove, onEdit, onBuy} from './components/table/crud.js';
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
if (isAdmin) alert('Welcome your admin panel flights, now, you can cte and modify all flights.');



renderTable(flights, isAdmin, { onRemove, onEdit, onBuy });

