import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Catagories.css';


const Friend = ({ friend }) => {
    // console.log(friend)
    const { name, logo, id } = friend
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/friend/${id}`);
    }
    return (
        <div className='friend'>
            <img src={logo} alt="" />
            <div className='button-section'>
                <h3>Name : {name}</h3>
                <button className='btn-primary' onClick={handleNavigate}>Start Practice</button>
                
            </div>

        </div>
    );
};

export default Friend;