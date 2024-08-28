import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 20, category: "Utilities" },
    { id: 3, description: "ccc", amount: 30, category: "Utilities" },
    { id: 4, description: "ddd", amount: 40, category: "Utilities" },
  ]);

  // set category为用户选择category
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  //当selectedCategory非空时，用户选择了一个类别， filter遍历整个expenses Array,生成新的Array
  //新的Array为 category和 selectedCategory相同的，否则显示整个expenses Array
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  // 当onDelete被调用时，会传入一个id参数， 遍历expenses Array，创建一个新的不包含当前id的新Array
  //就是说会排除传入的 id，setExpenses为新的 expenses
  const handleDelete = (id: number) => {
    setExpenses((prevExpenses) => prevExpenses.filter((e) => e.id !== id));
  };

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={handleCategorySelect} />
      </div>

      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
