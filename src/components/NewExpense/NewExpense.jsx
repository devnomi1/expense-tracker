import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
    const [showExpenseForm, setShowExpenseForm]=useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData)
    };
    const handleShowExpenseForm = () => {
        setShowExpenseForm(!showExpenseForm)
    }
	return (
		<div className="new-expense">
			{showExpenseForm ? (
				<ExpenseForm
					onCancel={handleShowExpenseForm}
					onSaveExpenseData={saveExpenseDataHandler}
				/>
			) : (
				<button onClick={handleShowExpenseForm}>Add New Expenses</button>
			)}
		</div>
	);
}

export default NewExpense;
