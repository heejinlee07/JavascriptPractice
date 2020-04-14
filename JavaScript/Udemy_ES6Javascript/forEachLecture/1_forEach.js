var colors = ["red", "blue", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//forEach
colors.forEach(function (color) {
  console.log(color);
});

//using arrow function
colors.forEach((color) => console.log(color));
colors.forEach((color) => console.log("color: " + color));
