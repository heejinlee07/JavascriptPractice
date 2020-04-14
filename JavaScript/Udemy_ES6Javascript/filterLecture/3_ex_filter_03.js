//reject : if a function returns 'true',
//ths item should *not*be included in the new array.

var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
  return array.filter((number) => !iteratorFunction(number));
}

var lessThanFifteen = reject(numbers, function (number) {
  return number > 15;
});

console.log(lessThanFifteen);

//10보다 큰 수를 포함한 배열을 반환
function graterThanTen(array) {
  return array.filter((element) => {
    return element > 10;
  });
}

//20보다 큰 수를 포함한 배열을 반환
function graterThanTwenty(array) {
  return array.filter((element) => {
    return element > 20;
  });
}

//30보다 큰 수를 포함한 배열을 반환
function graterThanThirty(array) {
  return array.filter((element) => {
    return element > 30;
  });
}

//100보다 큰 수를 포함한 배열을 반환
function graterThanHundred(array) {
  return array.filter((element) => {
    return element > 100;
  });
}

function filterNumber(array, iteratorFunction) {
  return array.filter(iteratorFunction);
}

function getElementOverHundred(element) {
  return element > 100;
}

filterNumber([50, 100, 150], (element) => {
  return element > 100;
});
filterNumber([10, 69, 90], (element) => {
  return element > 30;
});

filterNumber([50, 100, 150], getElementOverHundred);

var numbers = [10, 20, 30];
