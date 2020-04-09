//좀 더 복잡한 filter

var products = [
  { name: "cucumber", type: "vegatable", quantity: 0, price: 1 },
  { name: "banana", type: "fruit", quantity: 10, price: 15 },
  { name: "celery", type: "vegatable", quantity: 30, price: 9 },
  { name: "orange", type: "fruit", quantity: 3, price: 5 },
];

//type is 'vegetable', quantity is greater than 0, price is less than 10

var multipleFilter = products.filter(function (product) {
  return (
    product.type === "vegatable" && product.quantity > 0 && product.price < 10
  );
});

console.log(multipleFilter);
