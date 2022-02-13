import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { addExpensecategories } from '../../Constants/addExpense'
import { addExpense } from '../../redux/actions/expenses'
import './addForm.css'
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './SuccessModal'

const AddForm = () => {

    const cat = addExpensecategories
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState()
    const dispatch = useDispatch()

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value)
        if (isNaN(val)) {
            setAmount("")
            return
        }
        setAmount(val)
    }

    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)
    }

    const handleSubmit = () => {
        if (title === "" || amount === "" || !category) {
            const notify = () => toast("Please Enter valid data! ☹️");
            notify()
            return
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date(),
        };
        dispatch(addExpense(data))
        setModalOpen(true)
    }

    return (
        <div className='add-form'>
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
            />
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div className='form-item'>
                <label>Title</label>
                <input
                    placeholder='Name of your expenditure'
                    value={title}
                    onChange={(e) => handleTitle(e)}
                />
            </div>
            <div className='form-item'>
                <label>Amount ₹</label>
                <input
                    placeholder='Amount of your Expense'
                    value={amount}
                    className="amount-input"
                    onChange={(e) => handleAmount(e)}
                />
            </div>
            <div className='category-container-parent'>
                <div className='category'>
                    <div className='category-dropdown' onClick={() => setCategoryOpen(!categoryOpen)}>
                        <label>{category ? category.title : "Category"}</label>
                        <i class="fi fi-rr-angle-down"></i>
                    </div>
                    {categoryOpen &&
                        <div className='category-container'>
                            {cat.map(category => (
                                <div className='category-item'
                                    style={{ borderRight: `5px solid ${category.color}` }}
                                    key={category.id}
                                    onClick={() => handleCategory(category)}>
                                    <label>{category.title}</label>
                                    <img src={category.icon} alt={category.title} />
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <div className='form-add-btn'>
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i class="fi fi-rr-cursor-plus"></i>
                </div>
            </div>
        </div>
    )
}

export default AddForm