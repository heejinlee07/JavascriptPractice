var cars = [
  { model: "Buick", price: "CHEAP" },
  { model: "Camaro", price: "expensive" },
];

/*
One of the most common uses of map that we're going to be looking at 
is kind of collecting properties off of an array of object.
*/

var prices = cars.map(function (car) {
  return car.price;
});

//using arrow function
var prices = cars.map((car) => car.price);

console.log(prices);

/*
This is something that you'll see happen very frequently with 
client side rendering frameworks like say angular or react 
or similar frameworks like that.
*/
