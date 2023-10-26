import { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Card'

const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title)

    const clickHandler = ()=> {
        setTitle('Updated!!')
    }

    return (
    <Cards className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>change title</button>
    </Cards>
    )
}

export default ExpenseItem;