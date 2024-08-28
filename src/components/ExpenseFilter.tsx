import categories from "../categorise";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectCategory(event.target.value);
  };
  return (
    <select className="form-select" onChange={handleCategoryChange}>
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
