import React from 'react'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import Card from './Card'
import './expenseList.css'

const ExpenseList = () => {

    const { expenseList: list, query } = useSelector((state) => state.expenses)
    const filteredList = list.filter(item => item.title.includes(query))
    const notifySuccess = () => toast.success("Expense Deleted Successfully👍")

    return (
        <div className='expense-list'>
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
            />
            {filteredList.length ? (
                filteredList.map((item) => (
                    <Card item={item} notifySuccess={notifySuccess}/>
                ))
            ) : (
                <div className='empty-state'>
                    <img src={require("../../assets/images/empty.png")}
                        alt="Empty List"
                        className='empty-image' />
                    <label>Oops! Seems like your Expense List is Empty 😥</label>
                </div>
            )}
        </div>
    )
}

export default ExpenseList