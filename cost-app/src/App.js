import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

import "./App.css";

const App = () => (
  <div>
    <Header />
    <Balance />
    <IncomeExpense />
    <TransactionList />
    <AddTransaction />
  </div>
);

export default App;
