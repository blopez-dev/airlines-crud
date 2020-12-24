
export function showInfoFlights(data) {
  data.forEach((item, index) => {
    console.log(`Flight with origin: ${item.departure} and destination ${item.destination}, has a price: ${item.price} € and ${item.scale === false ? `not make stops` : `make stops`}`);
  });

}
export function showFlightsScale(data) {
  let scales = data.filter(item => item.scale);
  scales.forEach(item => {
    console.log(`Flight with origin: ${item.departure} and destination ${item.destination}, and make stops`);
  });
}

export function lastFlights(data) {
  let lastFlights = data.filter(item => item.id >= data.length - 5);
  lastFlights.forEach(item => console.log(`The last flights have as destination: ${item.destination}`))

}
export function averageCost(data) {
  let averageCost = [];
  const avg = values => (values.reduce((total, current) => total + current, 0) / values.length).toFixed(3);
  data.forEach(item => averageCost.push(item.price));
  console.log(`The average cost of all flights are: ${avg(averageCost)} €`);
}