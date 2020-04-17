//Advanced Use of Arrow Functions

//ES6 이전의 함수 표현식
const add = function (a, b) {
  return a + b;
};

add(1, 2);

//ES6 화살표함수
/**
 * NOTE:
 * Basically the rule is if you have a javascript expression
 * you can remove the return keyword remove
 * the curly braces and boom you're good to go.
 * REMIND:
 * 1. if the function has a single expression in its body, the curly braces and 'return' keyword can be removed.
 * 2. if the function has a single argument, the parentheses around thd argument list can be removed.
 */

const add = (a, b) => {
  return a + b;
};

const add = (a, b) => a + b;

//When to Use Arrow Functions
const team = {
  members: ["jane", "bill"],
  teamName: "super squad",
  teamSummary: function () {
    var self = this;
    return this.members.map(function (member) {
      return `${member}is on team ${self.teamName}`;
    });
  },
};

//using arrow function
const team = {
  members: ["jane", "bill"],
  teamName: "super squad",
  teamSummary: function () {
    //this === team
    return this.members.map((member) => {
      return `${member}is on team ${this.teamName}`;
    });
  },
};

team.teamSummary();

/**
 * NOTE:
 * lexical this: the word lexical means the placement of this term
 * depends on how it's interpreted or how it's evaluated.
 * So depending on where we are placing the word this it will change when we're using a fat arrow function
 * when we use a fat arrow function and make reference to this inside of it.
 * 'This' keyword is automatically set equal to this in the surrounding context which in this case is
 * equal to team.
 */
