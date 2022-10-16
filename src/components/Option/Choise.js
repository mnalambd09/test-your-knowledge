import React from 'react';
import './Choise.css'

const Option = ({multiple}) => {
    // const {option} = multiple
    // console.log(multiple)
    return (
        <div className='option'>
            <p>Option : {multiple}</p>
            
        </div>
    );
};

export default Option;