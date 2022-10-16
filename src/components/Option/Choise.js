import React from 'react';
import './Choise.css'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ multiple }) => {
    const notify = () => toast("Your Answer is Wrong !!!");
    return (
        <div className='option'>
            <p>Option : {multiple} </p>

            <Form.Check type="radio" aria-label="radio 1" onClick={notify} />
            <ToastContainer />

        </div>
    );
};

export default Option;