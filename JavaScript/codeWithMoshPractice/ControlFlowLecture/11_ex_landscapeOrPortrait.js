/*
function isLandscape(width, height) {
  if (width > height) return true;
  else if (width < height) return false;
  else return "same size";
}
*/

/*
function isLandscape(width, height) {
  return width > height ? true : false;
}
*/

function isLandscape(width, height) {
  return width > height ? true : width < height ? false : "same size";
}

console.log(isLandscape(300, 100));
console.log(isLandscape(300, 300));
console.log(isLandscape(100, 300));
