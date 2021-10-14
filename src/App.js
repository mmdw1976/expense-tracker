import React, {useState} from 'react';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';
import {v4 as uuid} from 'uuid';

const DUMMY = [
  {
    title: 'Car Insurance',
    amount: 297.67,
    date: new Date(2021, 2, 28),
    id: 1,
  },
  {
    title: 'OLED TV',
    amount: 999.99,
    date: new Date(2020, 3, 20),
    id: 2,
  },
  {
    title: 'Dog Food',
    amount: 14.45,
    date: new Date(2021, 11, 14),
    id: 3,
  },
  {
    title: 'Candles',
    amount: 4.56,
    date: new Date(2021, 5, 26),
    id: 4,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY)
  const onAddExpense = (data) => {
    setExpenses((prevState) => {
      return [{...data, id: uuid()}, ...prevState]
    });
  }
  return (
    <div>
      <NewExpense saveExpenseData={onAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
