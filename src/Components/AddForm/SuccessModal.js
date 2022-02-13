import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './successModal.css'

const SuccessModal = ({ modalOpen, setModalOpen }) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (

        <Modal isOpen={modalOpen} style={customStyles}>
            <div className='modal-inner'>
                <label>Expense added successfully</label>
                <img src={require("../../assets/images/added-image.png")}
                    alt="Expense added"
                    className='added-img' />
                <Link to="/">
                    <div className='takehome-btn'>
                        <i class="fi fi-rr-home"></i>
                        Home
                    </div>
                </Link>
            </div>
        </Modal>
    )
}

export default SuccessModal