window.addEventListener('load', function () {

  let flights = [
    {id: 00, destination: 'Bilbao', departure: 'Barcelona', price: 1600, scale: false},

    {id: 01, destination: 'New York', departure: 'Barcelona', price: 700, scale: false},

    {id: 02, destination: 'Los Angeles', departure: 'Madrid', price: 1100, scale: true},

    {id: 03, destination: 'Paris', departure: 'Barcelona', price: 210, scale: false},

    {id: 04, destination: 'Roma', departure: 'Barcelona', price: 150, scale: false},

    {id: 05, destination: 'London', departure: 'Madrid', price: 200, scale: false},

    {id: 06, destination: 'Madrid', departure: 'Barcelona', price: 90, scale: false},

    {id: 07, destination: 'Tokyo', departure: 'Madrid', price: 1500, scale: true},

    {id: 08, destination: 'Shangai', departure: 'Barcelona', price: 800, scale: true},

    {id: 09, destination: 'Sydney', departure: 'Barcelona', price: 150, scale: true},

    {id: 10, destination: 'Tel-Aviv', departure: 'Madrid', price: 150, scale: false}
  ];
  let insertData = document.getElementById('data-info');
  let insertDiagram = document.getElementById('data-info');
  let insertDataScale = document.getElementById('data-scale');
  let insertDataLastFlights = document.getElementById('data-last-flights');
  let average_cost = document.getElementById('average_cost');
  average_cost.classList.add('average');
  let insertDataUser = document.getElementById('user');
  let flightsArray = [];
  let headers = [];

  // Get info to user
  function loginUser() {
    let userName = prompt("What is your username?");

    if (userName && insertDataUser) {
      insertDataUser.innerHTML = `<p>Hi ${userName}, welcome to Skylab Airlines</p>`;
      console.log(`Hi ${userName}, welcome to Skylab Airlines`);
    } else {
      alert('Is necessary a username');
      return null;
    }
  }

  loginUser();

  // Extract value for table header.

  function getNameHeaders() {
    flights.forEach((item) => {
      flightsArray.push(item);
    })
    for (let i = flightsArray.length - 1; i < flightsArray.length; i++) {
      for (let key in flightsArray[i]) {
        headers.push(key);
      }
    }
    return headers;
  }

  getNameHeaders();

  // Show all info
  function showInfoFlights() {
    flightsArray.forEach((item, index) => {
      console.log(`Flight with origin: ${item.departure} and destination ${item.destination}, has a price: ${item.price} € and ${item.scale === false ? `not make stops` : `make stops`}`);
    });
    tableComponent('All our flights', headers, flightsArray, insertData);
  }

  showInfoFlights();

  // Show flights with scale
  function showFlightsScale() {
    let scales = flightsArray.filter(item => {
      return item.scale === true
    });
    scales.forEach(item => {
      console.log(`Flight with origin: ${item.departure} and destination ${item.destination}, and make stops`);
    });
    tableComponent('The stopover flights', headers, scales, insertDataScale);
  }

  showFlightsScale();

  // show the destination of the last flights
  function lastFlights() {
    let lastFlights = flightsArray.filter(item => item.id >= flightsArray.length - 5);
    lastFlights.forEach(item => console.log(`The last flights have as destination: ${item.destination}`))
    tableComponent('The last flights', headers, lastFlights, insertDataLastFlights);
  }

  lastFlights();

  // show average cost of flights
  function averageCost() {
    let averageCost = [];
    const avg = values => (values.reduce((total, current) => total + current, 0) / values.length).toFixed(3);
    flightsArray.forEach(item => averageCost.push(item.price));
    average_cost.innerHTML = `The average cost of all flights are: <strong>${avg(averageCost)}€</strong>`;
    console.log(`The average cost of all flights are: ${avg(averageCost)} €`);
  }

  averageCost();

  // Component Table
  function tableComponent(tableName, head, content, front) {
    let table = document.createElement('table');
    table.classList.add('table', 'table-dark', 'table-striped')
    let tableBody = document.createElement('tbody');
    let tableRow = document.createElement('tr');


    table.appendChild(tableBody);
    head.forEach(item => {
      let tableHeader = document.createElement('th');
      let tableHeaderContent = document.createTextNode(item);
      tableHeader.appendChild(tableHeaderContent);
      tableRow.appendChild(tableHeader);
    });
    tableBody.appendChild(tableRow);
    tableBody.appendChild(tableRow);


    content.forEach((item) => {
      let tableRow = `<td>${item.id}</td><td>${item.destination}</td><td>${item.departure}</td><td>${item.price}</td><td>
      ${item.scale === false ? `and not make stops` : `make stops`} </td>`;
      tableBody.innerHTML += tableRow;
    });
    front.innerHTML = `<strong>${tableName}</strong></br>`;
    front.appendChild(table);
    return true;
  }


});
