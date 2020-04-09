//find the account with a balance of 12

var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find((account) => {
  return (account.balance = 12);
});

console.log(account);
