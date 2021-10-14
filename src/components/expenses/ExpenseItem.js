import React, {useState} from 'react';
import Card from '../ui/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const onChangeText = () => {
    setTitle('Text Changed')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={onChangeText}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;