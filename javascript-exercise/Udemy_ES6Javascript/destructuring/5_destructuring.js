//  Mixing restructuring of arrays and objects

const Google = {
  locations: ["Mountain View", "New York", "London"],
};
// locations의 전체 배열이 반환됨.
// const { locations } = Google;
// console.log(locations);

// 첫 번째 요소만 가져오고 싶다면
const {
  locations: [location],
} = Google;
console.log(location);
