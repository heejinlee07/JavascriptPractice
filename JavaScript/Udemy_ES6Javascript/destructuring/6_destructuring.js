function signup({ username, password, email, dateOfBirth, city }) {
  // create new user
}

// really long list of arguements
// signup("myname", "mypassword", "myemail@example.com", "1/1/1990", "New York");

/* 
solution1
instead of passing a list of strings.
Maybe I could instead pass an object 
that contains all of these different properties.
*/

const user = {
  username: "myname",
  password: "mypassword",
  email: "myemail@example.com",
  dateOfBirth: "1/1/1990",
  city: "New York",
};

console.log(user);
