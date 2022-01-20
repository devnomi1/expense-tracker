import React, { useState } from "react";
import ExpanseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses({ items }) {
	const [filteredYear, setFilteredyear] = useState("2020");
	const filterChangeHandler = (enteredYear) => {
		console.log("Expenses.js");
		setFilteredyear(enteredYear)
		 }
	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />

			<ExpanseItem
				title={items[0].title}
				date={items[0].date}
				amount={items[0].amount}
			/>
			<ExpanseItem
				title={items[1].title}
				date={items[1].date}
				amount={items[1].amount}
			/>
			<ExpanseItem
				title={items[2].title}
				date={items[2].date}
				amount={items[2].amount}
			/>
			<ExpanseItem
				title={items[3].title}
				date={items[3].date}
				amount={items[3].amount}
			/>
		</Card>
	);
}
export default Expenses;
