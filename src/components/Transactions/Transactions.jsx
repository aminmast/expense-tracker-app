import { useEffect, useState } from "react";
import style from "./transactions.module.css";

const Transactions = ({ transactions }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transactions);

  const filterHandler = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transactions);
      return;
    } else {
      const filtered = filteredTnx.filter((t) =>
        t.desc.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredTnx(filtered);
    }
  };

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    filterHandler(e.target.value);
  };

  useEffect(() => {
    filterHandler(searchValue);
  }, [transactions]);

  return (
    <div className={style.transactionsList}>
      <div className={style.searchInput}>
        <input
          type="text"
          name="search"
          placeholder="search ... "
          value={searchValue}
          onChange={changeHandler}
        />
        <span uk-icon="search"></span>
      </div>
      {filteredTnx.map((transaction) => {
        return (
          <div
            key={transaction.id}
            className={`
              ${style.transactionItem} ${
              transaction.type === "expense"
                ? style.expenseItem
                : style.incomeItem
            }`}
          >
            <span>{transaction.desc}</span>
            <div className={style.transactionDate}>
              <p className="uk-text-small">
                {transaction.time}
                <br />
                {transaction.date}
              </p>
            </div>
            <span>{transaction.amount} $</span>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;
