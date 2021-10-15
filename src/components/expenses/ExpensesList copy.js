import React from 'react';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    const renderExpenseContent = () => {
        if (props.items.length === 0) {
          return <p>No Expenses Found.</p>
        } else {
          return props.items.map(expense => {
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
    return renderExpenseContent();
}
 
export default ExpensesList;