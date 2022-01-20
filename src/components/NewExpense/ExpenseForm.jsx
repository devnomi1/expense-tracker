import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	// // With Single State updating multiple inputs
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const handleChange = (event) => {
		setEnteredTitle(event.target.value);
		// Method one to update the multite state
		// setUserInput({
		//     ...userInput,
		//     enteredTitle:event.target.value
		// })

		// method two
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
		console.log(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

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
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
}

export default ExpenseForm;