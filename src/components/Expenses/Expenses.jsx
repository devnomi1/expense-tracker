import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesList items={filteredExpense} />
		</Card>
	);
}
export default Expenses;
