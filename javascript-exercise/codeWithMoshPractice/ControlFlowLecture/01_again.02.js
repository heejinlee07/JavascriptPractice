function isLandscape(width, height) {
  return width > height ? true : false;
}

const image = isLandscape(200, 200);
console.log(image);
