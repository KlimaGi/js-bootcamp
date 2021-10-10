const account = {
  name: "Gi",
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    return this.expenses.push({ description, amount });
  },
  addIncome: function (description, amount) {
    return this.income.push({ description, amount });
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;
    this.expenses.forEach((expense) => {
      totalExpenses = totalExpenses + expense.amount;
    });
    this.income.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });
    let balance = totalIncome - totalExpenses;
    return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses`;
  },
};

account.addExpense("bills", 60);
account.addExpense("lessons", 10);
account.addIncome("Job", 1000);
account.addIncome("Job", 100);
console.log(account.getAccountSummary());
