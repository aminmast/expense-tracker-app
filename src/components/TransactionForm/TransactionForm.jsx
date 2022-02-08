import { useState } from "react";
import style from "./transactionForm.module.css";
import DateComponent from "../DateComponent/DateComponent";

const TransactionForm = ({ addTransaction }) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: 0,
    desc: "",
    date: "",
    time: "",
  });

  const changeHandler = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
      date: DateComponent().fullDate,
      time: DateComponent().fullTime,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValue);
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        className={style.input}
        placeholder="description"
        onChange={changeHandler}
      />
      <input
        type="number"
        name="amount"
        className={style.input}
        placeholder="amount"
        onChange={changeHandler}
      />
      <div className={style.transType}>
        <input
          type="radio"
          name="type"
          id="expenseValue"
          className="uk-radio"
          onChange={changeHandler}
          checked={formValue.type === "expense"}
          value="expense"
        />
        <label htmlFor="expenseValue" style={{ cursor: "pointer" }}>
          Expense
        </label>
        <input
          type="radio"
          name="type"
          id="incomeValue"
          className="uk-radio"
          onChange={changeHandler}
          checked={formValue.type === "income"}
          value="income"
        />
        <label htmlFor="incomeValue" style={{ cursor: "pointer" }}>
          Income
        </label>
      </div>
      <button type="submit" className="uk-button uk-button-primary">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
