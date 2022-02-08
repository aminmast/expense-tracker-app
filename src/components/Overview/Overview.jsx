import { useState } from "react";
import logo from "../../assets/image/logo.png";
import style from "./overview.module.css";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import TransactionForm from "../TransactionForm/TransactionForm";

const Overview = ({ expense, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className={style.mainCard}>
        <header className={style.headerCard}>
          <img src={logo} alt="logo" style={{ width: "40px" }} />
          <h3 className="uk-text-large">EXPENSE TRACKER APP</h3>
        </header>
        <div className={style.balance}>
          <p>
            Balance : {income - expense}
            <RiMoneyDollarCircleLine className={style.icons} />
          </p>
          <button
            className={"uk-button uk-button-primary " + style.btnAdd}
            onClick={() => setIsShow((preveState) => !preveState)}
          >
            {isShow ? "Cancel" : "Add"}
          </button>
        </div>
        {isShow && <TransactionForm addTransaction={addTransaction} />}
        <div className={style.result}>
          <div className={style.expenseValue}>
            <span className="uk-text-danger">expense : {expense}</span>
          </div>
          <div className={style.incomeValue}>
            <span className="uk-text-success">income : {income}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
