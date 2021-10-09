let myAccount = {
  name: "Gi",
  expenses: 0,
  income: 0,
};
let otherAccount = myAccount;
otherAccount.income = 100;

let addExpense = (account, amount) => {
  account.expenses = account.expenses + amount;
};

let addIncome = (account, income) => {
  account.income = account.income + income;
};

let resetAccount = (account) => {
  account.income = 0;
  account.expenses = 0;
};

let getAccountSummary = (account) => {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2500);
addIncome(myAccount, 550);
addExpense(myAccount, 120.5);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
