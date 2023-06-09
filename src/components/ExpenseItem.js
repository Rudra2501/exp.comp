import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>{props.expensename}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
