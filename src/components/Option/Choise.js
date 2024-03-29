import React from 'react';
import './Choise.css'
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';


const Option = ({ multiple, id }) => {
    const notify = () => toast.success('Your Answer is Wrong', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return (
        <div className='option'>
            <ul>
                <li>{multiple}</li>
            </ul>
            <Form.Check type="radio" name={id} aria-label="radio 1" onClick={notify} />
        </div>
    );
};

export default Option;