import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';

import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  } 

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  const renderExpenseContent = () => {
    if (filteredExpenses.length === 0) {
      return <p>No Expenses Found.</p>
    } else {
      return filteredExpenses.map(expense => {
        return (
          <ExpenseItem key={expense.id} 
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}
          />
        )
      })
    }
  }



  console.log(filteredYear);
    return ( 
        <Card className="expenses">
        <ExpenseFilter 
        filteredYear={filteredYear} 
        onChangeYear={filterChangeHandler} 
        />
        {renderExpenseContent()}
        </Card>
     );
}
 
export default Expenses;