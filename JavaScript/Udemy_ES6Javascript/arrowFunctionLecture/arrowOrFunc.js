const profile = {
  name: "Alex",
  getName: function () {
    return this.name;
  },
};

console.log(profile);

//using fat arrow function
const profileUsingFatArrow = {
  name: "Alex",
  getName: () => profileUsingFatArrow.name,
};

console.log(profileUsingFatArrow);
