import React from 'react';
import './Choise.css'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';


const Option = ({ multiple, id }) => {
    const notify = () => toast("Your Answer is Wrong !!!");
    return (
        <div className='option'>
            <p>Option : {multiple} </p>

            <Form.Check type="radio" name={id} aria-label="radio 1" onClick={notify} />
            

        </div>
    );
};

export default Option;