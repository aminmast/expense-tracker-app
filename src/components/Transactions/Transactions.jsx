import style from "./transactions.module.css";

const Transactions = ({ transactions }) => {
  return (
    <div className={style.transactionsList}>
      {transactions.map((transaction) => {
        return (
          <div
            className={`
              ${style.transactionItem} ${
              transaction.type === "expense"
                ? style.expenseItem
                : style.incomeItem
            }`}
          >
            <span>{transaction.desc}</span>
            <div className={style.transactionDate}>
              <p className="uk-text-small">{transaction.time}</p>
              <p className="uk-text-small">{transaction.date}</p>
            </div>
            <span>{transaction.amount} $</span>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;
