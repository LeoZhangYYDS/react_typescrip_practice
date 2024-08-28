import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 20, category: "Utilities" },
    { id: 3, description: "ccc", amount: 30, category: "Utilities" },
    { id: 4, description: "ddd", amount: 40, category: "Utilities" },
  ]);

  // 当onDelete被调用时，会传入一个id参数， 遍历expenses Array，创建一个新的不包含当前id的新Array
  //就是说会排除传入的 id，setExpenses为新的 expenses
  const handleDelete = (id: number) => {
    setExpenses((prevExpenses) => prevExpenses.filter((e) => e.id !== id));
  };

  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
