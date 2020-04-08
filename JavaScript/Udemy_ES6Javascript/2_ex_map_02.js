//calculating values with map
//new array should contain the distance/time value

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

var speeds = trips.map((trip) => {
  return trip.distance / trip.time;
});

console.log(speeds);
