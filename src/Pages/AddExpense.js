import React from 'react'
import AddForm from '../Components/AddForm/AddForm'
import Topfold from '../Components/Topfold/Topfold'
import './addExpense.css'

const AddExpense = () => {
  return (
    <div className='add-expense'>
        <Topfold />
        <AddForm />
    </div>
  )
}

export default AddExpense