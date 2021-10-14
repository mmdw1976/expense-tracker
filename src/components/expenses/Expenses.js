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

  console.log(filteredYear);
    return ( 
        <Card className="expenses">
        <ExpenseFilter 
        filteredYear={filteredYear} 
        onChangeYear={filterChangeHandler} 
        />
        {props.expenses.map(expense => {
            return (
              <ExpenseItem key={expense.id} 
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}
              />
            )
          })}
        </Card>
     );
}
 
export default Expenses;