import React, { useState } from 'react';
import Card from '../ui/Card';

import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpenseFilter
        filteredYear={filteredYear}
        onChangeYear={filterChangeHandler}
      />

      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
