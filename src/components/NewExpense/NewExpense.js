import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';
function NewExpense(props){
    function saveExpenseHandler(expense){
        const enteredData={
            "id":Math.random().toString(),
            ...expense
        }
        props.onSave(enteredData);
    }
    return(
        <div className='new-expense'>
           <ExpenseForm onSaveExpenseData={saveExpenseHandler}/> 
        </div>
    )
}
export default NewExpense;