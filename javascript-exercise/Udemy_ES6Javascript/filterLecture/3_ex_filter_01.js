//filtering array

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter((number) => {
  return number > 50;
});

console.log(filteredNumbers);
