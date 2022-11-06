import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import './App.css';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpenseFilter';
import {useState} from 'react';
import ExpenseList from './components/Expenses/ExpenseList';

function App() {
  const [expenses,setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  const [filteredYear, setFilteredYear] = useState('2020');
  function addExpense(addedExpense){
    setExpenses(expenses=>{ return [
       addedExpense,
       ...expenses
    ]})
  }
  const filteredExpenses = expenses.filter(elem=> {return elem.date.getFullYear()==filteredYear});
  console.log(filteredExpenses);
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  
  return (
    <>
    <NewExpense onSave={addExpense}/>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseList filteredExpenses={filteredExpenses}/>
      </Card>
      </>
  );
}

export default App;
