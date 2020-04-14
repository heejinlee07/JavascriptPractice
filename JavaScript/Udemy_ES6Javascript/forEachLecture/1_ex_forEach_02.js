//forEach를 활용해서 각 이미지를 계산하고,
//areas라는 새로운 배열에 담는다.

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];
var areas = [];

images.forEach((image) => {
  const calculate = image.height * image.width;
  areas.push(calculate);
});

console.log(areas);
