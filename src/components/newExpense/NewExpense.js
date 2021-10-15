import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [edit, setEdit] = useState(false);

    const startEditingHandler = () => {
        setEdit(true);
    }

    const cancelEdit = () => {
        setEdit(false)
    }
    return ( 
        <div className="new-expense">
            {!edit && <button onClick={startEditingHandler}>Add New Expense</button>}
            {edit && <ExpenseForm onSaveExpenseData={props.saveExpenseData} cancelEdit={cancelEdit} />}
        </div>
     );
}
 
export default NewExpense;