import {createDbFlights} from './indexDB/db.js';
import {flights} from './data.js';
import {slide} from './components/slider/slide.js';
import {title} from './components/Ttitle/title.js';
import {loginUser} from './components/user.js';
import {showInfoFlights} from './components/toConsole.js';
import { renderNew, renderFilter, filterOptions,
    /*loginAdmin*/
} from './components/table/actions.js'
import {onRemove, onBuy, onNew} from './components/table/crud.js';
import {renderTable} from './components/table';


createDbFlights();
// Get info name from user
/*loginUser();*/

// Show flights info
showInfoFlights(flights);


// Get isAdmin or not

function isAdminNew(){
    const frontPage = document.getElementById('app');
    const init = document.createElement('div');
    init.classList.add('login-background');
    frontPage.appendChild(init);
    Swal.fire({
        title: 'Eres administrador del sistema?',
        showDenyButton: true,
        confirmButtonText: `Si`,
        denyButtonText: `No`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Bienvenido al sistema!', '', 'success');
            renderBanckendPage();
        } else if (result.isDenied) {
            Swal.fire('Bienvenido a Skylab Airlines', '', 'info');
            renderFrontPage();
        }
    })
}

/*const isAdmin = confirm('is the admin of system?');*/

/*if (isAdmin) {
    alert('Welcome your admin panel flights, now, you can create and delete all flights.');
    document.getElementById('app').appendChild(renderNew(() => {
            onNew(flights);
            document.getElementById('table-flights').remove();
            renderTable(flights, isAdmin, {onRemove, onBuy, onNew});
        })
    )
    renderTable(flights, isAdmin, {onRemove, onBuy, onNew});
} else {

    renderFrontPage()
}*/
function renderBanckendPage(){
    const isAdmin = true;
    document.querySelector('.login-background').remove();
    document.getElementById('app').appendChild(renderNew(() => {
            onNew(flights);
            document.querySelector('.wrapper-ticket').remove();
            renderTable(flights, isAdmin, {onRemove, onBuy, onNew});
        })
    )
    renderTable(flights, isAdmin, {onRemove, onBuy, onNew});
}
function renderFrontPage(){
    const isAdmin = false;
    document.querySelector('.login-background').remove();
    const frontPage = document.getElementById('app');
    /*const admin = loginAdmin();*/
    const wrapperSlide = slide();
    const Title = title('Skylab Airlines');
    const filterFlight = renderFilter(flights);
    /*console.log(filterFlight)*/
  /*  frontPage.appendChild(admin);*/
    frontPage.appendChild(wrapperSlide);
    frontPage.appendChild(Title);
    frontPage.appendChild(filterFlight);
    const selectFilter = document.querySelector('#selectBy');
    selectFilter.addEventListener('change', function(){
      filterOptions(flights);
    })
    renderTable(flights, isAdmin , {onRemove, onBuy, onNew});
}


/*function renderFrontPage(){
    const admin = loginAdmin();
    const frontPage = document.getElementById('app');
    const wrapperSlide = slide();
    const Title = title('Skylab Airlines');
    const filterFlight = renderFilter(flights);
    frontPage.appendChild(admin);
    frontPage.appendChild(wrapperSlide);
    frontPage.appendChild(Title);
    frontPage.appendChild(filterFlight);
    const selectFilter = document.querySelector('#selectBy');
    selectFilter.addEventListener('change', function(){
        filterOptions(flights);
    })
    renderTable(flights, isAdmin , {onRemove, onBuy, onNew});
}*/

window.onload = isAdminNew;


