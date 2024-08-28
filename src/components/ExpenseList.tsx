interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  // reduce用于累加数组中所有amount的值，从0开始累加，acc的初始值为0，最终返回累加的总值
  const total = expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2);
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              {/* 当按钮被点击时，调用onDelete函数，并将当前的expense对象的id传递给它 */}
              {/* 这样就标识出用户想删除的条目 */}
              <button onClick={() => onDelete(expense.id)} className="btn btn-outline-danger">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${total}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
