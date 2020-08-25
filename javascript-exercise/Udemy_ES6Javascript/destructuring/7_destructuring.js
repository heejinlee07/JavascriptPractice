const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

const result = points.map(([x, y]) => {
  // const x = pair[0];
  // const y = pair[1];
  // const [x, y] = pair;
  return { x, y };
});

console.log(result);

const profile = {
  title: "Engineer",
  department: "Engineering",
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === "Engineer" && department === "Engineering";
}
