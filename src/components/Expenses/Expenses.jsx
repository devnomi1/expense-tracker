import React, { useState } from "react";
import ExpanseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

// Controll or statefull Component
function Expenses({ items }) {
	const [filteredYear, setFilteredyear] = useState("2020");


	const filterChangeHandler = (selectedYear) => {
		setFilteredyear(selectedYear);
	};
	// Filter expenses by the Selected Year
	const filteredExpense = items.filter(
		(expense) => expense.date.getFullYear().toString() === filteredYear
	);

	// Conditional rendering for expenses
	let expensesContent = <p>No expenses found.</p>;
	if (filteredExpense > 0) {
		expensesContent = filteredExpense.map((expense) => (
			<ExpanseItem
				key={expense.id}
				title={expense.title}
				date={expense.date}
				amount={expense.amount}
			/>
		));
	}

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{expensesContent}
		</Card>
	);
}
export default Expenses;
