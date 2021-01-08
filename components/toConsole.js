
export function showInfoFlights(flights) {
  flights.forEach((item) => {
    console.log(`Flight with origin: ${item.departure} and destination ${item.destination}, has a price: ${item.price} € and ${item.scale === false ? `not make stops` : `make stops`}`);
  });

  const scalesTrue = flights.filter(item => item.scale);
  scalesTrue.forEach(item => {
    console.log(`Flight with origin: ${item.departure} and destination ${item.destination}, and make stops`);
  });

  const lastFlights = flights.filter(item => item.id >= flights.length - 5);
  lastFlights.forEach(item => console.log(`The last flights have as destination: ${item.destination}`))

  const averageCost = [];
  const avg = values => (values.reduce((total, current) => total + current, 0) / values.length).toFixed(3);
  flights.forEach(item => averageCost.push(item.price));
  console.log(`The average cost of all flights are: ${avg(averageCost)} €`);

}
