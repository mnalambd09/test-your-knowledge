import React from 'react';
import './Choise.css'
import Form from 'react-bootstrap/Form';

const Option = ({multiple}) => {
    // const {option} = multiple
    // console.log(multiple)
    return (
        <div className='option'>
            <p>Option : {multiple}</p>

            <Form.Check type="radio" aria-label="radio 1" />
        
        </div>
    );
};

export default Option;