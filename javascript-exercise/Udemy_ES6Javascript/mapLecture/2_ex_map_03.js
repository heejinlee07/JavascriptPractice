//really hard - implementing pluck

//pluck should accept an array and a string representing a property name
//and return an array containing that property from each obj.

var paints = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];

var result = paints.map((paint) => {
  return paint["color"];
});

console.log(result);

function pluck(array, property) {
  return array.map((element) => {
    return element[property];
  });
}
console.log(pluck(paints, "color"));

function pluck2(array, property) {
  const output = [];
  for (let element of array) {
    output.push(element[property]);
  }
  return output;
}

console.log(pluck2(paints, "color"));
