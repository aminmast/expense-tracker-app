import { useState } from "react";
import Overview from "../Overview/Overview";
import Transactions from "../Transactions/Transactions";

const ExpeseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValue) => {
    setTransactions([...transactions, { ...formValue, id: Date.now() }]);
    formValue.type === "expense"
      ? setExpense(expense + Number(formValue.amount))
      : setIncome(income + Number(formValue.amount));
  };

  return (
    <>
      <Overview
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      {transactions.length > 0 && <Transactions transactions={transactions} />}
    </>
  );
};

export default ExpeseApp;
