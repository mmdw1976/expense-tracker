import React from 'react';

import ExpenseItem from './components/ExpenseItem';

const expenses = [
  {
    title: 'Car Insurance',
    amount: 297.67,
    date: new Date(2021, 2, 28),
    id: 1
  },
  {
    title: 'OLED TV',
    amount: 999.99,
    date: new Date(2020, 3, 20),
    id: 2
  },
  {
    title: 'Dog Food',
    amount: 14.45,
    date: new Date(2021, 11, 14),
    id: 3
  },
  {
    title: 'Candles',
    amount: 4.56,
    date: new Date(2021, 5, 26),
    id: 4
  }
]

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map(expense => {
        return (
          <ExpenseItem key={expense.id} 
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date.toISOString()}
          />
        )
      })}
    </div>
  );
}

export default App;
