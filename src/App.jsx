import "./App.css";
import ExpeseApp from "./components/ExpeseApp/ExpenseApp";

const App = () => {
  document.title = "Expense Tracker App";
  return (
    <div className="body">
      <ExpeseApp />
    </div>
  );
};

export default App;
