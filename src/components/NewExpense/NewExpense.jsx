import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
	const [isEditing, setIsEditing] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

        props.onAddExpense(expenseData);
        setIsEditing(false)
	};
	const addEditingExpense = () => {
		setIsEditing(true);
	};
	const stopEditingExpense = () => {
		setIsEditing(false);
	};
	return (
		<div className="new-expense">
			{isEditing ? (
				<ExpenseForm
					onCancel={stopEditingExpense}
					onSaveExpenseData={saveExpenseDataHandler}
				/>
			) : (
				<button onClick={addEditingExpense}>Add New Expenses</button>
			)}
		</div>
	);
}

export default NewExpense;
