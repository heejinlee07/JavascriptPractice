var savedFiled = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

// ES5
function es5FileSummary(file) {
  return `The fils ${file.name}.${file.extension} is of size ${file.size}`;
}

console.log(es5FileSummary(savedFiled));

// ES6
function es6FileSummary({ name, extension, size }, { color }) {
  return `${color} The fils ${name}.${extension} is of size ${size}`;
}

console.log(es6FileSummary(savedFiled, { color: "red" }));
