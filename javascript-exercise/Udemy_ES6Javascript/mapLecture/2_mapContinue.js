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

/**
 * NOTE:
 * This is something that you'll see happen very frequently with
 * client side rendering frameworks like say angular or react
 * or similar frameworks like that.
 */

/**
 * NOTE:
 * a number of web apps primary goal is just render a list of data
 * like a instagram, facebook...
 * in this case map method is useful.
 * amount of data from our back end server which would be maybe
 * like an array of objects where each object represents a single post.
 */
