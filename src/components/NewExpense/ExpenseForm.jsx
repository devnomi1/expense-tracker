import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	// With Single State updating multiple inputs

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const handleChange = (event) => {
		setEnteredTitle(event.target.value);
		// Method one to update the multiple states
		// setUserInput({
		//     ...userInput,
		//     enteredTitle:event.target.value

		// Method two to update the multiple states
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: event.target.value };
		// });
	};
	const handleChangeAmount = (event) => {
		setEnteredAmount(event.target.value);
	};
	const handleChangeDate = (event) => {
		setEnteredDate(event.target.value);
	};

	const handlerSubmit = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};
	const cancelExpenseFormHandle = () => {
		props.onCancel()
	}

	return (
		<form onSubmit={handlerSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={handleChange} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={handleChangeAmount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={handleChangeDate}
					/>
				</div>
				<div className="new-expense__actions">
					<button onClick={cancelExpenseFormHandle}>Cancel</button>
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
}

export default ExpenseForm;
