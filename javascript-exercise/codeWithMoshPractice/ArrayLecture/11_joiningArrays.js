const numbers = [1, 2, 3];

//optionally passed string
const joined = numbers.join(",");
console.log(joined);

//this method return array
const message = "This is my first meassage";
const parts = message.split(" ");
console.log(parts);

const combined = parts.join("-");
console.log(combined);

//particularly useful when building a URL slug.
//part of converting the title of the something to a URL slug.
//because cannot have a white space in URL slug.
