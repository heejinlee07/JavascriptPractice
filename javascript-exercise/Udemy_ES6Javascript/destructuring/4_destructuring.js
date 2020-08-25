const companies = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" },
];

//  ES5로 location에 접근할 수 있다.
var locationEs5 = companies[0].location;
console.log(locationEs5);

// ES6로 접근
// to get access to the Location property inside of the first object.
// const [location] = companies;
// console.log(location);

// just the location property off that object
const [{ location }] = companies;
console.log(location);
