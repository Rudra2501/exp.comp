import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [];

  for (let i = 0; i < 100; i++) {
    expenses.push(
      <ExpenseItem
        expensename={`Expense ${i + 1}`}
        location={`Location ${i + 1}`}
      />
    );
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses}
    </div>
  );
}

export default App;
