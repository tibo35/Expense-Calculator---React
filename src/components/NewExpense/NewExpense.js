import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isToggle, setIsToggle] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsToggle(false)
  };

const toggleSwitchOn = () => {
  setIsToggle(true);
}
const toggleSwitchOff = () => {
  setIsToggle(false)
}
  return (
    <div>
    <div className="new-expense">
    {!isToggle && <button onClick={toggleSwitchOn}>Add a New Expense</button>}
    
    {isToggle && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleSwitchOff}/>}
      
    </div>
        </div>
  );
};

export default NewExpense;
