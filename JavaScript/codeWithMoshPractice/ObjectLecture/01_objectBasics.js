//objects are collections of key value pairs.
//encapsulate highly related properties inside of object.

//multiple variables that represent the circle.
let radius = 1;
let x = 1;
let y = 1;

//put these variables inside of an object.

/*
purpose of object
1. to group related variables.
2. functions that should operate on these variables.
*/

//object-Oriented Programming(OOP)

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log("draw");
  }
};

circle.draw(); //method: a function is part of an object.
