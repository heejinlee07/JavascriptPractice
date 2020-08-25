//write a findWhere function that achieves this shorthand approach.
//findWhere should return the found object.

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
];

function findWhere(array, criteria) {
  return array.find((ladder) => {
    return ladder.height === criteria.height;
  });
}

console.log(findWhere(ladders, { height: 25 }));
