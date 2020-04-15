//refactoring the code below to use a fat arrow function.

const fibonacci = function (n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

//using arrow function
const fibonacci = (n) => (n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
