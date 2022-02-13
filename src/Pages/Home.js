import React from 'react'
import ExpenseList from '../Components/Expense List/ExpenseList'
import Topfold from '../Components/Topfold/Topfold'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <Topfold />
        <ExpenseList />
    </div>
  )
}

export default Home