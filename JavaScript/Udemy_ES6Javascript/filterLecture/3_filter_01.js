// 웹사이트에서 특정 상품리스트를 sort하거나 filter하고 싶다면? filter
// 각각의 객체는 단일 상품의 이름과 타입을 설명한다.

var products = [
  { name: "cucumber", type: "vegatable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegatable" },
  { name: "orange", type: "fruit" },
];

//classic한 방법인 for loop로 product를 filter

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filteredProducts.push(products[i]);
  }
}
console.log(filteredProducts);

/*
빈 배열을 만들어서 거기에 값을 넣는 것은 mutating을 피하기 위함.
만약 배열이 mutating되면 원래 있던 data가 삭제되는 것 같은 현상발생.
그런 것을 막고, 필터를 하고자 원하는 값만 찾아서 새 배열에 집어 넣음.
원본 배열은 mutating되지 않고 그대로 보존됨.
*/

//for문은 복잡하니, filter를 이용하면 간결하면서도 원본배열을
//손상시키지 않는 새로운 배열을 만들 수 있다.

var filteredProducts2 = products.filter(function (product) {
  /*
  if조건문은 굳이 써주지 않아도 된다.
if (product.type ==='vegatable') {
  return true;
}
*/
  return product.type === "vegatable";
  //truthy인지 falsy인지 평가하여 즉시 return
  //REMIND:return은 절대 생략하지 않음. 생략시 빈 객체가 반환됨.
});

console.log(filteredProducts2);
