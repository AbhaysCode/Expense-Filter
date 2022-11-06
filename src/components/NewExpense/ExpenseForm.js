import './ExpenseForm.css';
import {useState} from 'react';

function ExpenseForm(props){
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");
    const [date,setDate] = useState("");

    function changeTitleHandler(event){
        setTitle(event.target.value);
    }
    function changeAmountHandler(event){
        setAmount(event.target.value);
    }
    function changeDateHandler(event){
        setDate(event.target.value);
    }
    function handleFormSubmit(event){
        event.preventDefault();
        const expenseData = {
            "title":title,
            "amount":amount,
            "date":new Date(date)
        }
        props.onSaveExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={changeTitleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={changeAmountHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={changeDateHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;