//finding admin users

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

var admin = users.find((user) => {
  return user.admin === true;
});

console.log(admin);
